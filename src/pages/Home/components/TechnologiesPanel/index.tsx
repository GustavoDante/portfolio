import React, { useContext, useState } from 'react'
import apiIcon from '../../../../assets/icons/api-icon.svg'
import authjsIcon from '../../../../assets/icons/authjs-icon.svg'
import awsIcon from '../../../../assets/icons/aws-icon.svg'
import cssIcon from '../../../../assets/icons/css-icon.svg'
import dockerIcon from '../../../../assets/icons/docker-icon.svg'
import gitIcon from '../../../../assets/icons/git-icon.svg'
import googleCloudIcon from '../../../../assets/icons/google-icon.svg'
import htmlIcon from '../../../../assets/icons/html-icon.svg'
import jqueryIcon from '../../../../assets/icons/jquery-icon.svg'
import laravelIcon from '../../../../assets/icons/laravel-icon.svg'
import mysqlIcon from '../../../../assets/icons/mysql-icon.svg'
import nestIcon from '../../../../assets/icons/nest-icon.svg'
import nextIcon from '../../../../assets/icons/next-icon.svg'
import nodeIcon from '../../../../assets/icons/node-icon.svg'
import postgresqlIcon from '../../../../assets/icons/postgresql-icon.svg'
import prismaIcon from '../../../../assets/icons/prisma-icon.svg'
import reactIcon from '../../../../assets/icons/react-icon.svg'
import shadcnIcon from '../../../../assets/icons/shadcn-icon.svg'
import styledComponentsIcon from '../../../../assets/icons/styled-components-icon.svg'
import tailwindIcon from '../../../../assets/icons/tailwind-icon.svg'
import typescriptIcon from '../../../../assets/icons/typescript-icon.svg'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { calculateExperience } from '../../../../utils/calculateExperience'
import {
  technologyStartDates,
  translations,
} from '../../translations/translations'
import {
  CarouselDots,
  Dot,
  TechCarouselItem,
  TechCarouselSlide,
  TechCarouselTrack,
  TechCarouselWrapper,
  TechnologieWithOverlay,
  TecnologiesContainer,
} from './styles'

const reactemailIcon = reactIcon

type TechnologyKey =
  | 'reactjs'
  | 'tailwindcss'
  | 'nodejs'
  | 'typescript'
  | 'postgresql'
  | 'mysql'
  | 'laravel'
  | 'nestjs'
  | 'nextjs'
  | 'shadcn'
  | 'authjs'
  | 'prisma'
  | 'reactemail'
  | 'git'
  | 'html5'
  | 'css3'
  | 'restapi'
  | 'jquery'
  | 'googlecloud'
  | 'aws'
  | 'styledcomponents'
  | 'docker'

type Technology = {
  name: string
  icon: string
  key: TechnologyKey
}

const ITEMS_PER_SLIDE = 6

export function TechnologiesPanel() {
  const { language } = useContext(LanguageContext)
  const [activeSlide, setActiveSlide] = useState(0)

  const technologies: Technology[] = [
    { name: 'ReactJS', icon: reactIcon, key: 'reactjs' },
    { name: 'Tailwind CSS', icon: tailwindIcon, key: 'tailwindcss' },
    { name: 'NodeJs', icon: nodeIcon, key: 'nodejs' },
    { name: 'TypeScript', icon: typescriptIcon, key: 'typescript' },
    { name: 'PostgreSQL', icon: postgresqlIcon, key: 'postgresql' },
    { name: 'MySQL', icon: mysqlIcon, key: 'mysql' },
    { name: 'Laravel', icon: laravelIcon, key: 'laravel' },
    { name: 'NestJS', icon: nestIcon, key: 'nestjs' },
    { name: 'Next.js', icon: nextIcon, key: 'nextjs' },
    { name: 'Shadcn/UI', icon: shadcnIcon, key: 'shadcn' },
    { name: 'Auth.js', icon: authjsIcon, key: 'authjs' },
    { name: 'Prisma', icon: prismaIcon, key: 'prisma' },
    { name: 'React Email', icon: reactemailIcon, key: 'reactemail' },
    { name: 'Git', icon: gitIcon, key: 'git' },
    { name: 'HTML 5', icon: htmlIcon, key: 'html5' },
    { name: 'CSS 3', icon: cssIcon, key: 'css3' },
    { name: 'REST APIs', icon: apiIcon, key: 'restapi' },
    { name: 'jQuery', icon: jqueryIcon, key: 'jquery' },
    { name: 'Google Cloud', icon: googleCloudIcon, key: 'googlecloud' },
    { name: 'AWS', icon: awsIcon, key: 'aws' },
    {
      name: 'Styled Components',
      icon: styledComponentsIcon,
      key: 'styledcomponents',
    },
    { name: 'Docker', icon: dockerIcon, key: 'docker' },
  ]

  // Group into slides for the mobile carousel
  const slides: Technology[][] = []
  for (let i = 0; i < technologies.length; i += ITEMS_PER_SLIDE) {
    slides.push(technologies.slice(i, i + ITEMS_PER_SLIDE))
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const slideWidth = el.scrollWidth / slides.length
    const current = Math.round(el.scrollLeft / slideWidth)
    setActiveSlide(current)
  }

  const goToSlide = (index: number) => {
    const track = document.getElementById('tech-carousel-track')
    if (!track) return
    const slideWidth = track.scrollWidth / slides.length
    track.scrollTo({ left: slideWidth * index, behavior: 'smooth' })
    setActiveSlide(index)
  }

  return (
    <>
      {/* Desktop grid */}
      <TecnologiesContainer data-reveal>
        {technologies.map((tech) => (
          <TechnologieWithOverlay key={tech.key}>
            <img src={tech.icon} alt={`${tech.name.toLowerCase()} icon`} />
            <div>
              <h3>{tech.name}</h3>
              <p>
                <span>
                  {calculateExperience(
                    technologyStartDates[tech.key],
                    language,
                  )}
                </span>
                {translations[language].technologies[tech.key].description}
              </p>
            </div>
          </TechnologieWithOverlay>
        ))}
      </TecnologiesContainer>

      {/* Mobile carousel */}
      <TechCarouselWrapper>
        <TechCarouselTrack id="tech-carousel-track" onScroll={handleScroll}>
          {slides.map((slide, slideIndex) => (
            <TechCarouselSlide key={slideIndex}>
              {slide.map((tech) => (
                <TechCarouselItem key={tech.key}>
                  <img src={tech.icon} alt={`${tech.name} icon`} />
                  <span>{tech.name}</span>
                  <small>
                    {calculateExperience(
                      technologyStartDates[tech.key],
                      language,
                    )}
                  </small>
                </TechCarouselItem>
              ))}
            </TechCarouselSlide>
          ))}
        </TechCarouselTrack>
        <CarouselDots>
          {slides.map((_, i) => (
            <Dot
              key={i}
              active={i === activeSlide}
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </CarouselDots>
      </TechCarouselWrapper>
    </>
  )
}
