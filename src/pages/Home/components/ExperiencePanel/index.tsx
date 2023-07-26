import { useContext } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { translations } from '../../translations/translations'
import { CardExperience, ExperiencePanelContainer } from './styles'

export function ExperiencePanel() {
  const { language } = useContext(LanguageContext)

  return (
    <ExperiencePanelContainer>
      {translations[language].experiences.jobs.map((experience) => {
        return (
          <CardExperience key={experience.data}>
            <div>
              <h3>{experience.job}</h3>
              <span>{experience.company}</span>
            </div>
            <span>{experience.data}</span>
            <p>{experience.description}</p>
          </CardExperience>
        )
      })}
    </ExperiencePanelContainer>
  )
}
