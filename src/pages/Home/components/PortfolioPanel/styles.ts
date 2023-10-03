import styled from 'styled-components'

export const PortfolioPanelContainer = styled.div`
  /* display: flex;
  justify-content: center;
  gap: 2rem; */

  @media screen and (max-width: 1275px) {
    flex-direction: column;
  }

  @media screen and (max-width: 840px) {
    display: block;
    width: 100%;
  }
`

export const ProjectContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 2rem 0;
  display: flex;
  justify-content: baseline;

  transition: transform 0.5s ease;

  & > a {
    display: flex;
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 1rem;

    height: 100%;
    width: 100%;

    transition: all 0.5s ease;

    & > div:first-child {
      width: 40%;
      padding: 1rem;
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
  @media screen and (max-width: 1024px) {
    & > a {
      flex-direction: column;
      height: 100%;
      width: 100%;

      & > div:first-child {
        width: 100%;
        height: 40%;
      }
    }
  }
`

export const BackDrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  width: 60%;
  padding: 1rem 2rem;

  & > h3 {
    color: ${(props) => props.theme['green-300']};
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  & > p {
    color: ${(props) => props.theme.white};
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: justify;
    margin-top: 2rem;
  }
`
