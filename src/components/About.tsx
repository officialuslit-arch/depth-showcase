import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Code2, Palette, Zap } from 'lucide-react';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Expert in React, Node.js, TypeScript, and modern web technologies",
    color: "neon-cyan"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces with attention to detail",
    color: "neon-purple"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Building fast, scalable applications with cutting-edge techniques",
    color: "neon-pink"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that push the boundaries 
            of what's possible on the web. With 5+ years of experience, I specialize in building 
            modern, performant applications that users love.
          </p>
        </motion.div>
        
        {/* Profile Picture Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <motion.div
            whileHover={{ y: -10, rotateY: 15, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="perspective-1000"
          >
            <Card className="glass-effect p-8 w-fit hover:shadow-deep transition-all duration-500 transform-3d">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-xl"></div>
                <Avatar className="w-48 h-48 mx-auto relative border-2 border-primary/30 shadow-2xl">
                  <AvatarImage 
                    src={profilePlaceholder} 
                    alt="Alex Chen - Full Stack Developer"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                    AC
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold neon-text">Alex Chen</h3>
                <p className="text-accent font-medium">Full Stack Developer</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 10 }}
                className="perspective-1000"
              >
                <Card className="glass-effect p-8 h-full hover:shadow-deep transition-all duration-500 transform-3d group">
                  <div className={`inline-flex p-3 rounded-lg bg-${skill.color}/10 mb-6 group-hover:shadow-${skill.color.replace('-', '-')} transition-all duration-300`}>
                    <Icon className={`w-8 h-8 text-${skill.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass-effect p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Starting as a computer science student with a passion for both technology and design, 
              I've evolved into a full-stack developer who bridges the gap between technical excellence 
              and creative vision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code while creating experiences that are not just 
              functional, but delightful. When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source, or working on creative side projects.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};