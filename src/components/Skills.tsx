import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Grid2X2, Rows3, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const skillCategories = [
  {
    title: 'Frameworks & Libraries',
    span: 'lg:col-span-7',
    skills: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Mongoose', 'TailwindCSS'],
  },
  {
    title: 'Programming Languages & DSA',
    span: 'lg:col-span-5',
    skills: ['C++', 'Java', 'Python', 'Data Structures and Algorithms'],
  },
  {
    title: 'Web Technologies',
    span: 'lg:col-span-4',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Databases',
    span: 'lg:col-span-4',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    span: 'lg:col-span-4',
    skills: ['Docker', 'Kubernetes', 'Postman', 'Vercel', 'Render'],
  },
  {
    title: 'Version Control',
    span: 'lg:col-span-5',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Soft Skills',
    span: 'lg:col-span-7',
    skills: ['Communication', 'Problem Solving', 'Collaboration'],
  },
];

export const Skills = () => {
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'matrix' | 'list'>('matrix');
  const [selected, setSelected] = useState<string | null>(null);

  const visibleCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return skillCategories;

    return skillCategories
      .map((category) => ({
        ...category,
        skills: category.skills.filter((skill) =>
          `${skill} ${category.title}`.toLowerCase().includes(normalizedQuery),
        ),
      }))
      .filter((category) => category.skills.length > 0);
  }, [query]);

  const selectedCategory = skillCategories.find((category) => category.skills.includes(selected ?? ''));

  return (
    <section id="skills" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="grid items-end gap-8 border-b border-border/80 pb-8 lg:grid-cols-12"
        >
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="font-semibold text-primary">// 05</span>
              <span>Technical specification</span>
              <span className="text-border">—</span>
              <span>2026</span>
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Skills &amp; Engineering{' '}
              <span className="font-serif font-normal italic text-muted-foreground">Architecture.</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Technologies, tools, and strengths I bring to full-stack development.
            </p>
          </div>

          <div className="flex flex-col items-start justify-end gap-3 sm:flex-row sm:items-center lg:col-span-5 lg:flex-col lg:items-end">
            <div className="inline-flex border border-border bg-card/70 p-1" aria-label="Skill display style">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                aria-pressed={view === 'matrix'}
                onClick={() => setView('matrix')}
                className={view === 'matrix' ? 'h-8 rounded-none bg-foreground text-background hover:bg-foreground/90 hover:text-background' : 'h-8 rounded-none text-muted-foreground'}
              >
                <Grid2X2 aria-hidden="true" /> Matrix
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
                className={view === 'list' ? 'h-8 rounded-none bg-foreground text-background hover:bg-foreground/90 hover:text-background' : 'h-8 rounded-none text-muted-foreground'}
              >
                <Rows3 aria-hidden="true" /> Index
              </Button>
            </div>

            <div className="relative w-full sm:w-64 lg:w-72">
              <Search aria-hidden="true" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter skills..."
                aria-label="Filter skills"
                className="h-10 rounded-none border-border bg-card/50 pl-9 pr-9 font-mono text-xs placeholder:text-muted-foreground/70"
              />
              {query && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="Clear skill filter"
                  onClick={() => setQuery('')}
                  className="absolute right-1 top-1 h-8 w-8 rounded-none text-muted-foreground"
                >
                  <X aria-hidden="true" />
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        <div className="flex min-h-14 flex-col justify-center gap-2 border-x border-b border-border bg-card/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex shrink-0 items-center gap-2 border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {selected ? 'Selected' : 'Skill index'}
            </span>
            <span className="truncate font-mono text-sm text-foreground">{selected ?? 'Explore the full stack'}</span>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {selectedCategory ? selectedCategory.title : `${skillCategories.length} domains · 27 skills`}
          </span>
        </div>

        {view === 'matrix' ? (
          <div className="grid grid-cols-1 border-l border-border/80 lg:grid-cols-12">
            {visibleCategories.map((category) => {
              const originalIndex = skillCategories.findIndex((item) => item.title === category.title);
              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: originalIndex * 0.035 }}
                  viewport={{ once: true }}
                  className={`${category.span} group relative flex min-h-52 flex-col justify-between border-b border-r border-border/80 bg-background p-5 transition-colors duration-200 hover:bg-card/40 sm:p-7`}
                >
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="border border-border bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                        {String(originalIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-medium text-foreground">{category.title}</h3>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Button
                        key={skill}
                        type="button"
                        variant="ghost"
                        aria-pressed={selected === skill}
                        onClick={() => setSelected((current) => current === skill ? null : skill)}
                        className={`h-auto min-h-9 whitespace-normal rounded-none border px-3 py-2 text-left text-sm font-normal transition-colors ${
                          selected === skill
                            ? 'border-primary/60 bg-primary/10 text-primary'
                            : 'border-border bg-muted/50 text-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary'
                        }`}
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                    <span>Domain // {category.title}</span>
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </motion.article>
              );
            })}
            {visibleCategories.length === 0 && (
              <p className="col-span-full border-b border-r border-border px-6 py-12 text-center text-muted-foreground">
                No matching skills.
              </p>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto border-x border-b border-border/80">
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-card/60 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-4 py-3 font-normal sm:px-6">No.</th>
                  <th className="px-4 py-3 font-normal">Skill</th>
                  <th className="px-4 py-3 font-normal">Category</th>
                  <th className="px-4 py-3 font-normal">View</th>
                </tr>
              </thead>
              <tbody>
                {visibleCategories.flatMap((category, categoryIndex) =>
                  category.skills.map((skill, skillIndex) => (
                    <tr key={skill} className="border-b border-border/60 transition-colors hover:bg-card/50">
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground sm:px-6">
                        {String(categoryIndex * 6 + skillIndex + 1).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-3">
                        <Button
                          type="button"
                          variant="ghost"
                          aria-pressed={selected === skill}
                          onClick={() => setSelected((current) => current === skill ? null : skill)}
                          className={`h-auto rounded-none px-1 py-1 text-left ${selected === skill ? 'text-primary' : 'text-foreground'}`}
                        >
                          {skill}
                        </Button>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{category.title}</td>
                      <td className="px-4 py-3">
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Capabilities // {skillCategories.reduce((total, category) => total + category.skills.length, 0)} indexed</span>
          <span>{visibleCategories.length} of {skillCategories.length} domains shown</span>
        </div>
      </div>
    </section>
  );
};