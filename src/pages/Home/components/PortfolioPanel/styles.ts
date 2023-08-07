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
  width: 40%;
  height: auto;
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

    transition: all 0.5s ease;

    & > div:first-child {
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
    :hover {
      & > div:last-child {
        visibility: visible;
      }
      & > div:first-child {
        filter: blur(2px) brightness(0.2);
      }
      background-color: ${(props) => props.theme['gray-900']};
    }
  }

  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1275px) {
    width: 100%;
  }
`

export const BackDrop = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  padding: 1rem 2rem;

  & > h3 {
    color: ${(props) => props.theme['green-300']};
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  & > p {
    color: ${(props) => props.theme.white};
    font-size: 1rem;
  }
`
