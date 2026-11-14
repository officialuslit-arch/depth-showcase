import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages & DSA',
    skills: ['C++', 'Java', 'Python', 'Data Structures and Algorithms'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Mongoose', 'TailwindCSS'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Tools',
    skills: ['Docker', 'Kubernetes', 'Postman', 'Vercel', 'Render'],
  },
  {
    title: 'Version Control',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Soft Skills',
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

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              viewport={{ once: true }}
              className="border-t border-border pt-5"
            >
              <h3 className="text-lg font-semibold mb-4 text-neon-purple">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};