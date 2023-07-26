import PhotoGustavo from '../../../../assets/images/photo-gustavo.png'
import TypescriptIcon from '../../../../assets/icons/typescript-icon.svg'
import ReactIcon from '../../../../assets/icons/react-icon.svg'
import NodeIcon from '../../../../assets/icons/node-icon.svg'
import BackgroundHeader from '../../../../assets/backgrounds/header-background.png'
import Curriculum from '../../../../assets/files/curriculo.pdf'
import {
  ContactButtonsContainer,
  HeaderContainer,
  IntroductionContainer,
  PhotoContainer,
} from './styles'
import { translations } from '../../translations/translations'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { useContext } from 'react'

export function Header() {
  const { language } = useContext(LanguageContext)

  return (
    <HeaderContainer>
      <div>
        <IntroductionContainer>
          <strong>{translations[language].header.job}</strong>
          <h1>Gustavo Dante</h1>
          <span>{translations[language].header.slogan}</span>
          <ContactButtonsContainer>
            <a
              href="https://github.com/GustavoDante"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a href={Curriculum} target="_blank" rel="noreferrer">
              {translations[language].header.curriculum}
            </a>
          </ContactButtonsContainer>
        </IntroductionContainer>
        <PhotoContainer>
          <div>
            <div>
              <img src={TypescriptIcon} alt="icone do Typescript" />
              <img src={ReactIcon} alt="icone do React" />
              <img src={NodeIcon} alt="Icone do Node" />
            </div>
            <img src={PhotoGustavo} alt="Gustavo Dante" />
          </div>
        </PhotoContainer>
        <img src={BackgroundHeader} alt="relevo" />
      </div>
    </HeaderContainer>
  )
}
