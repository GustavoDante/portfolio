import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { useScrollReveal } from '../../utils/useScrollReveal'
import { ContactPanel } from './components/ContactPanel'
import { ExperiencePanel } from './components/ExperiencePanel'
import { FeedBackPanel } from './components/FeedBackPanel'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PortfolioPanel } from './components/PortfolioPanel'
import { projects } from './components/PortfolioPanel/projectsData'
import { Section } from './components/Section'
import { TechnologiesPanel } from './components/TechnologiesPanel'
import { HomeContainer } from './styles'
import { translations } from './translations/translations'

export function Home() {
  const { language } = useContext(LanguageContext)
  const text = translations[language]

  useScrollReveal()

  return (
    <>
      <HomeContainer>
        <Header />

        <Section
          id="projetos"
          label={`${text.projects.label} · ${projects.length}`}
        >
          <PortfolioPanel />
        </Section>

        <Section id="sobre" label={text['about-me'].label}>
          <TechnologiesPanel />
        </Section>

        <Section id="carreira" label={text.experiences.label}>
          <ExperiencePanel />
        </Section>

        <Section id="recomendacoes" label={text.feedbacks.label}>
          <FeedBackPanel />
        </Section>

        <Section id="contato" label={text.contacts.label}>
          <ContactPanel />
        </Section>
      </HomeContainer>
      <Footer />
    </>
  )
}
