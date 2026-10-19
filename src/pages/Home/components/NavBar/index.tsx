import { useContext, useEffect, useState } from 'react'
import { Language, LanguageContext } from '../../../../contexts/LanguageContext'
import { translations } from '../../translations/translations'
import {
  LanguageButton,
  LanguageToggle,
  Logo,
  MenuButton,
  NavBarContainer,
  NavBarInner,
  NavLink,
  NavLinks,
  Sheet,
  SheetLink,
} from './styles'

type NavKey = 'projects' | 'about' | 'career' | 'contact'

const navItems: { key: NavKey; id: string }[] = [
  { key: 'projects', id: 'projetos' },
  { key: 'about', id: 'sobre' },
  { key: 'career', id: 'carreira' },
  { key: 'contact', id: 'contato' },
]

const observedSectionIds = [
  'topo',
  'projetos',
  'sobre',
  'carreira',
  'recomendacoes',
  'contato',
]

const languages: { value: Language; label: string }[] = [
  { value: 'pt', label: 'PT' },
  { value: 'en', label: 'EN' },
]

export function NavBar() {
  const { language, setLanguageAndSave } = useContext(LanguageContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const text = translations[language].navbar

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    observedSectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1
      if (reachedBottom) setActiveId('contato')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const renderLanguageToggle = (inSheet: boolean) => (
    <LanguageToggle role="group" aria-label={text.language} inSheet={inSheet}>
      {languages.map((item) => (
        <LanguageButton
          key={item.value}
          type="button"
          active={language === item.value}
          aria-pressed={language === item.value}
          onClick={() => setLanguageAndSave(item.value)}
        >
          {item.label}
        </LanguageButton>
      ))}
    </LanguageToggle>
  )

  return (
    <NavBarContainer>
      <NavBarInner>
        <Logo href="#topo" onClick={closeMenu}>
          Gustavo Dante
        </Logo>

        <NavLinks aria-label={text.sections}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              active={activeId === item.id}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {text[item.key]}
            </NavLink>
          ))}
        </NavLinks>

        {renderLanguageToggle(false)}

        <MenuButton
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? text.close : text.menu}
        </MenuButton>
      </NavBarInner>

      {isMenuOpen && (
        <Sheet>
          <nav aria-label={text.sections}>
            {navItems.map((item) => (
              <SheetLink key={item.id} href={`#${item.id}`} onClick={closeMenu}>
                {text[item.key]}
                <span aria-hidden="true">→</span>
              </SheetLink>
            ))}
          </nav>
          {renderLanguageToggle(true)}
        </Sheet>
      )}
    </NavBarContainer>
  )
}
