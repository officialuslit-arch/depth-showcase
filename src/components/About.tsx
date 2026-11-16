import { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code2, Palette, Zap, Server, Container, Cpu, Gauge, ShieldCheck, Copy, Download } from 'lucide-react';

const EMAIL = 'udayshak8962@gmail.com';

const pillars = [
  { icon: Code2, tag: '01 • Core', title: 'Full-Stack Development', desc: 'Expert in React, Node.js, TypeScript, and modern web technologies', chips: ['React', 'Node.js', 'TypeScript'], tone: 'rose' },
  { icon: Palette, tag: '02 • Design', title: 'UI/UX Design', desc: 'Creating beautiful, intuitive interfaces with attention to detail', chips: ['TailwindCSS', 'Responsive', 'Motion'], tone: 'violet' },
  { icon: Zap, tag: '03 • Speed', title: 'Performance Optimization', desc: 'Building fast, scalable applications with cutting-edge techniques', chips: ['Core Web Vitals', 'Caching'], tone: 'cyan' },
  { icon: Server, tag: '04 • Systems', title: 'API & Backend Architecture', desc: 'Designing resilient RESTful APIs, real-time WebSockets, and scalable database schemas', chips: ['Express.js', 'Socket.io', 'PostgreSQL'], tone: 'rose' },
  { icon: Container, tag: '05 • Cloud', title: 'Cloud & DevOps Automation', desc: 'Containerizing workflows with Docker and orchestrating seamless CI/CD deployments', chips: ['Docker', 'Kubernetes', 'CI/CD'], tone: 'violet' },
  { icon: Cpu, tag: '06 • Logic', title: 'Problem Solving & DSA', desc: 'Writing clean, efficient algorithms and maintainable code rooted in strong CS fundamentals', chips: ['C++ / Java', 'Algorithms', 'Clean Code'], tone: 'cyan' },
];

const toneCls: Record<string, { icon: string; chip: string }> = {
  rose: { icon: 'bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-[0_0_20px_rgba(255,30,56,0.2)]', chip: 'bg-rose-500/10 text-rose-300 border-rose-500/20' },
  violet: { icon: 'bg-violet-500/15 border-violet-500/35 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.22)]', chip: 'bg-violet-500/10 text-violet-300 border-violet-500/25' },
  cyan: { icon: 'bg-cyan-500/10 border-cyan-400/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]', chip: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
};

const track = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
};

export const About = () => {
  const [tab, setTab] = useState<'overview' | 'philosophy'>('overview');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); } catch { /* ignore */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const tabBtn = (active: boolean) =>
    `px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${active ? 'bg-gradient-to-r from-[#ff1e38] to-[#8b5cf6] text-white shadow-md' : 'text-zinc-400 hover:text-zinc-200'}`;

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider uppercase text-zinc-300 mb-5">
            <span className="relative flex w-2 h-2"><span className="absolute inset-0 rounded-full bg-[#ff1e38] animate-ping" /><span className="relative w-2 h-2 rounded-full bg-[#ff1e38]" /></span>
            Identity &amp; Engineering Mindset
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 about-crimson-neon">About Me</h2>
          <p className="text-zinc-400 text-base sm:text-lg">Bridging resilient backend architecture with high-craft interactive interfaces.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-10 sm:mb-12">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} onMouseMove={track} className="bento-card lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.07]">
                <div className="inline-flex p-1 rounded-xl bg-black/40 border border-white/[0.08]" role="tablist">
                  <button type="button" className={tabBtn(tab === 'overview')} onClick={() => setTab('overview')}>Overview</button>
                  <button type="button" className={tabBtn(tab === 'philosophy')} onClick={() => setTab('philosophy')}>Engineering Philosophy</button>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for Projects
                </span>
              </div>
              {tab === 'overview' ? (
                <div key="o" className="tab-panel-fade space-y-5">
                  <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">I'm a passionate developer who loves creating digital experiences that push the boundaries of what's possible on the web. I specialize in building modern, performant applications that users love.</p>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">From architecting real-time APIs and database schemas to crafting responsive, accessible UI systems, I focus on writing clean, scalable code that turns ambitious product ideas into reliable reality.</p>
                </div>
              ) : (
                <div key="p" className="tab-panel-fade space-y-4">
                  {[{ i: Gauge, c: toneCls.rose.icon, t: 'Performance as a First-Class Feature', d: 'Every millisecond matters—optimizing bundle sizes, database indexes, and render cycles from day one.' },
                    { i: ShieldCheck, c: toneCls.violet.icon, t: 'Type-Safe & Maintainable Systems', d: 'Clean architecture, modular components, and predictable data flows that scale gracefully with teams.' }].map(({ i: I, c, t, d }) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${c}`}><I className="w-4 h-4" /></div>
                      <div><h4 className="text-sm sm:text-base font-semibold text-zinc-100">{t}</h4><p className="text-xs sm:text-sm text-zinc-400 mt-0.5">{d}</p></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 mt-6 border-t border-white/[0.07]">
                <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06]"><div className="text-lg sm:text-2xl font-extrabold about-title-gradient font-mono">Full-Stack</div><div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">End-to-End Delivery</div></div>
                <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06]"><div className="text-lg sm:text-2xl font-extrabold text-zinc-100 font-mono">99<span className="text-cyan-400">%</span></div><div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Lighthouse Focus</div></div>
                <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06]"><div className="text-lg sm:text-2xl font-extrabold text-zinc-100 font-mono">24<span className="text-violet-400">/7</span></div><div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Problem Solver</div></div>
              </div>
              <Button variant="neon" size="lg" className="group button-rgb-glow mt-6" asChild>
                <a href="/Uday_Shakya_full_Stack_developer.pdf" download="Uday_Shakya_full_Stack_developer.pdf"><Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />Download Resume</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} onMouseMove={track} className="bento-card lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff1e38]/80" /><span className="w-3 h-3 rounded-full bg-amber-400/80" /><span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-mono text-zinc-400">developer.json</span>
                </div>
                <button type="button" onClick={copy} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[11px] font-mono text-zinc-300 transition-colors">
                  <Copy className="w-3 h-3 text-cyan-400" />{copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>
              <pre className="font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300"><code>
<span className="text-zinc-500">{'{'}</span>{'\n'}
{'  '}<span className="text-violet-400">"name"</span>: <span className="text-emerald-400">"Uday Shakya"</span>,{'\n'}
{'  '}<span className="text-violet-400">"role"</span>: <span className="text-emerald-400">"Full-Stack Developer"</span>,{'\n'}
{'  '}<span className="text-violet-400">"location"</span>: <span className="text-amber-300">"Gwalior, MP, India 🇮🇳"</span>,{'\n'}
{'  '}<span className="text-violet-400">"focus"</span>: <span className="text-cyan-300">"Modern Full-Stack Web Apps"</span>,{'\n'}
{'  '}<span className="text-violet-400">"coreStack"</span>: <span className="text-zinc-500">[</span>{'\n'}
{'    '}<span className="text-rose-400">"React"</span>, <span className="text-rose-400">"Node.js"</span>, <span className="text-rose-400">"TypeScript"</span>, <span className="text-rose-400">"MongoDB"</span>{'\n'}
{'  '}<span className="text-zinc-500">]</span>,{'\n'}
{'  '}<span className="text-violet-400">"status"</span>: <span className="text-emerald-400">"Open to Opportunities"</span>{'\n'}
<span className="text-zinc-500">{'}'}</span></code></pre>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2 text-[11px] font-mono text-zinc-500">
              <span>UTF-8 • TypeScript / MERN</span>
              <span className={`text-cyan-400 transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>Copied: {EMAIL}</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, idx) => {
            const I = p.icon; const t = toneCls[p.tone];
            return (
              <motion.article key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.08 }} viewport={{ once: true }} onMouseMove={track} className="bento-card p-6 sm:p-7 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform ${t.icon}`}><I className="w-6 h-6" /></div>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-zinc-400">{p.tag}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-2.5">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {p.chips.map((c, i) => (
                    <span key={c} className={`text-[11px] font-mono px-2 py-0.5 rounded border ${i === 0 ? t.chip : 'bg-white/[0.04] text-zinc-300 border-white/10'}`}>{c}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
