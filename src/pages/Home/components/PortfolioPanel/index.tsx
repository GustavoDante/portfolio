import { useState } from 'react'
import project1 from '../../../../assets/projects/project1.png'
import { PortfolioPanelContainer, ProjectContainer } from './styles'

export function PortfolioPanel() {
  const [heightProject1, setHeightProject1] = useState('100%')
  const [heightProject2, setHeightProject2] = useState('100%')

  const [heightProject3, setHeightProject3] = useState('100%')
  const [heightProject4, setHeightProject4] = useState('100%')

  const [heightProject5, setHeightProject5] = useState('100%')
  const [heightProject6, setHeightProject6] = useState('100%')

  const handleMouseUpEnter = () => {
    setHeightProject1('125%')
    setHeightProject2('75%')
  }

  const handleMouseUpLeave = () => {
    setHeightProject1('100%')
    setHeightProject2('100%')
  }

  const handleMouseDownEnter = () => {
    setHeightProject1('75%')
    setHeightProject2('125%')
  }

  const handleMouseDownLeave = () => {
    setHeightProject1('100%')
    setHeightProject2('100%')
  }

  const handleMouseUpEnter2 = () => {
    setHeightProject3('125%')
    setHeightProject4('75%')
  }

  const handleMouseUpLeave2 = () => {
    setHeightProject3('100%')
    setHeightProject4('100%')
  }

  const handleMouseDownEnter2 = () => {
    setHeightProject3('75%')
    setHeightProject4('125%')
  }

  const handleMouseDownLeave2 = () => {
    setHeightProject3('100%')
    setHeightProject4('100%')
  }

  const handleMouseUpEnter3 = () => {
    setHeightProject5('125%')
    setHeightProject6('75%')
  }

  const handleMouseUpLeave3 = () => {
    setHeightProject5('100%')
    setHeightProject6('100%')
  }

  const handleMouseDownEnter3 = () => {
    setHeightProject5('75%')
    setHeightProject6('125%')
  }

  const handleMouseDownLeave3 = () => {
    setHeightProject5('100%')
    setHeightProject6('100%')
  }

  return (
    <PortfolioPanelContainer>
      <div>
        <ProjectContainer
          height={heightProject1}
          onMouseEnter={handleMouseUpEnter}
          onMouseLeave={handleMouseUpLeave}
        >
          <a href="#">
            <img src={project1} alt="project 1" />
            <div>
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </a>
        </ProjectContainer>
        <ProjectContainer
          height={heightProject2}
          onMouseEnter={handleMouseDownEnter}
          onMouseLeave={handleMouseDownLeave}
        >
          <a href="#">
            <img src={project1} alt="project 1" />
            <div>
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </a>
        </ProjectContainer>
      </div>
      <div>
        <ProjectContainer
          height={heightProject3}
          onMouseEnter={handleMouseUpEnter2}
          onMouseLeave={handleMouseUpLeave2}
        >
          <a href="#">
            <img src={project1} alt="project 1" />
            <div>
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </a>
        </ProjectContainer>
        <ProjectContainer
          height={heightProject4}
          onMouseEnter={handleMouseDownEnter2}
          onMouseLeave={handleMouseDownLeave2}
        >
          <a href="#">
            <img src={project1} alt="project 1" />
            <div>
              <h3>Project 4</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </a>
        </ProjectContainer>
      </div>
      <div>
        <ProjectContainer
          height={heightProject5}
          onMouseEnter={handleMouseUpEnter3}
          onMouseLeave={handleMouseUpLeave3}
        >
          <a href="#">
            <img src={project1} alt="project 1" />
            <div>
              <h3>Project 5</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </a>
        </ProjectContainer>
        <ProjectContainer
          height={heightProject6}
          onMouseEnter={handleMouseDownEnter3}
          onMouseLeave={handleMouseDownLeave3}
        >
          <a href="#">
            <img src={project1} alt="project 1" />
            <div>
              <h3>Project 6</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </a>
        </ProjectContainer>
      </div>
    </PortfolioPanelContainer>
  )
}
