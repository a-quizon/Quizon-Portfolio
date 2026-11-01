import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <section
      className={`rounded-[10px] border border-border bg-card p-[15px] transition-colors duration-200 ${className}`}
    >
      {children}
    </section>
  )
}
