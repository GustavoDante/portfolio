import { Header } from './components/Header'
import { ContactButtonsContainer } from './components/Header/styles'
import {
  AboutMeCard,
  AboutMeContainer,
  DegreePanelContainer,
  ExperiencePanelContainer,
  FeedbacksContainer,
  HighlightsList,
  HomeContainer,
  PortfolioContainer,
  ScrollToTopButton,
  SectionLabel,
  SkillsContainer,
} from './styles'

import { useContext, useEffect, useState } from 'react'
import ArrowUp from '../../assets/icons/arrow-up.svg'
import { LanguageContext } from '../../contexts/LanguageContext'
import { useScrollReveal } from '../../utils/useScrollReveal'
import { DegreePanel } from './components/DegreePanel/intex'
import { ExperiencePanel } from './components/ExperiencePanel'
import { FeedBackPanel } from './components/FeedBackPanel'
import { Footer } from './components/Footer'
import { PortfolioPanel } from './components/PortfolioPanel'
import { TechnologiesPanel } from './components/TechnologiesPanel'
import { translations } from './translations/translations'

export function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useContext(LanguageContext)

  useScrollReveal()

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

      {/* About Me */}
      <AboutMeContainer>
        <SectionLabel data-reveal data-reveal-delay="1">
          {language === 'en' ? 'Who I Am' : 'Quem sou'}
        </SectionLabel>
        <h1 id="about-me" data-reveal data-reveal-delay="2">
          {translations[language]['about-me'].title}
        </h1>
        <AboutMeCard data-reveal data-reveal-delay="3">
          <p>{translations[language]['about-me'].text}</p>
          <HighlightsList>
            {translations[language]['about-me'].highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </HighlightsList>
        </AboutMeCard>
        <ContactButtonsContainer
          style={{ marginTop: '1.5rem' }}
          data-reveal
          data-reveal-delay="4"
        >
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

      {/* Skills */}
      <SkillsContainer>
        <SectionLabel data-reveal data-reveal-delay="1">
          {language === 'en' ? 'Tech Stack' : 'Tecnologias'}
        </SectionLabel>
        <h1 id="my-skills" data-reveal data-reveal-delay="2">
          {translations[language].skills.title}
        </h1>
        <p data-reveal data-reveal-delay="3">
          {translations[language].technologies.description}
        </p>
        <TechnologiesPanel />
      </SkillsContainer>

      {/* Experience */}
      <ExperiencePanelContainer>
        <SectionLabel data-reveal data-reveal-delay="1">
          {language === 'en' ? 'Career' : 'Carreira'}
        </SectionLabel>
        <h1 id="my-experience" data-reveal data-reveal-delay="2">
          {translations[language].experiences.title}
        </h1>
        <ExperiencePanel />
      </ExperiencePanelContainer>

      {/* Degrees */}
      <DegreePanelContainer>
        <SectionLabel data-reveal data-reveal-delay="1">
          {language === 'en' ? 'Education' : 'Educação'}
        </SectionLabel>
        <h1 id="my-degree" data-reveal data-reveal-delay="2">
          {translations[language].degrees.title}
        </h1>
        <DegreePanel />
      </DegreePanelContainer>

      {/* Projects */}
      <PortfolioContainer>
        <SectionLabel data-reveal data-reveal-delay="1">
          {language === 'en' ? 'Work' : 'Portfólio'}
        </SectionLabel>
        <h1 id="my-projects" data-reveal data-reveal-delay="2">
          {translations[language].projects.title}
        </h1>
        <PortfolioPanel />
      </PortfolioContainer>

      {/* Feedbacks */}
      <FeedbacksContainer>
        <SectionLabel data-reveal data-reveal-delay="1">
          {language === 'en' ? 'Testimonials' : 'Depoimentos'}
        </SectionLabel>
        <h1 id="feedbacks" data-reveal data-reveal-delay="2">
          {translations[language].feedbacks.title}
        </h1>
        <FeedBackPanel />
      </FeedbacksContainer>

      <Footer />
      <ScrollToTopButton show={isVisible} onClick={scrollToTop}>
        <img src={ArrowUp} alt="arrow up" />
      </ScrollToTopButton>
    </HomeContainer>
  )
}
