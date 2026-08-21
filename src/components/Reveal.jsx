import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 40, x = 0, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, x }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, x: 0 }}
      animate={reduceMotion ? { opacity: 1, y: 0, x: 0 } : undefined}
      transition={{ duration: 0.6, delay: reduceMotion ? 0 : delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
