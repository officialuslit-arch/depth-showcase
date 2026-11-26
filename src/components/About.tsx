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
    <section id="about" className="px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-14">
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

        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-stretch lg:gap-0">
          <div className="flex flex-col justify-between gap-7 lg:pr-10">
            <div className="border border-border bg-card p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div className="inline-flex border border-border bg-background p-1" role="tablist" aria-label="About Uday">
                  <Button
                    type="button"
                    variant={tab === 'overview' ? 'default' : 'ghost'}
                    size="sm"
                    role="tab"
                    aria-selected={tab === 'overview'}
                    onClick={() => setTab('overview')}
                    className={tab === 'overview' ? '' : 'text-muted-foreground'}
                  >
                    Overview
                  </Button>
                  <Button
                    type="button"
                    variant={tab === 'approach' ? 'default' : 'ghost'}
                    size="sm"
                    role="tab"
                    aria-selected={tab === 'approach'}
                    onClick={() => setTab('approach')}
                    className={tab === 'approach' ? '' : 'text-muted-foreground'}
                  >
                    My approach
                  </Button>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {tab === 'overview' ? '01.1 / BIO' : '01.2 / PROCESS'}
                </span>
              </div>

              {tab === 'overview' ? (
                <motion.div key="overview" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <p className="border-l-2 border-primary pl-4 font-display text-2xl leading-snug text-foreground sm:text-[1.7rem]">
                    From architecting APIs and database schemas to shaping responsive interfaces, I work across the full product stack.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    I value clear communication, practical problem solving, and code that is easy for a team to build on. My recent work spans a freelancer marketplace, company tools, and internal dashboards.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="approach" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <p className="border-l-2 border-accent pl-4 font-display text-2xl leading-snug text-foreground sm:text-[1.7rem]">
                    Start with the real problem, make the important path feel simple, then build the foundation to support it.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    That means reusable UI, well-tested APIs, and steady iteration with the people who will use and maintain the product.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="space-y-5">

              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a href="/Uday_Shakya_full_Stack_developer.pdf" download="Uday_Shakya_full_Stack_developer.pdf">
                    <Download aria-hidden="true" /> Download résumé
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">
                    View projects <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-between border border-border bg-secondary/45 p-5 sm:p-7 lg:border-y-0 lg:border-r-0 lg:border-l lg:pl-9">
            <div>
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
            </div>
            <div className="mt-6">
              <Button type="button" variant="outline" size="sm" onClick={copyEmail}>
                <Copy aria-hidden="true" /> {copied ? 'Email copied' : 'Copy email'}
              </Button>
              <span className="sr-only" role="status">{copied ? `${EMAIL} copied to clipboard` : ''}</span>
            </div>
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
