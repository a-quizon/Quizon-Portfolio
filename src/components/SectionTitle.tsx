import type { ReactNode } from 'react'

type SectionTitleProps = {
  icon: ReactNode
  children: ReactNode
}

export function SectionTitle({ icon, children }: SectionTitleProps) {
  return (
    <h3 className="mb-1.5 flex items-center gap-2.5 text-lg font-semibold text-primary">
      <span className="text-primary">{icon}</span>
      <span>{children}</span>
    </h3>
  )
}
