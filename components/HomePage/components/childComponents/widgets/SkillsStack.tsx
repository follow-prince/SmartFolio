import React from 'react'
import { Chip } from '@nextui-org/react'
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandNodejs,
    IconBrandMongodb,
    IconBrandTailwind
    
} from '@tabler/icons-react'

const initialSkills = [
  {
    name: 'React JS',
    color: 'primary',
    avatar: <IconBrandReact stroke={1.5} />
  },
  {
    name: 'Next Js',
    color: 'success',
    avatar: <IconBrandNextjs stroke={1.5} />
  },
  {
    name: 'TypeScript',
    color: 'danger',
    avatar: <IconBrandTypescript stroke={1.5} />
  },
 
 
]

export function SkillsStack() {
  const [skills] = React.useState(initialSkills)

  

  return (
    <div className='flex flex-wrap gap-1 '>
      {skills.map((skill, index) => (
        <Chip
          key={index}
          avatar={skill.avatar}
          color={`${skill.color}` as any}
          variant='shadow'
          className='h-6 text-[10px] font-extrabold '
        >
          {skill.name}
        </Chip>
      ))}
    </div>
  )
}
