import calcbet from '../../../../assets/projects/calcbet.png'
import calcbetResponsive from '../../../../assets/projects/calcbet-responsive.png'

import watchGather from '../../../../assets/projects/watchgather.png'
import watchGatherResponsive from '../../../../assets/projects/watchgather-responsive.png'

import { BackDrop, PortfolioPanelContainer, ProjectContainer } from './styles'
import { useContext } from 'react'
import { LanguageContext } from '../../../../contexts/LanguageContext'
import { translations } from '../../translations/translations'

export function PortfolioPanel() {
  const { language } = useContext(LanguageContext)
  return (
    <PortfolioPanelContainer>
      <ProjectContainer>
        <a
          href="https://calcbet.gustavodante.com"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img
              src={calcbetResponsive}
              alt="Imagem ilustrando a plataforma em um smartphone"
            />
            <img src={calcbet} alt="Imagem ilustrando a plataforma" />
          </div>
          <BackDrop>
            <h3>CalcBet</h3>
            <p>{translations[language].projects.calcbet.description}</p>
          </BackDrop>
        </a>
      </ProjectContainer>
      <ProjectContainer>
        <a
          href="https://watchgather.gustavodante.com"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img
              src={watchGatherResponsive}
              alt="Imagem ilustrando a plataforma em um smartphone"
            />
            <img src={watchGather} alt="Imagem ilustrando a plataforma" />
          </div>
          <BackDrop>
            <h3>WatchGather</h3>
            <p>{translations[language].projects.watchgather.description}</p>
          </BackDrop>
        </a>
      </ProjectContainer>
    </PortfolioPanelContainer>
  )
}
