import { NavBarContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logoGustavo from '../../assets/gustavo-dante.svg'

export function NavBar() {
  return (
    <NavBarContainer>
      <div>
        <img src={logoGustavo} alt="simbolo beta azul" />
      </div>
      <nav>
        <NavLink to="/">Sobre mim</NavLink>
        <NavLink to="/dada">Skills</NavLink>
        <NavLink to="/sdas">Projetos</NavLink>
      </nav>
    </NavBarContainer>
  )
}
