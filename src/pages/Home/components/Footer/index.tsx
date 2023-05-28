import { FooterContainer } from './styles'
import logoGustavo from '../../../../assets/icons/header-gustavo-dante-icon.svg'

export function Footer() {
  return (
    <FooterContainer>
      <img src={logoGustavo} alt="Logo Gustavo Dante" />
      <strong>© Gustavo Dante 2023</strong>
    </FooterContainer>
  )
}
