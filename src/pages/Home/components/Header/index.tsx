import { useContext } from 'react'
import NodeIcon from '../../../../assets/icons/node-icon.svg'
import ReactIcon from '../../../../assets/icons/react-icon.svg'
import TypescriptIcon from '../../../../assets/icons/typescript-icon.svg'
import PhotoGustavo from '../../../../assets/images/photo-gustavo.png'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { PrimaryButton, TextLink } from '../../styles'
import { translations } from '../../translations/translations'
import {
  Eyebrow,
  HeroActions,
  HeroContainer,
  HeroContent,
  HeroText,
  HeroTitle,
  NowRow,
  PhotoCard,
  PhotoContainer,
  TechIcons,
} from './styles'

const WHATSAPP_URL = 'https://wa.me/5581991642089'

export function Header() {
  const { language } = useContext(LanguageContext)
  const text = translations[language].header

  return (
    <section id="topo">
      <HeroContainer>
        <HeroContent>
          <Eyebrow>{text.job}</Eyebrow>
          <HeroTitle>
            <span>Gustavo</span> <span>Dante</span>
          </HeroTitle>
          <HeroText>{text.slogan}</HeroText>
          <HeroActions>
            <PrimaryButton href="#projetos">
              {text.viewProjects} <span aria-hidden="true">↓</span>
            </PrimaryButton>
            <TextLink href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {text.whatsapp} ↗
            </TextLink>
          </HeroActions>
          <NowRow>
            {text.nowLabel} · <span>{text.nowRole}</span>
          </NowRow>
        </HeroContent>

        <PhotoContainer>
          <PhotoCard>
            <TechIcons>
              <img src={TypescriptIcon} alt="TypeScript" />
              <img src={ReactIcon} alt="React" />
              <img src={NodeIcon} alt="Node.js" />
            </TechIcons>
            <img src={PhotoGustavo} alt="Gustavo Dante" />
          </PhotoCard>
        </PhotoContainer>
      </HeroContainer>
    </section>
  )
}
