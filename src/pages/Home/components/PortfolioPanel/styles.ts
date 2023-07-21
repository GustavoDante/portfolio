import styled from 'styled-components'

export const PortfolioPanelContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1275px) {
    flex-direction: column;
  }

  @media screen and (max-width: 840px) {
    display: block;
    width: 100%;
  }
`

export const ProjectContainer = styled.div`
  width: 50%;
  height: 25rem;
  margin: 2rem 0;
  display: flex;
  justify-content: baseline;

  transition: transform 0.5s ease;

  & > a {
    display: flex;
    position: relative;
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 1rem;

    height: 100%;
    width: 100%;

    transition: height 0.5s ease;

    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & > img {
        object-fit: contain;
        border-radius: 1rem;

        :first-child {
          width: 30%;
          max-height: 100%;
        }

        :last-child {
          width: 70%;
          max-height: 100%;
          margin-right: 0.2rem;
        }
      }
      @media screen and (max-width: 510px) {
        flex-direction: column;
      }
    }
  }

  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1275px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    height: 22rem;
  }
  @media screen and (max-width: 370px) {
    height: 18rem;
  }
`

export const BackDrop = styled.div`
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
`
