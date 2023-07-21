import calcbet from '../../../../assets/projects/calcbet.png'
import calcbetResponsive from '../../../../assets/projects/calcbet-responsive.png'

import watchGather from '../../../../assets/projects/watchgather.png'
import watchGatherResponsive from '../../../../assets/projects/watchgather-responsive.png'

import { BackDrop, PortfolioPanelContainer, ProjectContainer } from './styles'

export function PortfolioPanel() {
  return (
    <PortfolioPanelContainer>
      <ProjectContainer>
        <a
          href="https://calcbet.gustavodante.com"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img src={calcbetResponsive} alt="project 1" />
            <img src={calcbet} alt="project 1" />
          </div>
          <BackDrop>
            <h3>CalcBet</h3>
            <p>
              Projeto desenvolvido para o cálculo e registro de apostas
              esportivas. Utilizei ReactJS, TypeScript, integração com o
              Firebase, Styled Components e entre outros.
            </p>
          </BackDrop>
        </a>
      </ProjectContainer>
      <ProjectContainer>
        <a href="#">
          <div>
            <img src={watchGatherResponsive} alt="project 1" />
            <img src={watchGather} alt="project 1" />
          </div>
          <BackDrop>
            <h3>WatchGather</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </BackDrop>
        </a>
      </ProjectContainer>
    </PortfolioPanelContainer>
  )
}
