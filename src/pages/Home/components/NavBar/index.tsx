import {
  DropdownContent,
  NavBarContainer,
  NavBarContent,
  SelectLanguage,
} from './styles'
import logoGustavo from '../../../../assets/icons/header-gustavo-dante-icon.svg'
import React, { useContext, useState } from 'react'
import { translations } from '../../translations/translations'
import { Language, LanguageContext } from '../../../../contexts/LanguageContext'

export function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)

  function handleSetLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value as Language)
  }

  function scrollTo(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: 'smooth',
    })
    setIsNavVisible(false)
  }

  return (
    <NavBarContainer>
      <div>
        <img src={logoGustavo} alt="simbolo beta azul" />
      </div>
      <SelectLanguage onChange={handleSetLanguage}>
        <option value={'en'}>{translations[language].navbar.english}</option>
        <option value={'pt'}>{translations[language].navbar.portuguese}</option>
      </SelectLanguage>
      <NavBarContent>
        <a onClick={() => scrollTo('my-skills')}>
          {translations[language].navbar.skills}
        </a>
        <a onClick={() => scrollTo('my-experience')}>
          {translations[language].navbar.experiences}
        </a>
        <a onClick={() => scrollTo('my-degree')}>
          {translations[language].navbar.degrees}
        </a>
        <div>
          <a
            onClick={() => {
              setIsNavVisible(!isNavVisible)
            }}
          >
            &#9776;
          </a>
          <DropdownContent isVisible={isNavVisible}>
            <a onClick={() => scrollTo('my-skills')}>
              {translations[language].navbar.skills}
            </a>
            <a onClick={() => scrollTo('my-experience')}>
              {translations[language].navbar.experiences}
            </a>
            <a onClick={() => scrollTo('my-degree')}>
              {translations[language].navbar.degrees}
            </a>
          </DropdownContent>
        </div>
      </NavBarContent>
    </NavBarContainer>
  )
}
