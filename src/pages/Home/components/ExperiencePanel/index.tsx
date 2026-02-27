import { useContext } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { translations } from '../../translations/translations'
import { CardExperience, TimelineContainer, TimelineItem } from './styles'

export function ExperiencePanel() {
  const { language } = useContext(LanguageContext)

  return (
    <TimelineContainer>
      {translations[language].experiences.jobs.map((experience, index) => (
        <TimelineItem
          key={experience.data}
          data-reveal
          data-reveal-delay={String(Math.min(index + 1, 5))}
        >
          <CardExperience>
            <div className="card-header">
              <h3>{experience.job}</h3>
              <span className="date-badge">{experience.data}</span>
            </div>
            <span className="company">{experience.company}</span>
            <p>{experience.description}</p>
          </CardExperience>
        </TimelineItem>
      ))}
    </TimelineContainer>
  )
}
