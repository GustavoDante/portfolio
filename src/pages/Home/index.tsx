import { Header } from './components/Header'
import { ContactButtonsContainer } from './components/Header/styles'
import {
  AboutMeContainer,
  DegreePanelContainer,
  ExperiencePanelContainer,
  FeedbacksContainer,
  HomeContainer,
  PortfolioContainer,
  ScrollToTopButton,
  SkillsContainer,
} from './styles'

import Curriculum from '../../assets/files/curriculo.pdf'
import { TechnologiesPanel } from './components/TechnologiesPanel'
import { PortfolioPanel } from './components/PortfolioPanel'
import { FeedBackupsPanel } from './components/FeedBackupsPanel'
import { useEffect, useState } from 'react'
import ArrowUp from '../../assets/icons/arrow-up.svg'
import { Footer } from './components/Footer'
import { ExperiencePanel } from './components/ExperiencePanel'
import { DegreePanel } from './components/DegreePanel/intex'

export function Home() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HomeContainer>
      <Header />
      <AboutMeContainer>
        <h1 id="about-me">Sobre mim</h1>
        <p>
          Sou atualmente um desenvolvedor full-stack e tenho uma participação
          ativa em todas as etapas do desenvolvimento de software. Desde o
          planejamento das tecnologias até o deploy na nuvem e realização de
          testes. Tenho um forte desejo de aprender e adoro trabalhar em equipe,
          sempre focado em produzir código legível e organizado. Sou uma pessoa
          tranquila e apaixonada por lógica de programação, constantemente
          atento às novidades da minha área e tecnologias que possam melhorar
          minha produtividade e a qualidade dos projetos em que estou envolvido.
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
      <ExperiencePanelContainer>
        <h1 id="my-experience">Experiências profissionais</h1>
        <ExperiencePanel />
      </ExperiencePanelContainer>
      <DegreePanelContainer>
        <h1 id="my-degree">Certificações</h1>
        <DegreePanel />
      </DegreePanelContainer>
      <PortfolioContainer>
        <h1 id="my-projects">Meus Projetos</h1>
        <PortfolioPanel />
      </PortfolioContainer>
      <FeedbacksContainer>
        <h1 id="feedbacks">Recomendações</h1>
        <FeedBackupsPanel />
      </FeedbacksContainer>
      <Footer />
      <ScrollToTopButton show={isVisible} onClick={scrollToTop}>
        <img src={ArrowUp} alt="arrow up" />
      </ScrollToTopButton>
    </HomeContainer>
  )
}
