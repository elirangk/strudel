import { useAnyInView, useScrolledPast } from '@/hooks'
import { PRICE } from '@/i18n/copy'
import { useI18n } from '@/i18n/language'
import { cn } from '@/lib/utils'
import { BuyLink } from './BuyLink'

const HIDE_NEAR = ['order'] as const

export function FloatingBuy() {
  const { t, price } = useI18n()
  const past = useScrolledPast(640)
  const orderVisible = useAnyInView(HIDE_NEAR)
  const show = past && !orderVisible

  return (
    <div
      className={cn(
        'fixed inset-x-4 bottom-4 z-30 flex justify-center transition-all duration-500 sm:inset-x-auto sm:start-6 sm:bottom-6',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0',
      )}
      aria-hidden={!show}
    >
      <BuyLink
        tabIndex={show ? 0 : -1}
        className="group w-full justify-between gap-4 rounded-full border border-white/10 bg-cocoa/95 py-2.5 ps-5 pe-2.5 text-white shadow-2xl backdrop-blur-md hover:bg-terracotta sm:w-auto"
      >
        <span className="flex items-center gap-2.5">
          <span className="size-2.5 rounded-full bg-terracotta transition-colors group-hover:bg-white" aria-hidden="true" />
          <span className="text-sm font-bold">{t.floating}</span>
        </span>
        <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-extrabold">{price(PRICE)}</span>
      </BuyLink>
    </div>
  )
}
