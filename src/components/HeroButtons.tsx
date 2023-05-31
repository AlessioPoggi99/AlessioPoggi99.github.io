import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function App() {
    return (
        <div className="hero-btn-container mt-10 flex items-center justify-center gap-x-6">
            <motion.a
                href="/alessio-poggi-cv.pdf"
                target="_blank"
                download="alessio-poggi-cv"
                className="rounded-md bg-[color:var(--decoration)] px-3.5 py-2.5 text-sm font-semibold text-[var(--text-on)] shadow-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                Download CV
            </motion.a>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <Link
                    className="text-sm font-semibold leading-6 text-[var(--text-on)] cursor-pointer"
                    to={'contacts'}
                    spy={true}
                    smooth={true}
                    offset={55}
                    duration={300}
                    hashSpy={true}
                    href={`/#contacts`}
                >
                    Hire me <span aria-hidden="true">&darr;</span>
                </Link>
            </motion.div>
        </div>
  );
}
