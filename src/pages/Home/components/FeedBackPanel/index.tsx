import { useContext } from 'react'
import IntroductionToBackEnd from '../../../../assets/files/Coursera-itbd.pdf'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { SectionTitle, TextLink } from '../../styles'
import { translations } from '../../translations/translations'
import { CertificationRow, Quote, QuotesRow } from './styles'

export function FeedBackPanel() {
  const { language } = useContext(LanguageContext)
  const text = translations[language]
  const certificate = text.degrees.certificate

  return (
    <>
      <SectionTitle>{text.feedbacks.heading}</SectionTitle>

      <QuotesRow>
        {text.feedbacks.linkedin.map((item) => (
          <Quote key={item.url}>
            <blockquote>{item.description}</blockquote>
            <figcaption>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
              <TextLink href={item.url} target="_blank" rel="noreferrer">
                {text.feedbacks.viewOnLinkedin} ↗
              </TextLink>
            </figcaption>
          </Quote>
        ))}
      </QuotesRow>

      <CertificationRow>
        <p>
          <span className="label">{text.degrees.certification}</span>
          {certificate.name} · {certificate.issuer} · {certificate.completed}
        </p>
        <TextLink href={IntroductionToBackEnd} target="_blank" rel="noreferrer">
          {certificate.cta} ↗
        </TextLink>
      </CertificationRow>
    </>
  )
}
