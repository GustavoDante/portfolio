import styled from 'styled-components'

export const PortfolioPanelContainer = styled.div`
  display: flex;
  justify-content: center;

  > div {
    display: block;
    width: 25rem;

    height: auto;
    justify-content: center;
    margin: 1rem;

    > div + div {
      align-items: end;
    }
  }
`

interface ProjectContainerProps {
  height: string
}

export const ProjectContainer = styled.div<ProjectContainerProps>`
  width: 25rem;
  height: 25rem;
  margin: 2rem 0;
  display: flex;
  justify-content: baseline;

  & > a {
    display: block;
    position: relative;
    height: ${(props) => props.height};
    width: 100%;

    transition: height 0.5s ease;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
      box-shadow: 0 0 5px ${(props) => props.theme['gray-700']};
    }

    & > div {
      visibility: hidden;
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 1rem 2rem;
      text-align: center;

      & > h3 {
        color: ${(props) => props.theme['gray-100']};
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
      }

      & > p {
        color: ${(props) => props.theme['gray-300']};
        font-size: 1rem;
      }
    }

    :hover {
      & > div {
        visibility: visible;
      }
      & > img {
        filter: brightness(0.3);
      }
    }
  }
`
