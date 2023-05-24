import styled from 'styled-components'

export const HomeContainer = styled.div`
  > header + div,
  > div + div {
    margin-top: 3rem;
  }
`

export const AboutMeContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    margin: 2rem 0 1rem 0;

    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 6rem;
      height: 0.1rem;
      background-color: ${(props) => props.theme['green-300']};

      @media screen and (max-width: 1050px) {
        width: 3rem;
      }

      @media screen and (max-width: 675px) {
        width: 2rem;
      }
    }
    ::after {
      content: '';
      display: block;
      position: absolute;
      left: 6rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme['green-300']};

      @media screen and (max-width: 1050px) {
        left: 3rem;
      }

      @media screen and (max-width: 675px) {
        left: 2rem;
      }
    }
  }

  & > p {
    margin: 1rem 0;
  }
`

export const SkillsContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    margin: 2rem 0 1rem 0;
    overflow: hidden;

    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 23rem;
      width: calc(100% - 23rem);
      height: 0.1rem;
      background-color: ${(props) => props.theme['green-300']};

      @media screen and (max-width: 1050px) {
        left: 18rem;
        width: calc(100% - 18rem);
      }

      @media screen and (max-width: 675px) {
        left: 17rem;
        width: calc(100% - 17rem);
      }
    }
    ::after {
      content: '';
      display: block;
      position: absolute;
      left: 23rem;

      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme['green-300']};

      @media screen and (max-width: 1050px) {
        left: 18rem;
      }

      @media screen and (max-width: 675px) {
        left: 17rem;
      }
    }
  }
`
