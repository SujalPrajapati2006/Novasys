import { motion } from "framer-motion";

export function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {label && <div className="chip inline-block mb-4">{label}</div>}
      <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
