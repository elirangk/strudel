import { useI18n } from '@/i18n/language'
import { LogoMark } from './Logo'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-sand-deep/70 pt-8 pb-28 sm:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-cocoa-muted sm:flex-row sm:px-6 sm:text-start lg:px-8">
        <p className="flex items-center gap-2.5 font-bold text-cocoa">
          <LogoMark className="size-8" />
          {t.footer.name}
        </p>
        <p>{t.footer.note}</p>
      </div>
    </footer>
  )
}
