import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useReveal } from '@/hooks'
import { useI18n } from '@/i18n/language'

export function Faq() {
  const { t } = useI18n()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 pb-20 sm:px-6 sm:pb-24 lg:pb-28">
      <div ref={ref} className="reveal">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold tracking-wide text-terracotta">{t.faq.eyebrow}</p>
          <h2 className="mt-3 font-display text-[1.875rem] leading-tight font-black tracking-tight text-cocoa text-balance sm:text-4xl">
            {t.faq.title}
          </h2>
        </div>
        <Accordion className="gap-3">
          {t.faq.items.map((item) => (
            <AccordionItem
              key={item.q}
              value={item.q}
              className="rounded-2xl border border-black/[0.05] bg-white px-5 shadow-soft not-last:border-b sm:px-6"
            >
              <AccordionTrigger className="py-5 font-display text-base font-bold text-cocoa hover:no-underline sm:text-lg [&_[data-slot=accordion-trigger-icon]]:mt-1 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-terracotta">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-cocoa-muted">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
