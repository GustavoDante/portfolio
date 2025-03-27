import {
  CustomDropdown,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  LanguageFlag,
  NavBarContainer,
  NavBarContent,
} from './styles'
import logoGustavo from '../../../../assets/icons/header-gustavo-dante-icon.svg'
import logoEn from '../../../../assets/icons/en.svg'
import logoPtBr from '../../../../assets/icons/ptbr.svg'
import React, { useContext, useState } from 'react'
import { translations } from '../../translations/translations'
import { Language, LanguageContext } from '../../../../contexts/LanguageContext'

export function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const { language, setLanguageAndSave } = useContext(LanguageContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  const changeLanguage = (newLanguage: Language) => {
    setLanguageAndSave(newLanguage)
    setIsOpen(false)
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

        <CustomDropdown>
          <DropdownToggle onClick={toggleDropdown}>
            <LanguageFlag
              src={language === 'en' ? logoEn : logoPtBr}
              alt={language === 'en' ? 'English' : 'Português'}
            />
          </DropdownToggle>
          <DropdownMenu isOpen={isOpen}>
            <DropdownItem onClick={() => changeLanguage('en')}>
              <LanguageFlag src={logoEn} alt="English" />
            </DropdownItem>
            <DropdownItem onClick={() => changeLanguage('pt')}>
              <LanguageFlag src={logoPtBr} alt="Português" />
            </DropdownItem>
          </DropdownMenu>
        </CustomDropdown>
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
