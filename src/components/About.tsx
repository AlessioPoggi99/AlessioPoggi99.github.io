import { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden"); // remove if you want animate only once
        }
    }, [controls, inView]);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3
            }
        },
    }
      
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const skills = [
        { name: 'Javascript', vote: 9 },
        { name: 'Typescript', vote: 6 },
        { name: 'ReactJs', vote: 7.5 },
        { name: 'CSS', vote: 7 },
        { name: 'Python', vote: 6.5 },
    ]

    return (
        <motion.div
            className="container grid grid-cols-2 gap-x-10 w-full"
            variants={container}
            initial="hidden"
            ref={ref}
            animate={controls}
        >
            <motion.div className="text-justify" variants={item}>
                <h2 className="text-[var(--text-on)] text-lg mb-6 font-semibold">My name is <span className="text-[color:var(--decoration)] font-bold">Alessio Poggi</span>, I am a Software Engineer and Developer based in Pavia, Italy 🇮🇹</h2>
                <p className="text-[var(--text-off)]">I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </motion.div>
            <ul className="flex flex-col justify-center gap-y-3">
                {skills.map((skill) => 
                    <motion.li key={skill.name} variants={item}>
                        <h3 className="flex justify-between font-semibold text-sm mb-1">{skill.name}<span>{skill.vote}/10</span></h3>
                        <div className="w-full h-6 border border-[color:var(--decoration)]">
                            <div className="h-full bg-[color:var(--decoration)]" style={{width: `${skill.vote * 10}%`}}></div>
                        </div>
                    </motion.li>
                )}
            </ul>
        </motion.div>
    )
}