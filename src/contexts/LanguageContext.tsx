import React, { createContext } from 'react'

export type Language = 'en' | 'pt'

interface LanguageContextData {
  language: Language
  setLanguage: (language: Language) => void
}

export const LanguageContext = createContext({} as LanguageContextData)

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = React.useState<Language>(
    (sessionStorage.getItem('language') as Language) || 'en',
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
