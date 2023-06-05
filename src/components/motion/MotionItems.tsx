import { motion } from 'framer-motion'

export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const MotionItems = ({ children, delayChildren = 0.3, staggerChildren = 0.3, containerClass = '', immidiate = false, once = true }) => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: delayChildren,
                staggerChildren: staggerChildren
            }
        },
    }

    return (
        <motion.div
            className={containerClass}
            variants={container}
            initial="hidden"
            animate={immidiate ? "visible" : ""}
            whileInView={immidiate ? "" : "visible"}
            viewport={{ once: once }}
        >
            {children}
        </motion.div>
    )
}

export default MotionItems