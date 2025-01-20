import { motion } from "framer-motion";
import MotionItems, { item } from "./motion/MotionItems";

export default function About() {
  const skills = [
    { name: "Javascript", vote: 8 },
    { name: "Typescript", vote: 7 },
    { name: "ReactJs", vote: 7.5 },
    { name: "CSS", vote: 6 },
    { name: "Python", vote: 6.5 },
  ];

  return (
    <MotionItems containerClass="container grid grid-cols-2 gap-x-10 w-full">
      <motion.div className="text-justify" variants={item}>
        <h2 className="text-[var(--text-on)] text-lg mb-6 font-semibold">
          My name is{" "}
          <span className="text-[color:var(--decoration)] font-bold">
            Alessio Poggi
          </span>
          , I am a Software Engineer and Developer based in Pavia, Italy 🇮🇹
        </h2>
        <p className="text-[var(--text-off)]">
          I possess an impressive arsenal of skills in HTML, CSS, JavaScript,
          React, Tailwind, and SCSS. I excel in designing and maintaining
          responsive websites that offer a smooth user experience. My expertise
          lies in crafting dynamic, engaging interfaces through writing clean
          and optimized code and utilizing cutting-edge development tools and
          techniques. I am also a team player who thrives in collaborating with
          cross-functional teams to produce outstanding web applications.
        </p>
      </motion.div>
      <ul className="flex flex-col justify-center gap-y-3">
        {skills.map((skill) => (
          <motion.li key={skill.name} variants={item}>
            <h3 className="flex justify-between font-semibold text-sm mb-1">
              {skill.name}
              <span>{skill.vote}/10</span>
            </h3>
            <div className="w-full h-6 border border-[color:var(--decoration)]">
              <div
                className="h-full bg-[color:var(--decoration)]"
                style={{ width: `${skill.vote * 10}%` }}
              ></div>
            </div>
          </motion.li>
        ))}
      </ul>
    </MotionItems>
  );
}

