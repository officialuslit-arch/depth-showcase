import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "EcoTracker",
    description: "A sustainability app that helps users track their carbon footprint with AI-powered insights and gamification.",
    tech: ["React", "Node.js", "MongoDB", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "CryptoViz",
    description: "Real-time cryptocurrency visualization dashboard with advanced charts and portfolio tracking.",
    tech: ["Vue.js", "D3.js", "WebSocket", "Express"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "ArtFlow Studio",
    description: "Collaborative design platform for creative teams with real-time editing and version control.",
    tech: ["React", "Socket.io", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "MindfulAI",
    description: "Mental health companion app using AI to provide personalized meditation and wellness recommendations.",
    tech: ["React Native", "Python", "FastAPI", "OpenAI"],
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
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
              <Card className="glass-effect overflow-hidden h-full group hover:shadow-deep transition-all duration-500 transform-3d">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="bg-neon-cyan text-black hover:bg-neon-cyan/90 hover:shadow-neon-cyan transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
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