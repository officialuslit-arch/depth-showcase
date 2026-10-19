import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';

const achievements = [
  'Developed the complete frontend of UltraHustle, a freelancer marketplace, building 15+ responsive React.js screens with reusable components and centralized state management for smooth desktop and mobile navigation.',
  'Engineered 8+ RESTful APIs with Node.js, Express.js, and MongoDB, using Mongoose schema validation, pagination, and optimized database queries for scalable frontend integration.',
  'Built 6+ core modules for the company website and internal admin dashboard with the MERN stack, including Role-Based Access Control (RBAC) and dynamic data tables to automate team workflows.',
  'Tested APIs end to end with Postman, resolved 15+ UI and backend bugs, and improved load times through React code-splitting, lazy loading, and Git/GitHub pull-request workflows.',
];

export const Experience = () => (
  <section id="experience" className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold neon-text md:text-5xl">Experience</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Building useful products, from polished interfaces to scalable APIs.
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="glass-effect mx-auto max-w-4xl border-l-2 border-l-primary p-6 sm:p-9"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <div className="mb-3 flex items-center gap-3 text-primary">
              <BriefcaseBusiness aria-hidden="true" className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Full Stack Developer Intern</span>
            </div>
            <h3 className="text-2xl font-semibold">DND Consultancy</h3>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground sm:justify-end">
            <span className="inline-flex items-center gap-2">
              <CalendarDays aria-hidden="true" className="h-4 w-4 text-primary" />
              December 2025 – April 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-4 w-4 text-primary" />
              Remote
            </span>
          </div>
        </div>

        <ul className="mt-8 space-y-5 border-t border-border pt-7">
          {achievements.map((achievement, index) => (
            <motion.li
              key={achievement}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              <span aria-hidden="true" className="mt-[0.65em] h-2 w-2 shrink-0 rounded-full bg-primary shadow-neon-cyan" />
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </motion.article>
    </div>
  </section>
);