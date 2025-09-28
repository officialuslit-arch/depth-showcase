import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Reactjs", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 }
    ]
  },
  {
    title: "Tools & Tech",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Figma", level: 88 }
    ]
  }
];

const CircularProgress = ({ percentage, delay }: { percentage: number; delay: number }) => {
  const circumference = 2 * Math.PI * 45;
  
  return (
    <div className="relative w-28 h-28">
      <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-muted opacity-20"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          className="text-neon-cyan"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          whileInView={{ 
            strokeDashoffset: circumference - (percentage / 100) * circumference 
          }}
          transition={{ duration: 2, delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-neon-cyan"
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
};

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels, 
            built through years of hands-on experience and continuous learning.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-8 text-neon-purple">
                {category.title}
              </h3>
              
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <CircularProgress 
                      percentage={skill.level} 
                      delay={categoryIndex * 0.2 + skillIndex * 0.1} 
                    />
                    <h4 className="mt-4 font-medium text-foreground">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Always Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying at the forefront. Currently exploring 
              WebAssembly, AI/ML integration, and advanced 3D web experiences. I believe in continuous 
              improvement and adapting to new challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};