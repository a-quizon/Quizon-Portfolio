import { about } from '../data/content'
import { AboutIcon } from './icons'
import { Card } from './Card'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <Card className="md:col-span-5">
      <SectionTitle icon={<AboutIcon className="h-4 w-4 md:h-[18px] md:w-[18px]" />}>
        About
      </SectionTitle>
      {about.paragraphs.map((paragraph, index) => (
        <p key={paragraph.slice(0, 24)} className={`text-sm leading-relaxed text-primary ${index > 0 ? 'mt-4' : ''}`}>
          {paragraph}
        </p>
      ))}
    </Card>
  )
}
