import { CreditCard, MessageCircle, ShieldCheck, Truck } from 'lucide-react'
import { useI18n } from '@/i18n/language'

const icons = [Truck, ShieldCheck, CreditCard, MessageCircle]

export function TrustBar() {
  const { t } = useI18n()
  return (
    <section aria-label={t.order.included} className="border-y border-sand-deep/60 bg-white/60">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-7 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-8">
        {t.trust.map((item, i) => {
          const Icon = icons[i]
          return (
            <li key={item.title} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-terracotta-light text-terracotta">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm leading-snug font-extrabold text-cocoa sm:text-[0.9375rem]">{item.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-cocoa-muted sm:text-sm">{item.sub}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
