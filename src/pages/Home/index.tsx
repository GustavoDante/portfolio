import { Header } from './components/Header'
import { ContactButtonsContainer } from './components/Header/styles'
import {
  AboutMeContainer,
  HomeContainer,
  PortfolioContainer,
  SkillsContainer,
} from './styles'

import Curriculum from '../../assets/files/curriculo.pdf'
import { TechnologiesPanel } from './components/TechnologiesPanel'
import { PortfolioPanel } from './components/PortfolioPanel'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <AboutMeContainer>
        <h1 id="about-me">Sobre mim</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nisl sit vel varius gravida
          sit amet hac. A ut aenean lorem facilisis. Vel laoreet netus congue
          elementum tortor semper gravida. Vitae consequat magna lectus
          hendrerit nec bibendum auctor ultrices in
        </p>
        <ContactButtonsContainer>
          <a
            href="https://wa.me/5581991642089"
            target="_blank"
            rel="noreferrer"
          >
            Contate-me
          </a>
          <a href={Curriculum} target="_blank" rel="noreferrer">
            Curriculo
          </a>
        </ContactButtonsContainer>
      </AboutMeContainer>
      <SkillsContainer>
        <h1 id="my-skills">Minhas Skills</h1>
        <TechnologiesPanel />
      </SkillsContainer>
      <PortfolioContainer>
        <h1 id="my-projects">Meus Projetos</h1>
        <PortfolioPanel />
      </PortfolioContainer>
    </HomeContainer>
  )
}
