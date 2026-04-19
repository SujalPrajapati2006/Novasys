import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Cloud, Shield, Code2, Brain, GitBranch, Smartphone,
  Star, Quote, ChevronRight, Terminal, Cpu, Globe
} from "lucide-react";
import { Section, SectionTitle } from "../components/Section";
import { AnimatedCard } from "../components/Card";
import { services, testimonials, stats, faqs } from "../data";
import Accordion from "../components/Accordion";

const iconMap = { Cloud, Shield, Code2, Brain, GitBranch, Smartphone };

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 hero-glow bg-grid overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute top-24 left-8 text-cyan-500/20 font-mono text-xs">
        <div>{"// SYS INIT"}</div>
        <div>{"// LOADING..."}</div>
      </div>
      <div className="absolute top-24 right-8 text-cyan-500/20 font-mono text-xs text-right">
        <div>{"ENV: PRODUCTION"}</div>
        <div>{"BUILD: STABLE"}</div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cyan-500/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="chip">Est. 2018 — Bangalore, India</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-widest text-white mb-2"
        >
          NOVA
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 glow-text">
            SYS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build{" "}
          <span className="text-white font-medium">cloud infrastructure</span>,{" "}
          <span className="text-white font-medium">secure systems</span>, and{" "}
          <span className="text-white font-medium">intelligent software</span>{" "}
          that scale to millions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact">
            <button className="btn-primary flex items-center gap-2 text-base px-8 py-3">
              Start a Project <ArrowRight size={16} />
            </button>
          </Link>
          <Link to="/services">
            <button className="btn-ghost flex items-center gap-2 text-base px-8 py-3">
              Our Services <ChevronRight size={16} />
            </button>
          </Link>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl text-cyan-400 tracking-widest">{s.value}</div>
              <div className="text-gray-600 text-xs mt-1 font-mono uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function BentoServices() {
  const featured = services.filter((s) => s.featured).slice(0, 5);

  return (
    <Section className="bg-noir-dark/30">
      <SectionTitle
        label="What We Build"
        title="OUR SERVICES"
        subtitle="From architecture to execution — we cover every layer of your digital stack."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featured.map((svc, i) => {
          const Icon = iconMap[svc.icon] || Code2;
          const isLarge = i === 0;
          return (
            <AnimatedCard
              key={svc.id}
              delay={i * 0.07}
              className={`group relative overflow-hidden ${isLarge ? "lg:col-span-2" : ""}`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.2)] transition-all duration-300">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <span className="chip">{svc.category}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-100 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.description}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((t) => (
                    <span key={t} className="text-xs font-mono text-gray-600 bg-white/3 px-2 py-0.5 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-xs font-mono text-gray-700">
                  FROM{" "}
                  <span className="text-cyan-500/60">${svc.price.toLocaleString()}</span>
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>
      <div className="text-center mt-8">
        <Link to="/services">
          <button className="btn-ghost flex items-center gap-2 mx-auto">
            View All Services <ArrowRight size={15} />
          </button>
        </Link>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  return (
    <Section>
      <SectionTitle label="Client Voices" title="TESTIMONIALS" />
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedCard key={t.id} delay={i * 0.1} className="relative">
            <Quote size={24} className="text-cyan-500/20 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={12} className="text-cyan-400 fill-cyan-400" />
              ))}
            </div>
            <div className="border-t border-white/5 pt-4">
              <div className="text-white font-medium text-sm">{t.name}</div>
              <div className="text-gray-600 text-xs font-mono mt-0.5">
                {t.role} · {t.company}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section className="bg-noir-dark/20">
      <div className="max-w-3xl mx-auto">
        <SectionTitle label="Got Questions" title="FAQ" />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}

function CtaSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-cyan-500/15 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 p-12 text-center"
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative z-10">
          <div className="chip inline-block mb-5">Ready to Build?</div>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-5">
            LET'S{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              TALK
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Tell us about your project. We'll respond within 24 hours with a plan.
          </p>
          <Link to="/contact">
            <button className="btn-primary flex items-center gap-2 mx-auto text-base px-10 py-3">
              Start a Conversation <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <BentoServices />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <FaqSection />
      <div className="section-divider" />
      <CtaSection />
    </>
  );
}
