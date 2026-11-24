import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';

const achievements = [
  'Built the complete UltraHustle freelancer marketplace frontend: 15+ responsive React screens, reusable components, and centralized state.',
  'Engineered 8+ REST APIs with Node.js, Express, and MongoDB, including Mongoose validation, pagination, and optimized queries.',
  'Delivered 6+ company-site and admin-dashboard modules, including role-based access control and dynamic data tables.',
  'Tested APIs in Postman, resolved 15+ bugs, and improved load times with code-splitting and lazy loading; collaborated through GitHub pull requests.',
];

export const Experience = () => (
  <section id="experience" className="bg-secondary/45 px-5 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 flex flex-col gap-4 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="mb-3 font-mono text-xs text-primary">02 / EXPERIENCE</p>
          <h2 className="font-display text-4xl sm:text-5xl">Work in practice.</h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">Recent work across a marketplace, company products, and internal tools.</p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="grid gap-8 border-b border-border pb-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-16"
      >
        <div>
          <div className="mb-5 flex items-center gap-2 font-mono text-xs text-accent">
            <BriefcaseBusiness aria-hidden="true" className="h-4 w-4" />
            PROFESSIONAL EXPERIENCE
          </div>
          <h3 className="font-display text-3xl">Full Stack Developer Intern</h3>
          <p className="mt-2 text-lg text-primary">DND Consultancy</p>
          <div className="mt-6 space-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="h-4 w-4 text-primary" />December 2025 – April 2026</p>
            <p className="flex items-center gap-2"><MapPin aria-hidden="true" className="h-4 w-4 text-primary" />Remote</p>
          </div>
        </div>
        <div>
          <p className="mb-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Contributed across the product lifecycle, from responsive customer-facing screens to API design, admin tools, and performance improvements.</p>
          <ol className="divide-y divide-border border-t border-border">
            {achievements.map((achievement, index) => (
              <li key={achievement} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 text-sm leading-relaxed sm:text-base">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ol>
        </div>
      </motion.article>
    </div>
  </section>
);
