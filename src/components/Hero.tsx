import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => (
  <section id="home" className="relative overflow-hidden px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:min-h-[calc(100svh-4rem)] lg:pb-20">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="order-2 lg:order-1"
      >
        <div className="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          PORTFOLIO <span className="text-border">/</span> 2026
        </div>
        <h1 className="mt-7 font-display text-6xl font-semibold leading-[0.96] text-foreground sm:text-7xl lg:text-8xl">
          Uday<br />
          <span className="text-primary">Shakya</span>
        </h1>
        <p className="mt-7 max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl">
          Full-stack developer building clear, reliable web products—from the first screen to the underlying API.
        </p>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          I bring thoughtful interfaces and dependable systems together, with React, Node.js, and a focus on the details people notice.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#projects">Selected work <ArrowDownRight aria-hidden="true" /></a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
          <span>Gwalior, India</span>
          <span>Open to opportunities</span>
        </div>
      </motion.div>

      <motion.figure
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
        className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
      >
        <div className="relative aspect-[4/4.65] overflow-hidden bg-secondary">
          <img
            src="/lovable-uploads/profile-new.png"
            alt="Uday Shakya, full-stack developer"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 border-t border-background/30 bg-foreground/85 px-4 py-3 text-background sm:px-5">
            <div>
              <p className="font-display text-lg">Uday Shakya</p>
              <p className="font-mono text-xs text-background/70">Full-stack developer</p>
            </div>
            <span className="font-mono text-xs text-background/70">IND / 01</span>
          </div>
        </div>
        <figcaption className="mt-3 flex justify-between gap-4 font-mono text-[11px] text-muted-foreground">
          <span>Interfaces, systems, and the space between.</span>
          <span>01 — 06</span>
        </figcaption>
      </motion.figure>
    </div>
  </section>
);
