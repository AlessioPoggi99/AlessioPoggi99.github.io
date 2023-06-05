import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Button = ({ children, scale = 1.1, to, isScrollLink, blank = false, buttonClass = ''}) => {
    return (
        <motion.div
            whileHover={{ scale: scale }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {isScrollLink ?
                <Link
                    className={buttonClass}
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={55}
                    duration={300}
                    hashSpy={true}
                    href={`/#${to}`}
                >
                    {children}
                </Link>
            :
                <a
                    href={to}
                    target={blank ? '_blank' : ''}
                    className={buttonClass}
                >
                    {children}
                </a>
            }
        </motion.div>
    )
}

export default Button
