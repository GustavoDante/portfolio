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
    margin: 2rem 0 2rem 0;

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
    margin: 2rem 0 2rem 0;
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

export const PortfolioContainer = styled.div`
  & > h1 {
    position: flex;
    display: flex;
    margin: 2rem 0 2rem 0;
    align-items: center;
    color: ${(props) => props.theme.black};

    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      z-index: -1;
      width: 24rem;
      height: 3rem;
      background-color: ${(props) => props.theme['green-300']};
      border-radius: 0 1rem 1rem 0;

      @media screen and (max-width: 1050px) {
        width: 19rem;
      }

      @media screen and (max-width: 675px) {
        width: 18rem;
      }

      @media screen and (max-width: 400px) {
        width: 100%;
      }
    }
  }
`

export const FeedbacksContainer = styled.div`
  & > h1 {
    position: flex;
    display: flex;
    margin: 2rem 0 4rem 0;
    align-items: center;
    color: ${(props) => props.theme.black};

    ::before {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      z-index: -1;
      width: calc(100% - 5rem);
      height: 3rem;
      background-color: ${(props) => props.theme['green-300']};
      border-radius: 1rem 0 0 1rem;

      @media screen and (max-width: 1050px) {
        width: calc(100% - 3rem);
      }

      @media screen and (max-width: 675px) {
        width: calc(100% - 2rem);
      }
    }
  }
`

interface ScrollToTopButtonProps {
  show: boolean
}
export const ScrollToTopButton = styled.button<ScrollToTopButtonProps>`
  display: flex;
  position: fixed;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  bottom: 20px;
  right: 20px;

  width: 50px;
  height: 50px;

  background-color: ${(props) => props.theme['green-300']};

  border-radius: 50%;
  border: none;
  cursor: pointer;

  justify-content: center;
  align-items: center;

  transition: transform 0.5s ease;

  :hover {
    transform: scale(1.1);
  }

  & > img {
    width: 80%;
  }
`
