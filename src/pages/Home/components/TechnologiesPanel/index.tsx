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

export function TechnologiesPanel() {
  const { language } = useContext(LanguageContext)

  return (
    <TecnologiesContainer>
      <TechnologieWithOverlay>
        <img src={reactIcon} alt="react icon" />
        <div>
          <h3>ReactJS</h3>
          <p>
            <span>
              {translations[language].technologies.reactjs.experience}
            </span>
            {translations[language].technologies.reactjs.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={phpIcon} alt="php icon" />
        <div>
          <h3>PHP</h3>
          <p>
            <span>{translations[language].technologies.php.experience}</span>
            {translations[language].technologies.php.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={nodeIcon} alt="node icon" />
        <div>
          <h3>NodeJs</h3>
          <p>
            <span>{translations[language].technologies.nodejs.experience}</span>
            {translations[language].technologies.nodejs.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={typescriptIcon} alt="typescript icon" />
        <div>
          <h3>TypeScript</h3>
          <p>
            <span>
              {translations[language].technologies.typescript.experience}
            </span>
            {translations[language].technologies.typescript.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={postgresqlIcon} alt="postgresql icon" />
        <div>
          <h3>PostgreSQL</h3>
          <p>
            <span>
              {translations[language].technologies.postgresql.experience}
            </span>
            {translations[language].technologies.postgresql.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={mysqlIcon} alt="mysql icon" />
        <div>
          <h3>MySQL</h3>
          <p>
            <span>{translations[language].technologies.mysql.experience}</span>
            {translations[language].technologies.mysql.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={laravelIcon} alt="laravel icon" />
        <div>
          <h3>Laravel</h3>
          <p>
            <span>
              {translations[language].technologies.laravel.experience}
            </span>
            {translations[language].technologies.laravel.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={nestIcon} alt="nest icon" />
        <div>
          <h3>NestJS</h3>
          <p>
            <span>{translations[language].technologies.nestjs.experience}</span>
            {translations[language].technologies.nestjs.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={nextIcon} alt="next icon" />
        <div>
          <h3>Next.js</h3>
          <p>
            <span>{translations[language].technologies.nextjs.experience}</span>
            {translations[language].technologies.nextjs.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={gitIcon} alt="git icon" />
        <div>
          <h3>Git</h3>
          <p>
            <span>{translations[language].technologies.git.experience}</span>
            {translations[language].technologies.git.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={htmlIcon} alt="html icon" />
        <div>
          <h3>HTML 5</h3>
          <p>
            <span>{translations[language].technologies.html5.experience}</span>
            {translations[language].technologies.html5.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={cssIcon} alt="css icon" />
        <div>
          <h3>CSS 3</h3>
          <p>
            <span>{translations[language].technologies.css3.experience}</span>
            {translations[language].technologies.css3.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={apiIcon} alt="api icon" />
        <div>
          <h3>REST APIs</h3>
          <p>
            <span>
              {translations[language].technologies.restapi.experience}
            </span>
            {translations[language].technologies.restapi.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={jqueryIcon} alt="jquery icon" />
        <div>
          <h3>jQuery</h3>
          <p>
            <span>{translations[language].technologies.jquery.experience}</span>
            {translations[language].technologies.jquery.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={googleCloudIcon} alt="google cloud icon" />
        <div>
          <h3>Google Cloud</h3>
          <p>
            <span>
              {translations[language].technologies.googlecloud.experience}
            </span>
            {translations[language].technologies.googlecloud.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={awsIcon} alt="aws icon" />
        <div>
          <h3>AWS</h3>
          <p>
            <span>{translations[language].technologies.aws.experience}</span>
            {translations[language].technologies.aws.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={styledComponentsIcon} alt="styled components icon" />
        <div>
          <h3>Styled Components</h3>
          <p>
            <span>
              {translations[language].technologies.styledcomponents.experience}
            </span>
            {translations[language].technologies.styledcomponents.description}
          </p>
        </div>
      </TechnologieWithOverlay>
      <TechnologieWithOverlay>
        <img src={dockerIcon} alt="docker icon" />
        <div>
          <h3>Docker</h3>
          <p>
            <span>{translations[language].technologies.docker.experience}</span>
            {translations[language].technologies.docker.description}
          </p>
        </div>
      </TechnologieWithOverlay>
    </TecnologiesContainer>
  )
}
