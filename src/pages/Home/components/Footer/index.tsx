import logoGustavo from '../../../../assets/icons/header-gustavo-dante-icon.svg'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <img src={logoGustavo} alt="Logo Gustavo Dante" />
      <strong>© Gustavo Dante 2026</strong>
    </FooterContainer>
  )
}
