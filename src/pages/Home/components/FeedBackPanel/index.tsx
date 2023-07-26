import { useContext } from 'react'
import { FeedBackupsPanelContainer } from './styles'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { translations } from '../../translations/translations'

export function FeedBackPanel() {
  const { language } = useContext(LanguageContext)
  return (
    <FeedBackupsPanelContainer>
      {translations[language].feedbacks.linkedin.map((linkedin) => {
        return (
          <a
            href={linkedin.url}
            target="_blank"
            rel="noreferrer"
            key={linkedin.url}
          >
            <h3>{linkedin.name}</h3>
            <p>{linkedin.description}</p>
          </a>
        )
      })}
    </FeedBackupsPanelContainer>
  )
}
