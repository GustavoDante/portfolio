import { useContext } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { formatTechnologyYears } from '../../../../utils/formatTechnologyYears'
import { SectionTitle } from '../../styles'
import {
  technologyStartDates,
  translations,
} from '../../translations/translations'
import {
  AboutText,
  StackFootnote,
  StackGrid,
  StackGroupLabel,
  StackItem,
  StackList,
} from './styles'

type GroupKey = 'frontend' | 'backend' | 'data' | 'cloud'

interface StackEntry {
  name: string
  keys: string[]
}

interface StackGroup {
  key: GroupKey
  entries: StackEntry[]
}

const earliestStartDate = (keys: string[]) =>
  keys.map((key) => technologyStartDates[key]).sort()[0]

export function TechnologiesPanel() {
  const { language } = useContext(LanguageContext)
  const text = translations[language]['about-me']

  const groups: StackGroup[] = [
    {
      key: 'frontend',
      entries: [
        { name: 'React', keys: ['reactjs'] },
        { name: 'TypeScript', keys: ['typescript'] },
        { name: 'Next.js', keys: ['nextjs'] },
        { name: 'Tailwind CSS', keys: ['tailwindcss'] },
        { name: 'Styled Components', keys: ['styledcomponents'] },
        { name: text.htmlAndCss, keys: ['html5', 'css3'] },
      ],
    },
    {
      key: 'backend',
      entries: [
        { name: 'Node.js', keys: ['nodejs'] },
        { name: 'NestJS', keys: ['nestjs'] },
        { name: 'REST', keys: ['restapi'] },
        { name: 'Laravel', keys: ['laravel'] },
        { name: 'Java', keys: ['java'] },
        { name: 'Kotlin', keys: ['kotlin'] },
        { name: 'Contract First', keys: ['contractfirst'] },
      ],
    },
    {
      key: 'data',
      entries: [
        { name: 'PostgreSQL', keys: ['postgresql'] },
        { name: 'MySQL', keys: ['mysql'] },
        { name: 'Prisma', keys: ['prisma'] },
      ],
    },
    {
      key: 'cloud',
      entries: [
        { name: 'Docker', keys: ['docker'] },
        { name: 'AWS', keys: ['aws'] },
        { name: 'Google Cloud', keys: ['googlecloud'] },
        { name: 'Git', keys: ['git'] },
      ],
    },
  ]

  return (
    <>
      <SectionTitle>{text.heading}</SectionTitle>
      <AboutText>{text.text}</AboutText>

      <StackGrid>
        {groups.map((group) => (
          <div key={group.key}>
            <StackGroupLabel>{text.groups[group.key]}</StackGroupLabel>
            <StackList>
              {group.entries.map((entry) => (
                <StackItem key={entry.name}>
                  <span>{entry.name}</span>
                  <span>
                    {formatTechnologyYears(earliestStartDate(entry.keys))}
                  </span>
                </StackItem>
              ))}
            </StackList>
          </div>
        ))}
      </StackGrid>

      <StackFootnote>{text.footnote}</StackFootnote>
    </>
  )
}
