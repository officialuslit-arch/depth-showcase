import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@alexchen.dev",
    href: "mailto:hello@alexchen.dev"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-neon-cyan"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-neon-purple"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-neon-pink"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-muted/50 border-border focus:border-neon-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-muted/50 border-border focus:border-neon-cyan transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-muted/50 border-border focus:border-neon-cyan transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="Let's work together" 
                    className="bg-muted/50 border-border focus:border-neon-cyan transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-muted/50 border-border focus:border-neon-cyan transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-neon-cyan text-black hover:bg-neon-cyan/90 hover:shadow-neon-cyan transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:bg-muted/20 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-neon-cyan/10 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
                        <Icon className="w-5 h-5 text-neon-cyan" />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className={`p-4 glass-effect rounded-lg transition-all duration-300 ${link.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            <Card className="glass-effect p-6">
              <h4 className="text-lg font-semibold mb-3">Let's Collaborate</h4>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack developer, a creative technologist, 
                or just want to brainstorm ideas, I'd love to connect.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};