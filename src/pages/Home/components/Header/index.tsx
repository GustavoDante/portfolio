import PhotoGustavo from '../../../../assets/images/photo-gustavo.png'
import TypescriptIcon from '../../../../assets/icons/typescript-icon.svg'
import ReactIcon from '../../../../assets/icons/react-icon.svg'
import NodeIcon from '../../../../assets/icons/node-icon.svg'
import BackgroundHeader from '../../../../assets/backgrounds/header-background.png'
import {
  ContactButtonsContainer,
  HeaderContainer,
  IntroductionContainer,
  PhotoContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={BackgroundHeader} alt="relevo" />
        <IntroductionContainer>
          <strong>Fullstack Developer</strong>
          <h1>Gustavo Dante</h1>
          <span>Lorem ipsum dolor sit amet consectetur. Dui ut.</span>
          <ContactButtonsContainer>
            <a
              href="https://github.com/GustavoDante"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-dante-silva-483649212/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
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
      </div>
    </HeaderContainer>
  )
}
