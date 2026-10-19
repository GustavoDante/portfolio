import { useContext } from 'react'
import Curriculum from '../../../../assets/files/curriculo.pdf'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { PrimaryButton, TextLink } from '../../styles'
import { translations } from '../../translations/translations'
import { ContactActions, ContactText, ContactTitle } from './styles'

export function ContactPanel() {
  const { language } = useContext(LanguageContext)
  const text = translations[language].contacts

  return (
    <>
      <ContactTitle>{text.heading}</ContactTitle>
      <ContactText>{text.text}</ContactText>
      <ContactActions>
        <PrimaryButton
          href="https://wa.me/5581991642089"
          target="_blank"
          rel="noreferrer"
        >
          {text.whatsapp} <span aria-hidden="true">→</span>
        </PrimaryButton>
        <TextLink
          href="https://www.linkedin.com/in/gustavo-dante-silva-483649212/"
          target="_blank"
          rel="noreferrer"
        >
          {text.linkedin} ↗
        </TextLink>
        <TextLink
          href="https://github.com/GustavoDante"
          target="_blank"
          rel="noreferrer"
        >
          {text.github} ↗
        </TextLink>
        <TextLink href={Curriculum} target="_blank" rel="noreferrer">
          {text.resume} ↓
        </TextLink>
      </ContactActions>
    </>
  )
}
