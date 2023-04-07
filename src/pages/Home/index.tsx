import PhotoGustavo from '../../assets/images/photo-gustavo.png'
import TypescriptIcon from '../../assets/icons/typescript-icon.svg'
import ReactIcon from '../../assets/icons/react-icon.svg'
import JavascriptIcon from '../../assets/icons/javascript-icon.svg'
import {
  HeaderContainer,
  HomeContainer,
  IntroductionContainer,
  PhotoContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <div>
          <IntroductionContainer>
            <strong>Fullstack Developer</strong>
            <h1>Gustavo Dante</h1>
            <span>Lorem ipsum dolor sit amet consectetur. Dui ut.</span>
            <div>
              <a href="/">Github</a>
              <a href="/">Linkedin</a>
            </div>
          </IntroductionContainer>
          <PhotoContainer>
            <div>
              <div>
                <img src={TypescriptIcon} alt="icone do Typescript" />
                <img src={ReactIcon} alt="icone do React" />
                <img src={JavascriptIcon} alt="Icone do JavaScript" />
              </div>
              <img src={PhotoGustavo} alt="Gustavo Dante" />
            </div>
          </PhotoContainer>
        </div>
      </HeaderContainer>
    </HomeContainer>
  )
}
