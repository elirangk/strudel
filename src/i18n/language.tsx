import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { copy, formatPrice, isRtl, LANGS, type Copy, type Lang } from './copy'

export const LANG_STORAGE_KEY = 'kt-lang'

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    if (stored && (LANGS as readonly string[]).includes(stored)) return stored as Lang
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
  return 'he'
}

type LanguageContextValue = {
  lang: Lang
  dir: 'rtl' | 'ltr'
  t: Copy
  price: (amount: number) => string
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)
  const dir = isRtl(lang) ? 'rtl' : 'ltr'
  const t = copy[lang]

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, dir, t])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {
      // Ignore: the choice still applies for this visit.
    }
  }, [])

  const value = useMemo(
    () => ({ lang, dir, t, setLang, price: (amount: number) => formatPrice(amount, lang) }),
    [lang, dir, t, setLang],
  ) satisfies LanguageContextValue

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used inside LanguageProvider')
  return ctx
}
