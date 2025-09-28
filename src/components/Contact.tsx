import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "udayshak8962@gmail.com",
    href: "mailto:udayshak8962@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone", 
    value: "+917970240476",
    href: "tel:+917970240476"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gwalior, MP",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Uday-Shakya",
    color: "hover:text-neon-cyan"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/udayshakya",
    color: "hover:text-neon-purple"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-neon-pink"
  }
];

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_hq5yplm',
        'template_tbqr4ni',
        {
          first_name: data.firstName,
          last_name: data.lastName,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'AhRWM5BsND_Tuyugs'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      {...form.register("firstName")}
                      placeholder="John" 
                      className="bg-muted/50 border-border focus:border-neon-cyan transition-colors"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      {...form.register("lastName")}
                      placeholder="Doe" 
                      className="bg-muted/50 border-border focus:border-neon-cyan transition-colors"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    {...form.register("email")}
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-muted/50 border-border focus:border-neon-cyan transition-colors"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    {...form.register("subject")}
                    placeholder="Let's work together" 
                    className="bg-muted/50 border-border focus:border-neon-cyan transition-colors"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    {...form.register("message")}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-muted/50 border-border focus:border-neon-cyan transition-colors resize-none"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-cyan text-black hover:bg-neon-cyan/90 hover:shadow-neon-cyan transition-all duration-300 disabled:opacity-50 button-rgb button-rgb-glow"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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