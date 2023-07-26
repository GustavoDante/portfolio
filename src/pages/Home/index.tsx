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

import { TechnologiesPanel } from './components/TechnologiesPanel'
import { PortfolioPanel } from './components/PortfolioPanel'
import { FeedBackPanel } from './components/FeedBackPanel'
import { useContext, useEffect, useState } from 'react'
import ArrowUp from '../../assets/icons/arrow-up.svg'
import { Footer } from './components/Footer'
import { ExperiencePanel } from './components/ExperiencePanel'
import { DegreePanel } from './components/DegreePanel/intex'
import { translations } from './translations/translations'
import { LanguageContext } from '../../contexts/LanguageContext'

export function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useContext(LanguageContext)

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
        <h1 id="about-me">{translations[language]['about-me'].title}</h1>
        <p>{translations[language]['about-me'].text}</p>
        <ContactButtonsContainer>
          <a
            href="https://wa.me/5581991642089"
            target="_blank"
            rel="noreferrer"
          >
            {translations[language].contacts.whatsapp}
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-dante-silva-483649212/"
            target="_blank"
            rel="noreferrer"
          >
            {translations[language].contacts.linkedin}
          </a>
        </ContactButtonsContainer>
      </AboutMeContainer>
      <SkillsContainer>
        <h1 id="my-skills">{translations[language].skills.title}</h1>
        <TechnologiesPanel />
      </SkillsContainer>
      <ExperiencePanelContainer>
        <h1 id="my-experience">{translations[language].experiences.title}</h1>
        <ExperiencePanel />
      </ExperiencePanelContainer>
      <DegreePanelContainer>
        <h1 id="my-degree">{translations[language].degrees.title}</h1>
        <DegreePanel />
      </DegreePanelContainer>
      <PortfolioContainer>
        <h1 id="my-projects">{translations[language].projects.title}</h1>
        <PortfolioPanel />
      </PortfolioContainer>
      <FeedbacksContainer>
        <h1 id="feedbacks">{translations[language].feedbacks.title}</h1>
        <FeedBackPanel />
      </FeedbacksContainer>
      <Footer />
      <ScrollToTopButton show={isVisible} onClick={scrollToTop}>
        <img src={ArrowUp} alt="arrow up" />
      </ScrollToTopButton>
    </HomeContainer>
  )
}
