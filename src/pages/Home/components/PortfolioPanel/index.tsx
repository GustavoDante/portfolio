import { useContext, useState } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { QuietButton, SectionTitle, TextLink } from '../../styles'
import { translations } from '../../translations/translations'
import { type ProjectCategory, projects } from './projectsData'
import {
  BrowserBar,
  BrowserFrame,
  FilterButton,
  FiltersRow,
  Layout,
  LinksRow,
  PhoneFrame,
  ProjectInfo,
  ProjectList,
  ProjectRow,
  ProjectScroller,
  ProjectTab,
  QuoteRow,
  Screens,
  Showcase,
} from './styles'

type Filter = 'all' | ProjectCategory

const filterOrder: Filter[] = ['all', 'platform', 'site']

const WHATSAPP_URL = 'https://wa.me/5581991642089'

const matchesFilter = (category: ProjectCategory, filter: Filter) =>
  filter === 'all' || category === filter

export function PortfolioPanel() {
  const { language } = useContext(LanguageContext)
  const text = translations[language].projects
  const [filter, setFilter] = useState<Filter>('all')
  const [selectedKey, setSelectedKey] = useState(projects[0].key)

  const visible = projects.filter((project) =>
    matchesFilter(project.category, filter),
  )
  const selected =
    visible.find((project) => project.key === selectedKey) ?? visible[0]
  const item = text.items[selected.key]
  const host = selected.links[0].url.replace(/^https?:\/\//, '')

  return (
    <>
      <SectionTitle>{text.heading}</SectionTitle>

      <FiltersRow role="group" aria-label={text.filterGroup}>
        {filterOrder.map((value) => (
          <FilterButton
            key={value}
            type="button"
            active={filter === value}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {text.filters[value]}
            <span>
              {projects.filter((p) => matchesFilter(p.category, value)).length}
            </span>
          </FilterButton>
        ))}
      </FiltersRow>

      <ProjectScroller role="group" aria-label={text.pickerGroup}>
        {visible.map((project) => (
          <ProjectTab
            key={project.key}
            type="button"
            active={project.key === selected.key}
            aria-pressed={project.key === selected.key}
            onClick={() => setSelectedKey(project.key)}
          >
            {text.items[project.key].name}
          </ProjectTab>
        ))}
      </ProjectScroller>

      <Layout>
        <ProjectList>
          {visible.map((project) => (
            <li key={project.key}>
              <ProjectRow
                type="button"
                active={project.key === selected.key}
                aria-pressed={project.key === selected.key}
                onClick={() => setSelectedKey(project.key)}
              >
                <span className="marker" aria-hidden="true">
                  →
                </span>
                <span className="name">{text.items[project.key].name}</span>
                <span className="type">{text.items[project.key].type}</span>
              </ProjectRow>
            </li>
          ))}
        </ProjectList>

        <Showcase key={selected.key}>
          <Screens>
            <BrowserFrame>
              <BrowserBar>{host}</BrowserBar>
              <img
                src={selected.desktop}
                alt={text.desktopPreview}
                loading="lazy"
              />
            </BrowserFrame>
            <PhoneFrame>
              <img
                src={selected.mobile}
                alt={text.mobilePreview}
                loading="lazy"
              />
            </PhoneFrame>
          </Screens>

          <ProjectInfo>
            <span className="type">{item.type}</span>
            <h3>{item.name}</h3>
            <p className="description">{item.description}</p>
            <p className="stack">{selected.tags.join('  ·  ')}</p>
            <LinksRow>
              {selected.links.map((link) => (
                <TextLink
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} ↗
                </TextLink>
              ))}
            </LinksRow>
          </ProjectInfo>
        </Showcase>
      </Layout>

      <QuoteRow>
        <p>{text.ctaText}</p>
        <QuietButton href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          {text.ctaButton} <span aria-hidden="true">→</span>
        </QuietButton>
      </QuoteRow>
    </>
  )
}
