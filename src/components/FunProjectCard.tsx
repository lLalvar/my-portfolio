import { ExternalLink, Github, LucideIcon } from 'lucide-react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card } from './ui/card'

export default function FunProjectCard({
  project,
}: {
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    url: string
    githubUrl: string
    image: string
    color: string
    icon: LucideIcon
  }
}) {
  const IconComponent = project.icon

  return (
    <Card className='group relative h-full overflow-hidden border shadow-lg'>
      {/* Background accent */}
      <div
        className='absolute inset-0 opacity-10'
        style={{ backgroundColor: project.color }}
      />

      <div className='relative flex h-full flex-col p-6 md:p-8'>
        <div className='mb-4 flex items-start justify-between'>
          <h3 className='flex items-center gap-2 text-xl font-bold tracking-tight md:text-2xl'>
            <IconComponent size={24} className='text-primary' />
            {project.title}
          </h3>
          <div className='flex gap-2'>
            <Button
              variant='ghost'
              size='icon'
              asChild
              className='h-8 w-8 opacity-70 transition-opacity hover:opacity-100'
            >
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit live site'
              >
                <ExternalLink size={14} />
              </a>
            </Button>
            <Button
              variant='ghost'
              size='icon'
              asChild
              className='h-8 w-8 opacity-70 transition-opacity hover:opacity-100'
            >
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View source code'
              >
                <Github size={14} />
              </a>
            </Button>
          </div>
        </div>

        <p className='text-muted-foreground mb-6 line-clamp-3'>
          {project.description}
        </p>

        <div className='mt-auto flex flex-wrap gap-2'>
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant='secondary'
              className='bg-background/60 backdrop-blur-sm'
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}
