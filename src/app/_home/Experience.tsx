import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    company: 'Shiftr',
    role: 'Frontend Developer',
    location: 'Remote',
    period: 'Oct 2024 — Present',
    description: [
      'Developed e-commerce platforms using Next.js, improving page load speed by 40% and boosting SEO scores',
      'Created custom admin and customer dashboards for a beverage distributor, enhancing operational efficiency',
      'Implemented sales tracking, user roles, and data visualizations using React, Chart.js, and Tailwind CSS',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Chart.js',
    ],
  },
  {
    company: 'LT Coding',
    role: 'Frontend Developer',
    location: 'Ijevan, Armenia',
    period: 'Jan 2023 — May 2025',
    description: [
      'Built responsive web applications using React, Next.js, Vue.js, TypeScript, and Tailwind CSS, serving 10,000+ users with 99% uptime',
      'Collaborated with UI/UX designers to deliver pixel-perfect interfaces, improving user satisfaction scores by 25% and accessibility compliance',
      'Mentored 3 junior developers through code reviews and technical guidance, accelerating team productivity and knowledge sharing',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    company: 'Self-Employed',
    role: 'Frontend Developer',
    location: 'Remote',
    period: 'Jan 2021 — Jan 2023',
    description: [
      'Delivered 10+ responsive web applications for clients using React, Vue.js, and modern JavaScript, achieving 100% project completion rate',
      'Developed reusable component libraries and UI systems, reducing development time by 40% across multiple projects',
      'Integrated REST APIs and third-party services to create dynamic user experiences, increasing client engagement by 30%',
    ],
    technologies: ['React', 'Vue.js', 'JavaScript', 'REST APIs'],
  },
]

export default function Experience() {
  return (
    <section id='experience' className='relative py-8 md:py-12'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-6 max-w-2xl'
        >
          <Badge
            variant='outline'
            className='border-muted bg-muted/50 mb-3 gap-2 px-4 py-1.5 text-sm'
          >
            <Briefcase size={14} />
            <span>Work Experience</span>
          </Badge>
          <h2 className='mb-3 text-4xl font-bold tracking-tight md:text-5xl'>
            Professional Experience
          </h2>
          <p className='text-muted-foreground text-lg'>
            My journey as a frontend developer, building scalable applications
            and collaborating with teams.
          </p>
        </motion.div>

        <div className='relative space-y-4'>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-card border-border relative rounded-lg border p-6 md:p-8'
            >
              <div className='mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <h3 className='text-xl font-bold'>{exp.role}</h3>
                  <div className='text-muted-foreground mt-1 flex flex-wrap items-center gap-3 text-sm'>
                    <span className='font-medium'>{exp.company}</span>
                    <span>•</span>
                    <div className='flex items-center gap-1'>
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className='text-muted-foreground mb-4 space-y-2 text-sm'>
                {exp.description.map((item, idx) => (
                  <li key={idx} className='flex gap-2'>
                    <span className='text-primary mt-1.5'>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className='flex flex-wrap gap-2'>
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant='secondary'
                    className='bg-muted text-xs'
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
