import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ items }) {
  const [active, setActive] = useState(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-300 ${
            active === i
              ? "border-cyan-500/30 bg-cyan-500/5"
              : "border-white/5 bg-white/[0.02] hover:border-white/10"
          }`}
        >
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className={`font-medium text-sm md:text-base transition-colors ${active === i ? "text-cyan-400" : "text-white"}`}>
              {item.q}
            </span>
            <div className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              active === i ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-gray-400"
            }`}>
              {active === i ? <Minus size={12} /> : <Plus size={12} />}
            </div>
          </button>

          <AnimatePresence initial={false}>
            {active === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
