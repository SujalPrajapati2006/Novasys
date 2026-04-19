import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud, Shield, Code2, Brain, GitBranch, Smartphone,
  Database, Zap, Lock, Calculator, CheckSquare, Square
} from "lucide-react";
import { Section, SectionTitle } from "../components/Section";
import { AnimatedCard } from "../components/Card";
import { services, serviceCategories, calcServices } from "../data";

const iconMap = { Cloud, Shield, Code2, Brain, GitBranch, Smartphone, Database, Zap, Lock };

function ServiceFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 justify-center mb-10">
      {serviceCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
            active === cat
              ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400"
              : "border-white/8 bg-white/3 text-gray-500 hover:text-gray-200 hover:border-white/15"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function ServiceCard({ svc, index }) {
  const Icon = iconMap[svc.icon] || Code2;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="glass-card rounded-xl p-6 group relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/4 to-transparent rounded-xl pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:shadow-[0_0_14px_rgba(6,182,212,0.2)] group-hover:bg-cyan-500/20 transition-all">
            <Icon size={20} className="text-cyan-400" />
          </div>
          <span className="chip">{svc.category}</span>
        </div>
        <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-100 transition-colors">
          {svc.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {svc.tags.map((t) => (
            <span key={t} className="text-xs font-mono text-gray-600 bg-white/3 px-2 py-0.5 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>
        <div className="border-t border-white/5 pt-3 flex items-center justify-between">
          <span className="text-xs font-mono text-gray-700">
            FROM <span className="text-cyan-500/70">${svc.price.toLocaleString()}</span>
          </span>
          {svc.featured && (
            <span className="text-xs font-mono text-cyan-500/50 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/15">
              POPULAR
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCalculator() {
  const [selected, setSelected] = useState(new Set());

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const total = calcServices
    .filter((s) => selected.has(s.id))
    .reduce((sum, s) => sum + s.base, 0);

  const maxTime = calcServices
    .filter((s) => selected.has(s.id))
    .map((s) => parseInt(s.time))
    .reduce((a, b) => Math.max(a, b), 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-20 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden"
    >
      <div className="p-6 border-b border-white/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
          <Calculator size={16} className="text-cyan-400" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Project Scope Calculator</h3>
          <p className="text-gray-600 text-xs font-mono">Select services to estimate project size</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-6 space-y-3 border-r border-white/5">
          {calcServices.map((svc) => {
            const isChecked = selected.has(svc.id);
            return (
              <label
                key={svc.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                  isChecked ? "bg-cyan-500/8 border border-cyan-500/20" : "bg-white/2 border border-white/5 hover:bg-white/4"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(svc.id)}
                  className="hidden"
                />
                {isChecked ? (
                  <CheckSquare size={16} className="text-cyan-400 flex-shrink-0" />
                ) : (
                  <Square size={16} className="text-gray-600 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium transition-colors ${isChecked ? "text-cyan-100" : "text-gray-300"}`}>
                    {svc.label}
                  </div>
                  <div className="text-xs font-mono text-gray-600">{svc.time}</div>
                </div>
                <div className={`text-xs font-mono ${isChecked ? "text-cyan-400" : "text-gray-600"}`}>
                  ${svc.base.toLocaleString()}
                </div>
              </label>
            );
          })}
        </div>

        <div className="p-6 flex flex-col justify-center">
          <div className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-4">
            Estimated Scope
          </div>

          {selected.size === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-700 text-sm">Select services to calculate</div>
              <div className="text-gray-800 text-xs mt-1 font-mono">← Check items on the left</div>
            </div>
          ) : (
            <motion.div
              key={total}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-4">
                {calcServices
                  .filter((s) => selected.has(s.id))
                  .map((s) => (
                    <div key={s.id} className="flex justify-between text-sm">
                      <span className="text-gray-400">{s.label}</span>
                      <span className="text-white font-mono">${s.base.toLocaleString()}</span>
                    </div>
                  ))}

                <div className="section-divider my-2" />

                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Total Estimate</span>
                  <span className="text-cyan-400 font-display text-2xl tracking-wider">
                    ${total.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs font-mono">Services Selected</span>
                  <span className="text-gray-300 text-xs font-mono">{selected.size} of {calcServices.length}</span>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/15">
                  <div className="text-xs text-gray-400 font-mono">
                    * Starting estimates only. Final scope defined during discovery.
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? services : services.filter((s) => s.category === filter);

  return (
    <>
      <div className="pt-32 pb-4 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="chip inline-block mb-4">What We Do</div>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              SERVICES
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Precision-engineered solutions across every layer of your technology stack.
          </p>
        </motion.div>
      </div>

      <Section>
        <ServiceFilter active={filter} onChange={setFilter} />

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">No services in this category.</div>
        )}

        <ServiceCalculator />
      </Section>
    </>
  );
}
