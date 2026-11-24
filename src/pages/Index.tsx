import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <footer className="border-t border-border px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Uday Shakya</p>
        <p className="font-mono text-xs">Built with care in Gwalior, India.</p>
      </div>
    </footer>
  </div>
);

export default Index;
