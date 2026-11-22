import { BookOpenText, ExternalLink, Gift, HeartHandshake, LockKeyhole, Magnet, ShieldCheck, Tablet } from 'lucide-react'
import { useReveal } from '@/hooks'
import { BuyLink } from './BuyLink'
import { LIST_PRICE, PRICE } from '@/i18n/copy'
import { useI18n } from '@/i18n/language'

const boxIcons = [Tablet, Magnet, BookOpenText, HeartHandshake]

export function Order() {
  const { t, price } = useI18n()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="order" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
      <div
        ref={ref}
        className="reveal relative overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white p-6 shadow-lift sm:rounded-[2.5rem] sm:p-10 lg:p-14"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -top-28 end-[-6rem] size-80 rounded-full bg-terracotta-light/70 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-terracotta-light px-3 py-1 text-xs font-bold text-terracotta">
              <Gift className="size-3.5" aria-hidden="true" />
              {t.order.gift}
            </p>
            <h2 className="mb-4 font-display text-[2rem] leading-tight font-black tracking-tight text-cocoa sm:text-4xl lg:text-[2.75rem]">
              {t.order.title}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-cocoa-muted sm:text-lg">{t.order.lead}</p>

            <p className="mb-3 text-sm font-extrabold text-cocoa">{t.order.boxTitle}</p>
            <ul className="space-y-2.5">
              {t.order.box.map((item, i) => {
                const Icon = boxIcons[i]
                return (
                  <li key={item} className="flex items-center gap-3.5 rounded-2xl bg-cream px-4 py-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-terracotta shadow-sm">
                      <Icon className="size-[1.125rem]" aria-hidden="true" />
                    </span>
                    <span className="text-[0.9375rem] leading-snug font-semibold text-cocoa sm:text-base">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[1.75rem] border border-sand-deep/70 bg-sand/70 p-6 text-center sm:p-8">
              <p className="text-sm font-bold text-cocoa-muted">{t.order.kit}</p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="font-display text-5xl leading-none font-black tracking-tight whitespace-nowrap text-cocoa sm:text-6xl">{price(PRICE)}</span>
                <span className="flex flex-col items-start gap-1 text-start">
                  <span className="rounded-full bg-terracotta px-2.5 py-0.5 text-xs font-extrabold whitespace-nowrap text-white">
                    {t.order.save(price(LIST_PRICE - PRICE))}
                  </span>
                  <span className="text-sm whitespace-nowrap text-cocoa-muted">
                    {t.order.was} <span className="line-through">{price(LIST_PRICE)}</span>
                  </span>
                </span>
              </div>
              <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-sage-light px-3 py-1 text-xs font-bold text-sage">
                <ShieldCheck className="size-3.5" aria-hidden="true" />
                {t.order.included}
              </p>

              <BuyLink className="mt-6 h-14 w-full rounded-2xl bg-terracotta px-4 text-lg font-extrabold text-white shadow-cta hover:-translate-y-0.5 hover:bg-terracotta-dark">
                {t.order.button}
                <ExternalLink className="size-[1.125rem]" aria-hidden="true" />
              </BuyLink>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-cocoa-muted">
                <LockKeyhole className="size-3.5" aria-hidden="true" />
                {t.order.payNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
