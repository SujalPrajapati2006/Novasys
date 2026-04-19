import { Link } from "react-router-dom";
import { Zap, GitBranch, MessageCircle, Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Zap size={16} className="text-black" fill="black" />
              </div>
              <span className="font-display text-2xl tracking-widest text-white">NOVASYS</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Building resilient digital infrastructure for the enterprises of tomorrow.
            </p>
            <div className="flex items-center gap-4 mt-5">
              {[GitBranch, MessageCircle, Share2].map((Icon, i) => (
                <button key={i} className="text-gray-600 hover:text-cyan-400 transition-colors">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Company</h4>
            <div className="space-y-2">
              {[["Home", "/"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
                <Link key={h} to={h} className="block text-gray-500 hover:text-gray-200 text-sm transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">hello@novasys.dev</p>
              <p className="text-gray-500 text-sm">+91 98765 43210</p>
              <p className="text-gray-500 text-sm">Bangalore, India</p>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>© 2024 NovaSys Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-1 font-mono">
            <span className="text-cyan-500/50">SYS</span>
            <span className="text-gray-700">/</span>
            <span>v2.4.1</span>
            <span className="ml-2 w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400/60">ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
