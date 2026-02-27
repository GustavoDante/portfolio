import { useContext } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { translations } from '../../translations/translations'
import { FeedBackupsPanelContainer, TestimonialCard } from './styles'

export function FeedBackPanel() {
  const { language } = useContext(LanguageContext)
  return (
    <FeedBackupsPanelContainer>
      {translations[language].feedbacks.linkedin.map((item, index) => {
        const initials = item.name
          .split(' ')
          .slice(0, 2)
          .map((w) => w[0])
          .join('')
        return (
          <TestimonialCard
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={item.url}
            data-reveal
            data-reveal-delay={String(Math.min(index + 1, 5))}
          >
            <p className="testimonial-text">{item.description}</p>
            <div className="testimonial-author">
              <div className="avatar">{initials}</div>
              <div className="author-info">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
              <span className="linkedin-hint">LinkedIn</span>
            </div>
          </TestimonialCard>
        )
      })}
    </FeedBackupsPanelContainer>
  )
}
