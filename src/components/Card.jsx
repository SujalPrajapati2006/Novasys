import { motion } from "framer-motion";

export function Card({ children, className = "", hover = true, ...props }) {
  return (
    <div
      className={`glass-card rounded-xl p-6 ${hover ? "cursor-default" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function AnimatedCard({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`glass-card rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
