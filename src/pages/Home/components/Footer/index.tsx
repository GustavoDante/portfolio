import { useContext } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { TextLink } from '../../styles'
import { translations } from '../../translations/translations'
import { FooterContainer, FooterInner } from './styles'

export function Footer() {
  const { language } = useContext(LanguageContext)

  return (
    <FooterContainer>
      <FooterInner>
        <span>© {new Date().getFullYear()} Gustavo Dante</span>
        <TextLink href="#topo">
          {translations[language].footer.backToTop} ↑
        </TextLink>
      </FooterInner>
    </FooterContainer>
  )
}
