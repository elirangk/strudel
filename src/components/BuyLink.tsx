import type { ReactNode } from 'react'
import { PAYBOX_URL } from '@/i18n/copy'
import { useI18n } from '@/i18n/language'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  children: ReactNode
  tabIndex?: number
}

export function BuyLink({ className, children, tabIndex }: Props) {
  const { t } = useI18n()
  return (
    <a
      href={PAYBOX_URL}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      className={cn(
        'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px',
        className,
      )}
    >
      {children}
      <span className="sr-only">{t.cta.newTab}</span>
    </a>
  )
}
