import { motion } from 'framer-motion'

const MotionHorizontal = ({ children, x, y, duration, delay = 0, immidiate = true, once = true, _key = '', _className = '' }) => (
  <motion.div
    initial={{ x: x, y: y, opacity: 0 }}
    animate={immidiate ? { x: 0, y: 0, opacity: 1 } : ""}
    whileInView={immidiate ? "" : { x: 0, y: 0, opacity: 1 }}
    viewport={{ once: once }}
    transition={{ duration: duration, delay }}
    key={_key}
    className={_className}
  >
    {children}
  </motion.div>
)

export default MotionHorizontal