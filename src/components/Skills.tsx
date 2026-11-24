import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Grid2X2, Rows3, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const skillCategories = [
  { title: 'Frameworks & Libraries', skills: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Mongoose', 'TailwindCSS'] },
  { title: 'Programming Languages & DSA', skills: ['C++', 'Java', 'Python', 'Data Structures and Algorithms'] },
  { title: 'Web Technologies', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { title: 'Databases', skills: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  { title: 'Tools', skills: ['Docker', 'Kubernetes', 'Postman', 'Vercel', 'Render'] },
  { title: 'Version Control', skills: ['Git', 'GitHub'] },
  { title: 'Soft Skills', skills: ['Communication', 'Problem Solving', 'Collaboration'] },
];

export const Skills = () => {
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'matrix' | 'list'>('matrix');
  const [selected, setSelected] = useState<string | null>(null);
  const normalizedQuery = query.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    if (!normalizedQuery) return skillCategories;
    return skillCategories
      .map((category) => ({
        ...category,
        skills: category.skills.filter((skill) => `${skill} ${category.title}`.toLowerCase().includes(normalizedQuery)),
      }))
      .filter((category) => category.skills.length > 0);
  }, [normalizedQuery]);

  const selectedCategory = skillCategories.find((category) => category.skills.includes(selected ?? ''));
  const skillCount = skillCategories.reduce((total, category) => total + category.skills.length, 0);

  return (
    <section id="skills" className="bg-secondary/45 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-6 border-b border-border pb-7 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <p className="mb-3 font-mono text-xs text-primary">04 / TOOLKIT</p>
            <h2 className="font-display text-4xl sm:text-5xl">A practical toolkit.</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">Languages, frameworks, and tools I use to take a product from idea to delivery.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="inline-flex border border-border bg-card p-1" aria-label="Skill display style">
              <Button type="button" variant={view === 'matrix' ? 'default' : 'ghost'} size="sm" aria-pressed={view === 'matrix'} onClick={() => setView('matrix')}>
                <Grid2X2 aria-hidden="true" /> Groups
              </Button>
              <Button type="button" variant={view === 'list' ? 'default' : 'ghost'} size="sm" aria-pressed={view === 'list'} onClick={() => setView('list')}>
                <Rows3 aria-hidden="true" /> Index
              </Button>
            </div>
            <div className="relative w-full sm:w-64">
              <Search aria-hidden="true" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter skills" aria-label="Filter skills" className="h-10 rounded-sm bg-card pl-9 pr-10 text-sm" />
              {query && <Button type="button" variant="ghost" size="icon" aria-label="Clear skill filter" onClick={() => setQuery('')} className="absolute right-1 top-1 h-8 w-8"><X aria-hidden="true" /></Button>}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between gap-2 border-b border-border py-4 sm:flex-row sm:items-center">
          <p className="text-sm"><span className="font-medium">{selected ?? 'Full-stack development'}</span><span className="ml-2 text-muted-foreground">{selectedCategory ? `— ${selectedCategory.title}` : '— the tools I reach for'}</span></p>
          <p className="font-mono text-xs text-muted-foreground">{skillCount} skills <span className="px-1">/</span> {visibleCategories.length} groups shown</p>
        </div>

        {view === 'matrix' ? (
          <div className="grid border-b border-border md:grid-cols-2 md:gap-x-10">
            {visibleCategories.map((category) => {
              const originalIndex = skillCategories.findIndex((item) => item.title === category.title);
              return (
                <motion.article key={category.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: originalIndex * 0.025 }} viewport={{ once: true }} className="border-t border-border py-5 sm:py-6">
                  <div className="mb-3 flex items-baseline justify-between gap-3">
                    <h3 className="font-medium">{category.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{String(originalIndex + 1).padStart(2, '0')} / {category.skills.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-1 gap-y-1">
                    {category.skills.map((skill) => (
                      <Button key={skill} type="button" variant="ghost" aria-pressed={selected === skill} onClick={() => setSelected((current) => current === skill ? null : skill)} className={`h-auto min-h-8 rounded-none px-2 py-1 text-sm font-normal ${selected === skill ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'text-muted-foreground hover:text-foreground'}`}>
                        {skill}
                      </Button>
                    ))}
                  </div>
                </motion.article>
              );
            })}
            {visibleCategories.length === 0 && <p className="border-t border-border py-10 text-sm text-muted-foreground">No skills match that search.</p>}
          </div>
        ) : (
          <div className="overflow-x-auto border-b border-border">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-border font-mono text-xs text-muted-foreground">
                  <th scope="col" className="px-3 py-3 font-normal">No.</th>
                  <th scope="col" className="px-3 py-3 font-normal">Skill</th>
                  <th scope="col" className="px-3 py-3 font-normal">Category</th>
                </tr>
              </thead>
              <tbody>
                {visibleCategories.flatMap((category) => category.skills.map((skill) => {
                  const index = skillCategories.flatMap((group) => group.skills).indexOf(skill);
                  return (
                    <tr key={skill} className="border-b border-border/70 hover:bg-card/60">
                      <td className="px-3 py-3 font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')}</td>
                      <td className="px-3 py-2"><Button type="button" variant="ghost" aria-pressed={selected === skill} onClick={() => setSelected((current) => current === skill ? null : skill)} className={`h-8 rounded-none px-2 ${selected === skill ? 'text-primary' : 'text-foreground'}`}>{skill}</Button></td>
                      <td className="px-3 py-3 text-sm text-muted-foreground">{category.title}</td>
                    </tr>
                  );
                }))}
              </tbody>
            </table>
            {visibleCategories.length === 0 && <p className="py-10 text-center text-sm text-muted-foreground">No skills match that search.</p>}
          </div>
        )}
        <div className="mt-4 flex flex-wrap justify-between gap-2 font-mono text-xs text-muted-foreground">
          <span>TECHNICAL + COLLABORATIVE SKILLS</span>
          <span>{visibleCategories.reduce((total, category) => total + category.skills.length, 0)} results</span>
        </div>
      </div>
    </section>
  );
};
