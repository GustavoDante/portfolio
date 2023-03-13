import HeaderBackground from '../../assets/header-background.png'
import PhotoGustavo from '../../assets/photo-gustavo.png'
import { HeaderContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <div>
          <div>
            <strong>Fullstack Developer</strong>
            <h1>Gustavo Dante</h1>
            <span>Lorem ipsum dolor sit amet consectetur. Dui ut.</span>
            <div>
              <a href="/">Github</a>
              <a href="/">Linkedin</a>
            </div>
          </div>
          <div>
            <img src={PhotoGustavo} alt="" />
          </div>
        </div>
        <img src={HeaderBackground} alt="" />
      </HeaderContainer>
    </HomeContainer>
  )
}
