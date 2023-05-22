import { DropdownContent, NavBarContainer, NavBarContent } from './styles'
import logoGustavo from '../../assets/icons/header-gustavo-dante-icon.svg'
import { useState } from 'react'

export function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false)

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
        <a onClick={() => scrollTo('about-me')}>Sobre mim</a>
        <a onClick={() => scrollTo('about-me')}>Skills</a>
        <a onClick={() => scrollTo('about-me')}>Projetos</a>
        <div>
          <a
            onClick={() => {
              setIsNavVisible(!isNavVisible)
            }}
          >
            &#9776;
          </a>
          <DropdownContent isVisible={isNavVisible}>
            <a onClick={() => scrollTo('about-me')}>Sobre mim</a>
            <a onClick={() => scrollTo('about-me')}>Skills</a>
            <a onClick={() => scrollTo('about-me')}>Projetos</a>
          </DropdownContent>
        </div>
      </NavBarContent>
    </NavBarContainer>
  )
}
