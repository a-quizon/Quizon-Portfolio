import { beyondCoding } from '../data/content'
import { BeyondIcon } from './icons'
import { Card } from './Card'
import { SectionTitle } from './SectionTitle'

export function BeyondCoding() {
  return (
    <Card className="md:col-span-3">
      <SectionTitle icon={<BeyondIcon className="h-4 w-4 md:h-[18px] md:w-[18px]" />}>
        Beyond Coding
      </SectionTitle>
      <p className="text-sm leading-relaxed text-primary">{beyondCoding}</p>
    </Card>
  )
}
