import React, { createContext } from 'react'

export type Language = 'en' | 'pt'

interface LanguageContextData {
  language: Language
  setLanguageAndSave: (language: Language) => void
}

export const LanguageContext = createContext({} as LanguageContextData)

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = React.useState<Language>(
    (sessionStorage.getItem('language') as Language) || 'pt',
  )

  function setLanguageAndSave(language: Language) {
    sessionStorage.setItem('language', language)
    setLanguage(language)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguageAndSave }}>
      {children}
    </LanguageContext.Provider>
  )
}
