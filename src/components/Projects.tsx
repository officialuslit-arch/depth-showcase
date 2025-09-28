import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "RideMate",
    description: "Ride-sharing app that optimizes routes and matches riders in real-time.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
    image: "https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png",
    demoUrl: "https://ride-mate-frontend.onrender.com/",
    githubUrl: "https://github.com/Uday-Shakya/Ride_mate",
    featured: true
  },
  {
    title: "AIGenie",
    description: "AI SaaS platform offering customizable AI Tools for various needs.",
    tech: ["ReactJS","TailwindCSS","Node.js","Express","MongoDB","GEMINI API"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    demoUrl: "https://ai-genie-nu.vercel.app/",
    githubUrl: "https://github.com/Uday-Shakya/AIGenie",
    featured: true
  },
  {
    title: "Fitness Tracker",
    description: "Web Based Fitness Tracker App To Follow Workout plan With Daily Goals like calories Count And Diet plan",
    tech: ["React", "NodeJs", "ExpressJS", "MongoDB"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/Uday-Shakya/driftlift-front",
    featured: false
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, from full-stack web applications to mobile apps 
            and creative experiments with emerging technologies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, rotateX: 5, rotateY: 5 }}
              className={`perspective-1000 ${project.featured ? 'md:col-span-1' : ''}`}
            >
              <Card className="glass-effect overflow-hidden h-full group hover:shadow-deep transition-all duration-500 transform-3d rgb-glow relative">
                <div className="absolute inset-0 rgb-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg p-[2px]">
                  <div className="w-full h-full bg-background rounded-lg"></div>
                </div>
                <div className="relative bg-card rounded-lg overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-cyan transition-colors duration-300 hover-rgb">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover-rgb transition-all duration-300 ${
                            techIndex % 6 === 0 ? 'hover:text-neon-red' :
                            techIndex % 6 === 1 ? 'hover:text-neon-orange' :
                            techIndex % 6 === 2 ? 'hover:text-neon-green' :
                            techIndex % 6 === 3 ? 'hover:text-neon-cyan' :
                            techIndex % 6 === 4 ? 'hover:text-neon-blue' :
                            'hover:text-neon-purple'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        variant="default" 
                        size="sm"
                        className="bg-neon-cyan text-black hover:bg-neon-cyan/90 hover:shadow-neon-cyan transition-all duration-300 rgb-glow"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        disabled={project.demoUrl === '#'}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300 rgb-glow"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        disabled={project.githubUrl === '#'}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};