import reactIcon from '../../../../assets/icons/react-icon.svg'
import phpIcon from '../../../../assets/icons/php-icon.svg'
import nodeIcon from '../../../../assets/icons/node-icon.svg'
import typescriptIcon from '../../../../assets/icons/typescript-icon.svg'
import postgresqlIcon from '../../../../assets/icons/postgresql-icon.svg'
import mysqlIcon from '../../../../assets/icons/mysql-icon.svg'
import laravelIcon from '../../../../assets/icons/laravel-icon.svg'
import nestIcon from '../../../../assets/icons/nest-icon.svg'
import nextIcon from '../../../../assets/icons/next-icon.svg'
import gitIcon from '../../../../assets/icons/git-icon.svg'
import htmlIcon from '../../../../assets/icons/html-icon.svg'
import cssIcon from '../../../../assets/icons/css-icon.svg'
import apiIcon from '../../../../assets/icons/api-icon.svg'
import jqueryIcon from '../../../../assets/icons/jquery-icon.svg'
import googleCloudIcon from '../../../../assets/icons/google-icon.svg'
import awsIcon from '../../../../assets/icons/aws-icon.svg'
import styledComponentsIcon from '../../../../assets/icons/styled-components-icon.svg'
import dockerIcon from '../../../../assets/icons/docker-icon.svg'
import { TechnologieWithOverlay, TecnologiesContainer } from './styles'
import { useContext } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { translations } from '../../translations/translations'

// Array of technology data
type TechnologyKey =
  | 'reactjs'
  | 'php'
  | 'nodejs'
  | 'typescript'
  | 'postgresql'
  | 'mysql'
  | 'laravel'
  | 'nestjs'
  | 'nextjs'
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

export function TechnologiesPanel() {
  const { language } = useContext(LanguageContext)

  const technologies: Technology[] = [
    { name: 'ReactJS', icon: reactIcon, key: 'reactjs' },
    { name: 'PHP', icon: phpIcon, key: 'php' },
    { name: 'NodeJs', icon: nodeIcon, key: 'nodejs' },
    { name: 'TypeScript', icon: typescriptIcon, key: 'typescript' },
    { name: 'PostgreSQL', icon: postgresqlIcon, key: 'postgresql' },
    { name: 'MySQL', icon: mysqlIcon, key: 'mysql' },
    { name: 'Laravel', icon: laravelIcon, key: 'laravel' },
    { name: 'NestJS', icon: nestIcon, key: 'nestjs' },
    { name: 'Next.js', icon: nextIcon, key: 'nextjs' },
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

  return (
    <TecnologiesContainer>
      {technologies.map((tech) => (
        <TechnologieWithOverlay key={tech.key}>
          <img src={tech.icon} alt={`${tech.name.toLowerCase()} icon`} />
          <div>
            <h3>{tech.name}</h3>
            <p>
              <span>
                {translations[language].technologies[tech.key].experience}
              </span>
              {translations[language].technologies[tech.key].description}
            </p>
          </div>
        </TechnologieWithOverlay>
      ))}
    </TecnologiesContainer>
  )
}
