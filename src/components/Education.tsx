import { education } from '../data/content'
import { EducationIcon } from './icons'
import { Card } from './Card'
import { SectionTitle } from './SectionTitle'

export function Education() {
  return (
    <Card className="md:col-span-5">
      <SectionTitle icon={<EducationIcon className="h-4 w-4 md:h-[18px] md:w-[18px]" />}>
        Education
      </SectionTitle>
      <h4 className="text-base font-medium text-primary">{education.degree}</h4>
      <p className="text-sm text-primary">{education.school}</p>
      <p className="mt-1 text-sm text-muted">{education.detail}</p>
    </Card>
  )
}
