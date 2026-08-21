import { motion, useReducedMotion } from "framer-motion";
export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.45 }}>{children}</motion.div>;
}
