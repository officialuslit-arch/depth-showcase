import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EMAIL = 'udayshak8962@gmail.com';

const capabilities = [
  { title: 'Full-stack product work', description: 'React interfaces, Node.js services, and the data models that connect them.' },
  { title: 'Responsive interface craft', description: 'Reusable components and thoughtful layouts that hold together across screens.' },
  { title: 'APIs and data', description: 'REST endpoints, MongoDB, validation, pagination, and practical query tuning.' },
  { title: 'Performance', description: 'Code-splitting and lazy loading to keep the experience moving.' },
  { title: 'Delivery and tooling', description: 'Postman, GitHub pull requests, Docker, and Kubernetes.' },
  { title: 'Problem solving', description: 'C++, Java, Python, and the fundamentals behind maintainable solutions.' },
];

export const About = () => {
  const [tab, setTab] = useState<'overview' | 'approach'>('overview');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-4 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-3 font-mono text-xs text-primary">01 / ABOUT ME</p>
            <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Thoughtful interfaces.<br className="hidden sm:block" /> Dependable systems.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            I enjoy turning ambitious product ideas into web experiences that feel straightforward to use and solid underneath.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_.85fr]">
          <div className="flex flex-col justify-between gap-8 py-2 sm:py-5 lg:pr-12">
            <div>
              <div className="mb-6 inline-flex border-b border-border" role="tablist" aria-label="About Uday">
                <Button type="button" variant="ghost" size="sm" role="tab" aria-selected={tab === 'overview'} onClick={() => setTab('overview')} className={`rounded-none px-3 ${tab === 'overview' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>
                  Overview
                </Button>
                <Button type="button" variant="ghost" size="sm" role="tab" aria-selected={tab === 'approach'} onClick={() => setTab('approach')} className={`rounded-none px-3 ${tab === 'approach' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>
                  My approach
                </Button>
              </div>
              {tab === 'overview' ? (
                <motion.div key="overview" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl space-y-4">
                  <p className="text-lg leading-relaxed text-foreground">From architecting APIs and database schemas to shaping responsive interfaces, I work across the full product stack.</p>
                  <p className="leading-relaxed text-muted-foreground">I value clear communication, practical problem solving, and code that is easy for a team to build on. My recent work spans a freelancer marketplace, company tools, and internal dashboards.</p>
                </motion.div>
              ) : (
                <motion.div key="approach" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl space-y-4">
                  <p className="text-lg leading-relaxed text-foreground">Start with the real problem, make the important path feel simple, then build the foundation to support it.</p>
                  <p className="leading-relaxed text-muted-foreground">That means reusable UI, well-tested APIs, and steady iteration with the people who will use and maintain the product.</p>
                </motion.div>
              )}
            </div>
            <div>
              <div className="grid grid-cols-3 border-y border-border py-4">
                {[
                  { value: '15+', label: 'responsive screens' },
                  { value: '8+', label: 'REST APIs' },
                  { value: '6+', label: 'product modules' },
                ].map((stat) => (
                  <div key={stat.label} className="pr-2">
                    <p className="font-display text-3xl text-primary sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-5">
                <a href="/Uday_Shakya_full_Stack_developer.pdf" download="Uday_Shakya_full_Stack_developer.pdf">
                  <Download aria-hidden="true" /> Download résumé
                </a>
              </Button>
            </div>
          </div>

          <aside className="mt-10 border-y border-border bg-secondary/45 p-5 sm:p-7 lg:mt-0 lg:border-y-0 lg:border-l lg:pl-9">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-3">
              <p className="font-mono text-xs text-muted-foreground">PROFILE / 01</p>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-primary"><span className="h-2 w-2 rounded-full bg-primary" />Open to opportunities</span>
            </div>
            <dl className="divide-y divide-border">
              {[
                { label: 'Name', value: 'Uday Shakya' },
                { label: 'Role', value: 'Full-stack developer' },
                { label: 'Location', value: 'Gwalior, MP, India' },
                { label: 'Focus', value: 'Modern full-stack web apps' },
                { label: 'Core stack', value: 'React · Node.js · TypeScript · MongoDB' },
              ].map((item) => (
                <div key={item.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3.5">
                  <dt className="font-mono text-xs text-muted-foreground">{item.label}</dt>
                  <dd className="text-sm leading-relaxed text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
            <Button type="button" variant="outline" size="sm" onClick={copyEmail} className="mt-5">
              <Copy aria-hidden="true" /> {copied ? 'Email copied' : 'Copy email'}
            </Button>
            <span className="sr-only" role="status">{copied ? `${EMAIL} copied to clipboard` : ''}</span>
          </aside>
        </div>

        <div className="mt-16 border-t border-border pt-6 sm:mt-20">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl">What I bring</h3>
            <span className="font-mono text-xs text-muted-foreground">A — F</span>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-border py-5"
              >
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <a href="#experience" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-ring">
            See my recent experience <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
