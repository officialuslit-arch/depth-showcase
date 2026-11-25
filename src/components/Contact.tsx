import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'udayshak8962@gmail.com', href: 'mailto:udayshak8962@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+917970240476', href: 'tel:+917970240476' },
  { icon: MapPin, label: 'Location', value: 'Gwalior, MP', href: 'https://maps.google.com/?q=Gwalior%2C+MP' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Uday-Shakya' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/udayshakya' },
];

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100, 'First name must be less than 100 characters'),
  lastName: z.string().trim().min(1, 'Last name is required').max(100, 'Last name must be less than 100 characters'),
  email: z.string().trim().email('Enter a valid email address').max(255, 'Email must be less than 255 characters'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { firstName: '', lastName: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_hq5yplm',
        'template_tbqr4ni',
        { first_name: data.firstName, last_name: data.lastName, from_email: data.email, subject: data.subject, message: data.message },
        'AhRWM5BsND_Tuyugs',
      );
      toast({ title: 'Message sent successfully!', description: 'Thank you for your message. I’ll get back to you soon.' });
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({ title: 'Message could not be sent', description: 'Please try again later or contact me directly.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorFor = (field: keyof ContactFormData) => form.formState.errors[field];

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-10 flex flex-col gap-4 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs text-primary">05 / CONTACT</p>
            <h2 className="font-display text-4xl sm:text-5xl">Let’s make something useful.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">Have a role, a project, or a good problem to solve? I’d be glad to hear about it.</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
            <h3 className="mb-5 font-display text-2xl">Send a message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium">First name</label>
                  <Input id="firstName" autoComplete="given-name" aria-invalid={Boolean(errorFor('firstName'))} aria-describedby={errorFor('firstName') ? 'firstName-error' : undefined} {...form.register('firstName')} />
                  {errorFor('firstName') && <p id="firstName-error" className="mt-1 text-sm text-destructive">{errorFor('firstName')?.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium">Last name</label>
                  <Input id="lastName" autoComplete="family-name" aria-invalid={Boolean(errorFor('lastName'))} aria-describedby={errorFor('lastName') ? 'lastName-error' : undefined} {...form.register('lastName')} />
                  {errorFor('lastName') && <p id="lastName-error" className="mt-1 text-sm text-destructive">{errorFor('lastName')?.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <Input id="email" type="email" autoComplete="email" aria-invalid={Boolean(errorFor('email'))} aria-describedby={errorFor('email') ? 'email-error' : undefined} {...form.register('email')} />
                {errorFor('email') && <p id="email-error" className="mt-1 text-sm text-destructive">{errorFor('email')?.message}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
                <Input id="subject" aria-invalid={Boolean(errorFor('subject'))} aria-describedby={errorFor('subject') ? 'subject-error' : undefined} {...form.register('subject')} />
                {errorFor('subject') && <p id="subject-error" className="mt-1 text-sm text-destructive">{errorFor('subject')?.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                <Textarea id="message" rows={5} className="resize-y bg-card" aria-invalid={Boolean(errorFor('message'))} aria-describedby={errorFor('message') ? 'message-error' : undefined} {...form.register('message')} />
                {errorFor('message') && <p id="message-error" className="mt-1 text-sm text-destructive">{errorFor('message')?.message}</p>}
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'} <ArrowUpRight aria-hidden="true" />
              </Button>
            </form>
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} viewport={{ once: true }} className="lg:border-l lg:border-border lg:pl-10">
            <h3 className="font-display text-2xl">Direct contact</h3>
            <div className="mt-5 divide-y divide-border border-y border-border">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const external = item.href.startsWith('https:');
                return (
                  <a key={item.label} href={item.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="group flex items-center justify-between gap-4 py-4 focus-ring">
                    <span className="flex min-w-0 items-center gap-3">
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                      <span className="min-w-0"><span className="block text-xs text-muted-foreground">{item.label}</span><span className="block break-words text-sm">{item.value}</span></span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-8">
              <p className="mb-3 font-mono text-xs text-muted-foreground">AROUND THE WEB</p>
              <div className="flex gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Button key={link.label} asChild variant="outline" size="sm">
                      <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}><Icon aria-hidden="true" />{link.label}</a>
                    </Button>
                  );
                })}
              </div>
            </div>
            <p className="mt-10 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">I’m open to conversations about full-stack roles and collaborative product work.</p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
