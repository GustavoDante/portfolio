import { DropdownContent, NavBarContainer, NavBarContent } from './styles'
import logoGustavo from '../../../../assets/icons/header-gustavo-dante-icon.svg'
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
        <a onClick={() => scrollTo('my-skills')}>Skills</a>
        <a onClick={() => scrollTo('my-experience')}>Experiências</a>
        <a onClick={() => scrollTo('my-degree')}>Certificações</a>
        <div>
          <a
            onClick={() => {
              setIsNavVisible(!isNavVisible)
            }}
          >
            &#9776;
          </a>
          <DropdownContent isVisible={isNavVisible}>
            <a onClick={() => scrollTo('my-skills')}>Skills</a>
            <a onClick={() => scrollTo('my-experience')}>Experiências</a>
            <a onClick={() => scrollTo('my-degree')}>Certificações</a>
          </DropdownContent>
        </div>
      </NavBarContent>
    </NavBarContainer>
  )
}
