// ─── SERVICES ───────────────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    title: "Cloud Architecture",
    category: "Cloud",
    icon: "Cloud",
    price: 8000,
    description: "Design and deploy scalable, fault-tolerant cloud infrastructures on AWS, GCP, or Azure with IaC best practices.",
    tags: ["AWS", "Terraform", "Kubernetes"],
    featured: true,
  },
  {
    id: 2,
    title: "Cybersecurity Audit",
    category: "Security",
    icon: "Shield",
    price: 5000,
    description: "Penetration testing, vulnerability assessments, and compliance reviews to harden your attack surface.",
    tags: ["PenTest", "SOC2", "OWASP"],
    featured: true,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    category: "Web",
    icon: "Code2",
    price: 12000,
    description: "End-to-end web application development using modern stacks—React, Node.js, PostgreSQL, and GraphQL.",
    tags: ["React", "Node.js", "GraphQL"],
    featured: true,
  },
  {
    id: 4,
    title: "DevOps & CI/CD",
    category: "Cloud",
    icon: "GitBranch",
    price: 6000,
    description: "Automate pipelines, containerize workloads, and establish robust deployment workflows with zero downtime.",
    tags: ["Docker", "GitHub Actions", "ArgoCD"],
  },
  {
    id: 5,
    title: "AI & ML Integration",
    category: "AI",
    icon: "Brain",
    price: 15000,
    description: "Embed intelligent models into your product—LLM APIs, recommendation engines, and predictive analytics.",
    tags: ["Python", "OpenAI", "PyTorch"],
    featured: true,
  },
  {
    id: 6,
    title: "Mobile App Development",
    category: "Mobile",
    icon: "Smartphone",
    price: 10000,
    description: "Cross-platform iOS and Android apps built with React Native, delivering native performance and UX.",
    tags: ["React Native", "Expo", "Firebase"],
  },
  {
    id: 7,
    title: "Zero-Trust Security",
    category: "Security",
    icon: "Lock",
    price: 7000,
    description: "Implement zero-trust network architecture, identity-aware proxies, and least-privilege access models.",
    tags: ["IAM", "BeyondCorp", "mTLS"],
  },
  {
    id: 8,
    title: "Data Engineering",
    category: "AI",
    icon: "Database",
    price: 9000,
    description: "Build modern data stacks with ETL pipelines, data lakes, and real-time streaming analytics platforms.",
    tags: ["Kafka", "dbt", "Snowflake"],
  },
  {
    id: 9,
    title: "Web Performance",
    category: "Web",
    icon: "Zap",
    price: 3500,
    description: "Audit, optimize, and monitor web performance—Core Web Vitals, edge caching, and image delivery.",
    tags: ["Lighthouse", "CDN", "WebP"],
  },
];

export const serviceCategories = ["All", "Web", "Cloud", "Security", "AI", "Mobile"];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "NexusBank Portal",
    category: "Web",
    description: "Complete digital banking platform with real-time transaction processing and biometric auth.",
    tech: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    highlight: "4.2M daily active users",
  },
  {
    id: 2,
    title: "SkyVault CDN",
    category: "Cloud",
    description: "Global content delivery network serving assets across 42 PoPs with sub-20ms P99 latency.",
    tech: ["AWS", "Terraform", "Cloudflare"],
    year: "2024",
    highlight: "99.998% uptime SLA",
  },
  {
    id: 3,
    title: "IronGate Platform",
    category: "Security",
    description: "Zero-trust enterprise security platform protecting 500+ endpoints across 12 global offices.",
    tech: ["Golang", "BeyondCorp", "mTLS"],
    year: "2023",
    highlight: "Zero breaches in 18 months",
  },
  {
    id: 4,
    title: "Aether AI Assistant",
    category: "AI",
    description: "Contextual AI assistant embedded in SaaS products, processing 10M+ queries per month.",
    tech: ["Python", "OpenAI", "FastAPI"],
    year: "2024",
    highlight: "92% user satisfaction",
  },
  {
    id: 5,
    title: "Velocity Mobile",
    category: "Mobile",
    description: "Cross-platform fintech app with real-time portfolio tracking and AI-driven insights.",
    tech: ["React Native", "Redux", "Plaid"],
    year: "2023",
    highlight: "#1 Finance app on App Store",
  },
  {
    id: 6,
    title: "DataStream Pipeline",
    category: "AI",
    description: "Real-time ML inference pipeline processing 500k events/sec for fraud detection.",
    tech: ["Kafka", "PyTorch", "Redis"],
    year: "2024",
    highlight: "0.3ms avg inference time",
  },
];

export const projectCategories = ["All", "Web", "Cloud", "Security", "AI", "Mobile"];

// ─── TEAM ─────────────────────────────────────────────────────────────────────
export const team = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Founder & CTO",
    bio: "Ex-Google SRE. Obsessed with systems at scale and distributed fault tolerance.",
    initials: "AM",
    color: "#06b6d4",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Head of Security",
    bio: "OSCP certified. 10 years red-teaming Fortune 500 companies.",
    initials: "PN",
    color: "#3b82f6",
  },
  {
    id: 3,
    name: "Leo Zhang",
    role: "Lead Architect",
    bio: "Cloud-native advocate. Designed systems that serve 100M+ requests daily.",
    initials: "LZ",
    color: "#8b5cf6",
  },
  {
    id: 4,
    name: "Sara Okafor",
    role: "AI/ML Lead",
    bio: "PhD in ML. Bridging academic research with production-grade AI systems.",
    initials: "SO",
    color: "#f59e0b",
  },
];

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
export const timeline = [
  { year: "2018", title: "Founded in Bangalore", desc: "Started as a 3-person consultancy focused on cloud migrations." },
  { year: "2019", title: "First Enterprise Contract", desc: "Secured $2M contract with a major Indian bank for core banking modernization." },
  { year: "2020", title: "Security Division Launch", desc: "Expanded into cybersecurity, onboarding our first OSCP-certified red team." },
  { year: "2021", title: "AI Lab Opens", desc: "Established dedicated ML research arm, filing 3 patents in NLP inference." },
  { year: "2022", title: "Series A — $15M", desc: "Raised $15M to scale engineering teams and expand into SEA markets." },
  { year: "2023", title: "Global Expansion", desc: "Opened offices in Singapore, Dubai, and London. Team grew to 120+." },
  { year: "2024", title: "Industry Recognition", desc: "Named Top 10 IT Innovators by TechCrunch. Serving 80+ enterprise clients." },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "Ravi Shankar",
    company: "NexusBank",
    role: "VP Engineering",
    text: "NovaSys rebuilt our entire payments infrastructure in 6 months. Flawless execution, exceptional code quality.",
    rating: 5,
  },
  {
    id: 2,
    name: "Claire Dubois",
    company: "SkyVault",
    role: "Head of Infrastructure",
    text: "Their cloud team reduced our AWS spend by 40% while improving latency. I won't work with any other vendor.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Obi",
    company: "IronGate",
    role: "CISO",
    text: "The security audit found 12 critical vulnerabilities our internal team missed. Saved us from a potential breach.",
    rating: 5,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "What industries do you specialize in?",
    a: "We work across fintech, healthcare, e-commerce, and enterprise SaaS. Our depth is strongest in regulated industries requiring both high performance and compliance (SOC2, HIPAA, PCI-DSS).",
  },
  {
    q: "How do you handle project pricing?",
    a: "We offer fixed-scope engagements for well-defined projects and time-and-materials for exploratory or long-running work. All projects begin with a discovery phase to scope accurately.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Discovery takes 1–2 weeks. Small projects (audits, MVPs) run 4–8 weeks. Enterprise engagements are typically 3–9 months with phased delivery milestones.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer retainer-based support packages starting at 20 hours/month, covering monitoring, incident response, feature iterations, and on-call availability.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We integrate as a force-multiplier—embedding into your engineering workflows, Jira board, Slack, and CI/CD pipeline rather than working in isolation.",
  },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: "80+", label: "Enterprise Clients" },
  { value: "120+", label: "Engineers" },
  { value: "99.98%", label: "Avg Uptime SLA" },
  { value: "6", label: "Global Offices" },
];

// ─── CALCULATOR SERVICES ──────────────────────────────────────────────────────
export const calcServices = [
  { id: "web", label: "Web Application", base: 12000, time: "8–12 wks" },
  { id: "mobile", label: "Mobile App", base: 10000, time: "10–14 wks" },
  { id: "cloud", label: "Cloud Setup & DevOps", base: 6000, time: "4–6 wks" },
  { id: "security", label: "Security Audit", base: 5000, time: "2–4 wks" },
  { id: "ai", label: "AI/ML Integration", base: 15000, time: "8–16 wks" },
  { id: "data", label: "Data Engineering", base: 9000, time: "6–10 wks" },
];
