import fs from "fs";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPOSITORIES = [
  {
    owner: "AlessioPoggi99",
    repo: "Party-Games",
    fileName: "partygames",
    title: "Party games",
    pubDate: "Feb 23 2024",
    updatedDate: "Jan 5 2025",
  },
  {
    owner: "AlessioPoggi99",
    repo: "Wordle-ita",
    fileName: "wordle",
    title: "Wordle",
    pubDate: "Sep 16 2023",
    updatedDate: "Oct 3 2023",
  },
  {
    owner: "AlessioPoggi99",
    repo: "Fan-made-Mijnlieff",
    fileName: "mijnlieff",
    title: "Mijnlieff",
    pubDate: "Jul 17 2022",
    updatedDate: "Aug 26 2023",
  },
  {
    owner: "AlessioPoggi99",
    repo: "chess-vision-opencv",
    fileName: "acmr",
    title: "Automatic chess move recognition",
    pubDate: "Sep 26 2024",
    updatedDate: "Sep 26 2024",
  },
];
const OUTPUT_DIR = `${__dirname}/../src/content/blog/`;

async function fetchRepoDetails(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(
      `Errore nel fetch dei dettagli della repository ${repo}:`,
      error.response?.data || error.message,
    );
    return null;
  }
}

async function fetchReadme(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/README.md`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3.raw",
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(
      `Errore nel fetch del README di ${repo}:`,
      error.response?.data || error.message,
    );
    return null;
  }
}

function generateFrontmatter(repoData, description, tags) {
  return `---
title: ${repoData.title}
description: ${description}
pubDate: ${repoData.pubDate}
updatedDate: ${repoData.updatedDate}
heroImage: "/${repoData.fileName}/hero.png"
tags: ${JSON.stringify(tags)}
---
`;
}

function saveReadmeWithFrontmatter(fileName, frontmatter, content) {
  const filePath = path.join(OUTPUT_DIR, `${fileName}.md`);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(filePath, frontmatter + "\n" + content, "utf-8");
  console.log(`README con frontmatter salvato per ${fileName} in ${filePath}`);
}

async function main() {
  for (const repoData of REPOSITORIES) {
    console.log(
      `Scarico dettagli e README da ${repoData.owner}/${repoData.repo}...`,
    );

    const repoDetails = await fetchRepoDetails(repoData.owner, repoData.repo);
    const readmeContent = await fetchReadme(repoData.owner, repoData.repo);

    if (repoDetails && readmeContent) {
      const frontmatter = generateFrontmatter(
        repoData,
        repoDetails.description,
        repoDetails.topics,
      );
      saveReadmeWithFrontmatter(repoData.fileName, frontmatter, readmeContent);
    }
  }
  console.log("Tutti i README sono stati scaricati e salvati.");
}

main().catch((error) => {
  console.error("Errore nello script:", error);
});
