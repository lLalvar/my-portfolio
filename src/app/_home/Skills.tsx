import { motion } from 'framer-motion'
import { Terminal, Trophy } from 'lucide-react'

import FunSkillBar from '@/components/FunSkillBar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const skills = [
  { name: 'Next.js', category: 'Frontend', emoji: '⚡' },
  { name: 'React', category: 'Frontend', emoji: '⚛️' },
  { name: 'TypeScript', category: 'Language', emoji: '🔷' },
  { name: 'JavaScript', category: 'Language', emoji: '🟨' },
  { name: 'Tailwind CSS', category: 'Styling', emoji: '🌊' },
  { name: 'Framer Motion', category: 'Animation', emoji: '🎬' },
  { name: 'Nuxt', category: 'Frontend', emoji: '🌱' },
  { name: 'Electron', category: 'Desktop', emoji: '💻' },
  { name: 'Vue.js', category: 'Frontend', emoji: '🟩' },
]

export default function Skills({
  setEasterEggCount,
}: {
  setEasterEggCount: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <section id='skills' className='relative py-20 md:py-32'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className='bg-primary/10 absolute top-1/4 right-1/4 h-64 w-64 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className='bg-accent/10 absolute bottom-1/3 left-1/3 h-72 w-72 rounded-full blur-3xl'
        />
      </div>

      <div className='relative container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-16 max-w-xl'
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge
              variant='outline'
              className='border-muted bg-muted/50 mb-4 gap-2 px-4 py-1.5 text-sm'
            >
              <Terminal size={14} />
              <span>Super Powers</span>
            </Badge>
          </motion.div>
          <h2 className='mb-4 text-4xl font-bold tracking-tighter md:text-5xl'>
            Skills &
            <motion.span
              className='text-primary ml-2'
              animate={{
                scale: [1, 1.1, 1],
                rotateZ: [0, 2, 0, -2, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Technologies
            </motion.span>
          </h2>
          <p className='text-muted-foreground text-lg'>
            The tools and technologies I use to bring ideas to life. Hover to
            see them in action!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='relative'
        >
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map((skill, index) => (
              <FunSkillBar
                key={index}
                name={skill.name}
                emoji={skill.emoji}
                category={skill.category}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className='mt-16 flex justify-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant='secondary'
            size='lg'
            onClick={() => {
              setEasterEggCount((prev) => prev + 1)
            }}
            className='group'
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
              className='mr-2'
            >
              <Trophy size={16} />
            </motion.span>
            <span>I love what I do!</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
