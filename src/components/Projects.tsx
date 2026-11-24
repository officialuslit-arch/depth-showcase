import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProjectKind = 'ridemate' | 'aigenie' | 'driftlift';

type Project = {
  title: string;
  kind: ProjectKind;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: 'RideMate',
    kind: 'ridemate',
    category: 'REAL-TIME RIDE SHARING',
    description: 'A ride-sharing app that connects riders and coordinates journeys in real time.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
    demoUrl: 'https://ridemate-g8i3.onrender.com/',
    githubUrl: 'https://github.com/Uday-Shakya/Ride_mate',
  },
  {
    title: 'AIGenie',
    kind: 'aigenie',
    category: 'AI PRODUCTIVITY',
    description: 'An AI SaaS platform with a collection of tools for different creative and practical tasks.',
    tech: ['ReactJS', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    demoUrl: 'https://ai-genie-nu.vercel.app/',
    githubUrl: 'https://github.com/Uday-Shakya/AIGenie',
  },
  {
    title: 'Driftlift',
    kind: 'driftlift',
    category: 'FITNESS TRACKING',
    description: 'A fitness tracker for workout plans, daily goals, calorie counts, and meal planning.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://driftlift-front.vercel.app/',
    githubUrl: 'https://github.com/Uday-Shakya/driftlift-front',
  },
];

const ProjectPreview = ({ kind }: { kind: ProjectKind }) => {
  if (kind === 'ridemate') {
    return (
      <div className="grid h-full min-h-64 grid-cols-[1.25fr_.75fr] bg-secondary">
        <div className="relative overflow-hidden border-r border-border bg-muted p-4 sm:p-6">
          <div className="absolute inset-0 opacity-70" aria-hidden="true">
            <div className="absolute left-0 right-0 top-[27%] border-t border-border" />
            <div className="absolute left-0 right-0 top-[64%] border-t border-border" />
            <div className="absolute bottom-0 left-[30%] top-0 border-l border-border" />
            <div className="absolute bottom-0 left-[72%] top-0 border-l border-border" />
            <div className="absolute left-[8%] top-[51%] h-px w-[75%] rotate-[-23deg] bg-primary" />
            <span className="absolute left-[18%] top-[63%] h-3 w-3 rounded-full border-2 border-primary bg-card" />
            <span className="absolute right-[17%] top-[37%] h-3 w-3 rounded-full bg-accent" />
          </div>
          <div className="relative flex h-full flex-col justify-between">
            <span className="w-fit bg-card px-2 py-1 font-mono text-[10px] text-muted-foreground">LIVE ROUTE</span>
            <span className="w-fit bg-card px-2 py-1 text-xs font-medium">Gwalior → City Centre</span>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-card p-4 sm:p-6">
          <div>
            <p className="font-mono text-[10px] text-muted-foreground">RIDE DETAILS</p>
            <p className="mt-4 font-display text-xl">Find your way.</p>
          </div>
          <div className="space-y-3 border-t border-border pt-3 text-xs">
            <p className="flex justify-between gap-2"><span className="text-muted-foreground">Seats</span><span>2 available</span></p>
            <p className="flex justify-between gap-2"><span className="text-muted-foreground">Match</span><span className="text-primary">Nearby riders</span></p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'aigenie') {
    return (
      <div className="h-full min-h-64 bg-card">
        <div className="flex h-11 items-center justify-between border-b border-border px-4 sm:px-6">
          <span className="font-display text-sm font-semibold">AIGenie</span>
          <span className="font-mono text-[10px] text-muted-foreground">TOOL WORKSPACE</span>
        </div>
        <div className="grid h-[calc(100%-2.75rem)] grid-cols-[.72fr_1.28fr]">
          <div className="border-r border-border bg-secondary/50 p-3 sm:p-5">
            <p className="mb-3 font-mono text-[10px] text-muted-foreground">YOUR TOOLS</p>
            {['Writing', 'Code helper', 'Image ideas'].map((item, index) => <div key={item} className={`mb-2 border px-2 py-2 text-xs ${index === 0 ? 'border-primary/30 bg-card text-primary' : 'border-transparent text-muted-foreground'}`}>{item}</div>)}
          </div>
          <div className="flex flex-col justify-center p-4 sm:p-7">
            <p className="font-mono text-[10px] text-accent">WRITING ASSISTANT</p>
            <p className="mt-2 font-display text-xl sm:text-2xl">Start with a prompt.</p>
            <div className="mt-5 border border-border px-3 py-3 text-xs text-muted-foreground">Describe what you want to make…</div>
            <div className="mt-3 flex justify-end"><span className="bg-primary px-3 py-1.5 text-xs text-primary-foreground">Generate ↗</span></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-64 bg-secondary/55 p-4 sm:p-6">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-display text-lg font-semibold">driftlift</span>
        <span className="font-mono text-[10px] text-muted-foreground">WEEKLY OVERVIEW</span>
      </div>
      <div className="mt-5 grid grid-cols-[.8fr_1.2fr] gap-4 sm:gap-8">
        <div>
          <p className="font-mono text-[10px] text-muted-foreground">TODAY’S GOAL</p>
          <p className="mt-2 font-display text-3xl sm:text-4xl">3 / 4</p>
          <p className="mt-1 text-xs text-muted-foreground">workouts complete</p>
          <div className="mt-4 h-2 bg-border"><div className="h-full w-3/4 bg-primary" /></div>
        </div>
        <div>
          <p className="font-mono text-[10px] text-muted-foreground">ACTIVITY</p>
          <div className="mt-3 flex h-24 items-end gap-2 sm:h-28 sm:gap-3" aria-hidden="true">
            {[42, 68, 53, 86, 62, 96, 71].map((height, index) => <span key={index} style={{ height: `${height}%` }} className={`min-w-2 flex-1 ${index === 5 ? 'bg-accent' : 'bg-primary/75'}`} />)}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9px] text-muted-foreground"><span>MON</span><span>WED</span><span>FRI</span><span>SUN</span></div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => (
  <section id="projects" className="px-5 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 flex flex-col gap-4 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="mb-3 font-mono text-xs text-primary">03 / SELECTED WORK</p>
          <h2 className="font-display text-4xl sm:text-5xl">Built to be useful.</h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">A few products exploring real-time coordination, AI tools, and personal fitness.</p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true }}
            className={`group min-w-0 ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-10' : ''}`}
          >
            <figure className="relative aspect-[16/10] overflow-hidden border border-border bg-secondary transition-transform duration-300 group-hover:-translate-y-1">
              <div className="h-full w-full" aria-hidden="true"><ProjectPreview kind={project.kind} /></div>
              <figcaption className="absolute left-3 top-3 bg-background/90 px-2 py-1 font-mono text-[10px] text-muted-foreground">PROJECT 0{index + 1}</figcaption>
            </figure>
            <div className={`pt-5 ${index === 0 ? 'lg:py-6' : ''}`}>
              <p className="font-mono text-[10px] text-accent">{project.category}</p>
              <h3 className="mt-2 font-display text-3xl">{project.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5" aria-label={`${project.title} technologies`}>
                {project.tech.map((tech) => <li key={tech} className="border-b border-border pb-0.5 text-xs text-foreground">{tech}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">Open project <ArrowUpRight aria-hidden="true" /></a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> Source</a>
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
