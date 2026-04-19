import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section, SectionTitle } from "../components/Section";
import { AnimatedCard } from "../components/Card";
import { team, timeline, projects, projectCategories } from "../data";

function TimelineSection() {
  return (
    <Section className="bg-noir-dark/20">
      <SectionTitle label="Our Story" title="TIMELINE" subtitle="From a 3-person team to a global engineering firm." />
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/15 to-transparent" />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-6 mb-8 last:mb-0"
          >
            {/* Year bubble */}
            <div className="flex-shrink-0 w-16 flex flex-col items-center pt-1">
              <div className="w-3 h-3 rounded-full bg-cyan-400 border-2 border-cyan-400/30 shadow-[0_0_8px_rgba(6,182,212,0.4)] relative z-10" />
              <div className="text-cyan-500/60 text-xs font-mono mt-1 whitespace-nowrap">{item.year}</div>
            </div>

            <div className="glass-card rounded-xl p-5 flex-1">
              <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function TeamSection() {
  return (
    <Section>
      <SectionTitle label="The People" title="OUR TEAM" subtitle="Senior engineers who've built systems at global scale." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map((member, i) => (
          <AnimatedCard key={member.id} delay={i * 0.08} className="text-center group">
            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-display tracking-wider border transition-all duration-300 group-hover:shadow-lg"
              style={{
                background: `${member.color}15`,
                borderColor: `${member.color}25`,
                color: member.color,
              }}
            >
              {member.initials}
            </div>
            <h3 className="text-white font-semibold text-sm mb-0.5">{member.name}</h3>
            <div className="text-cyan-500/60 text-xs font-mono mb-3">{member.role}</div>
            <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card rounded-xl p-6 group relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/4 to-transparent rounded-xl pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <span className="chip">{project.category}</span>
          <span className="text-gray-700 text-xs font-mono">{project.year}</span>
        </div>
        <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-100 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono text-gray-600 bg-white/3 px-2 py-0.5 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>
        <div className="border-t border-white/5 pt-3 flex items-center justify-between">
          <span className="text-cyan-400/70 text-xs font-mono">{project.highlight}</span>
          <ExternalLink size={13} className="text-gray-700 group-hover:text-cyan-500 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}

function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section className="bg-noir-dark/20">
      <SectionTitle label="Case Studies" title="PROJECTS" subtitle="Selected work from 80+ enterprise engagements." />

      <div className="flex flex-wrap items-center gap-2 justify-center mb-10">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
              filter === cat
                ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400"
                : "border-white/8 bg-white/3 text-gray-500 hover:text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="pt-32 pb-8 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="chip inline-block mb-4">Who We Are</div>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">
            ABOUT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              US
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A team of senior engineers obsessed with building systems that don't break.
          </p>
        </motion.div>
      </div>

      <TimelineSection />
      <div className="section-divider" />
      <TeamSection />
      <div className="section-divider" />
      <PortfolioSection />
    </>
  );
}
