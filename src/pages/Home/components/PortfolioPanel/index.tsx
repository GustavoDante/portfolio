import { useContext } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { translations } from '../../translations/translations'
import {
  PortfolioPanelContainer,
  ProjectBody,
  ProjectCard,
  ProjectFooter,
  ProjectImageArea,
  Tag,
  TagsRow,
} from './styles'

type ProjectKey = 'watchgather' | 'sinthope' | 'vitarisx' | 'cinqfinance'

const projectVisuals: Record<
  ProjectKey,
  { gradient: string; images?: { mobile: string; desktop: string } }
> = {
  watchgather: {
    gradient: 'linear-gradient(135deg, #0a001a 0%, #1609a0 60%, #5C54BD 140%)',
    // images: { mobile: watchGatherResponsive, desktop: watchGather },
  },
  sinthope: {
    gradient: 'linear-gradient(135deg, #030117 0%, #100773 55%, #015F43 140%)',
  },
  vitarisx: {
    gradient: 'linear-gradient(135deg, #030117 0%, #373270 55%, #5C54BD 140%)',
  },
  cinqfinance: {
    gradient: 'linear-gradient(135deg, #030117 0%, #100773 55%, #73F2A8 140%)',
  },
}

const projectOrder: ProjectKey[] = [
  'sinthope',
  'cinqfinance',
  'vitarisx',
  'watchgather',
]

export function PortfolioPanel() {
  const { language } = useContext(LanguageContext)
  const proj = translations[language].projects

  return (
    <PortfolioPanelContainer>
      {projectOrder.map((key, index) => {
        const project = proj[key]
        const visuals = projectVisuals[key]

        return (
          <ProjectCard
            key={key}
            data-reveal
            data-reveal-delay={String(Math.min((index % 3) + 1, 5))}
          >
            <ProjectImageArea
              gradient={visuals.gradient}
              hasImage={!!visuals.images}
            >
              {visuals.images ? (
                <div className="image-pair">
                  <img
                    src={visuals.images.mobile}
                    alt={`${key} mobile preview`}
                  />
                  <img
                    src={visuals.images.desktop}
                    alt={`${key} desktop preview`}
                  />
                </div>
              ) : (
                <span className="gradient-label">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              )}
            </ProjectImageArea>

            <ProjectBody>
              <h3>
                {
                  {
                    watchgather: 'WatchGather',
                    sinthope: 'SINTHOSCPE',
                    vitarisx: 'VitarisX',
                    cinqfinance: 'CinQ Finance',
                  }[key]
                }
              </h3>
              <p>{project.description}</p>
              <TagsRow>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsRow>
            </ProjectBody>

            <ProjectFooter>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  {language === 'en' ? 'View project' : 'Ver projeto'}
                </a>
              ) : (
                <span>
                  {language === 'en' ? 'Private project' : 'Projeto privado'}
                </span>
              )}
            </ProjectFooter>
          </ProjectCard>
        )
      })}
    </PortfolioPanelContainer>
  )
}
