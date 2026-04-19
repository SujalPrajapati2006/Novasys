import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Section } from "../components/Section";

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required";
  if (!fields.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "Enter a valid email";
  if (!fields.subject.trim()) errors.subject = "Subject is required";
  if (!fields.message.trim()) errors.message = "Message is required";
  else if (fields.message.trim().length < 20) errors.message = "Message must be at least 20 characters";
  return errors;
}

const budgetOptions = ["< $5,000", "$5,000 – $20,000", "$20,000 – $50,000", "$50,000+", "Let's Discuss"];
const serviceOptions = ["Web Development", "Cloud & DevOps", "Cybersecurity", "AI/ML", "Mobile App", "Other"];

function SuccessState({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-16"
    >
      <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
        <CheckCircle size={32} className="text-green-400" />
      </div>
      <h3 className="text-white text-2xl font-semibold mb-3">Message Sent!</h3>
      <p className="text-gray-400 text-sm max-w-xs mx-auto mb-8">
        We've received your enquiry. Expect a response within 24 hours.
      </p>
      <div className="font-mono text-xs text-gray-700 mb-8">
        REF: NS-{Math.random().toString(36).slice(2, 9).toUpperCase()}
      </div>
      <button className="btn-ghost text-sm px-6 py-2.5" onClick={onReset}>
        Send Another Message
      </button>
    </motion.div>
  );
}

export default function ContactPage() {
  const [fields, setFields] = useState({
    name: "", email: "", subject: "", budget: "", service: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (key, val) => {
    setFields((f) => ({ ...f, [key]: val }));
    if (touched[key]) {
      const e = validate({ ...fields, [key]: val });
      setErrors((prev) => ({ ...prev, [key]: e[key] }));
    }
  };

  const blur = (key) => {
    setTouched((t) => ({ ...t, [key]: true }));
    const e = validate(fields);
    setErrors((prev) => ({ ...prev, [key]: e[key] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(fields).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const e2 = validate(fields);
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  const reset = () => {
    setFields({ name: "", email: "", subject: "", budget: "", service: "", message: "" });
    setErrors({}); setTouched({}); setSuccess(false);
  };

  const Field = ({ label, id, children, required }) => (
    <div>
      <label htmlFor={id} className="block text-gray-400 text-xs font-mono uppercase tracking-widest mb-2">
        {label} {required && <span className="text-cyan-500">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {errors[id] && touched[id] && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 text-xs mt-1.5 font-mono"
          >
            {errors[id]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <div className="pt-32 pb-8 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="chip inline-block mb-4">Get In Touch</div>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">
            CONTACT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              US
            </span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Ready to build something exceptional? Tell us about your project.
          </p>
        </motion.div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Let's Build Together</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you need a full-stack team or specialized expertise, we're ready to embed and deliver.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { Icon: Mail, label: "Email", value: "hello@novasys.dev" },
                { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { Icon: MapPin, label: "HQ", value: "Bangalore, India" },
                { Icon: Clock, label: "Response", value: "Within 24 hours" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/8 border border-cyan-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-xs font-mono uppercase tracking-wider">{label}</div>
                    <div className="text-gray-300 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-xl p-4 border-cyan-500/15">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono">ACCEPTING PROJECTS</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                We currently have capacity for 2 new enterprise engagements starting Q1 2025.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 glass-card rounded-2xl p-8"
          >
            {success ? (
              <SuccessState onReset={reset} />
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <Field label="Full Name" id="name" required>
                    <input
                      id="name"
                      value={fields.name}
                      onChange={(e) => set("name", e.target.value)}
                      onBlur={() => blur("name")}
                      placeholder="Arjun Mehta"
                      className={`noir-input ${errors.name && touched.name ? "error" : ""}`}
                    />
                  </Field>
                  <Field label="Email Address" id="email" required>
                    <input
                      id="email"
                      type="email"
                      value={fields.email}
                      onChange={(e) => set("email", e.target.value)}
                      onBlur={() => blur("email")}
                      placeholder="you@company.com"
                      className={`noir-input ${errors.email && touched.email ? "error" : ""}`}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <Field label="Service Interest" id="service">
                    <select
                      id="service"
                      value={fields.service}
                      onChange={(e) => set("service", e.target.value)}
                      className="noir-input"
                      style={{ appearance: "none" }}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Budget Range" id="budget">
                    <select
                      id="budget"
                      value={fields.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      className="noir-input"
                      style={{ appearance: "none" }}
                    >
                      <option value="">Select budget</option>
                      {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="mb-5">
                  <Field label="Subject" id="subject" required>
                    <input
                      id="subject"
                      value={fields.subject}
                      onChange={(e) => set("subject", e.target.value)}
                      onBlur={() => blur("subject")}
                      placeholder="Briefly describe your project"
                      className={`noir-input ${errors.subject && touched.subject ? "error" : ""}`}
                    />
                  </Field>
                </div>

                <div className="mb-8">
                  <Field label="Project Details" id="message" required>
                    <textarea
                      id="message"
                      rows={5}
                      value={fields.message}
                      onChange={(e) => set("message", e.target.value)}
                      onBlur={() => blur("message")}
                      placeholder="Tell us about your goals, timeline, and any technical context..."
                      className={`noir-input resize-none ${errors.message && touched.message ? "error" : ""}`}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-gray-700 text-xs mt-4 font-mono">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
}
