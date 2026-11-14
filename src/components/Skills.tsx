import { motion } from 'framer-motion';
import {
  Code2,
  Layers3,
  Database,
  Globe2,
  Wrench,
  GitBranch,
  UsersRound,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages & DSA',
    icon: Code2,
    skills: ['C++', 'Java', 'Python', 'Data Structures and Algorithms'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers3,
    skills: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Mongoose', 'TailwindCSS'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Web Technologies',
    icon: Globe2,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Docker', 'Kubernetes', 'Postman', 'Vercel', 'Render'],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Soft Skills',
    icon: UsersRound,
    skills: ['Communication', 'Problem Solving', 'Collaboration'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Skills &amp; Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies, tools, and strengths I bring to full-stack development.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotateY: 2 }}
              className="perspective-1000"
            >
              <div className="glass-effect group h-full rounded-lg p-6 transition-all duration-300 hover:shadow-deep">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan transition-all duration-300 group-hover:scale-110 group-hover:shadow-neon-cyan">
                    <category.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-neon-purple">{category.title}</h3>
                </div>
                <div className="mb-5 h-px bg-gradient-to-r from-neon-cyan/60 via-neon-purple/50 to-transparent" />
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.06 + skillIndex * 0.04 }}
                      viewport={{ once: true }}
                      className="rounded-md border border-border bg-muted/70 px-3 py-2 text-sm text-foreground transition-colors duration-300 hover:border-neon-cyan/60 hover:text-neon-cyan"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden border-y border-neon-cyan/20 py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-scroll-fast whitespace-nowrap" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {skillCategories.flatMap((category) => category.skills).map((skill, index) => (
                  <span
                    key={`${copy}-${skill}`}
                    className={`mx-6 text-2xl font-bold font-mono transition-colors duration-300 hover:text-neon-cyan ${
                      index % 2 === 0 ? 'text-neon-cyan' : 'text-neon-purple'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};