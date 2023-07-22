import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: block;
  width: 100%;
  height: 42rem;

  & > div {
    position: absolute;
    left: 0;
    padding: 0 12rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    height: 42rem;
    z-index: 1;
    overflow: hidden;

    & > img {
      min-width: 80rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      object-fit: cover;
      z-index: -1;
    }

    @media screen and (max-width: 1050px) {
      padding: 0 4rem;
    }

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr 1fr;
      height: 25rem;
      padding: 0 4rem;

      & > div:not(:first-child) {
        position: absolute;
        bottom: 0;
        right: 0rem;
        padding-right: 4rem;
      }
    }
    @media screen and (max-width: 675px) {
      grid-template-columns: 1fr;
      height: 35rem;

      & > div:not(:first-child) {
        padding: 0 1rem 0 1rem;
        width: 100%;

        & > div {
          margin: 0 auto;
        }
      }
    }

    @media screen and (max-width: 400px) {
      height: 31.5rem;
      padding: 0;
    }
  }

  @media screen and (max-width: 850px) {
    height: 25rem;
  }

  @media screen and (max-width: 675px) {
    height: 35rem;
  }

  @media screen and (max-width: 400px) {
    height: 31.5rem;
  }
`

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  width: 100%;

  & > strong {
    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme.black};
    align-self: flex-start;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 850px) {
    justify-content: flex-start;
    margin-top: 5rem;
  }

  @media screen and (max-width: 675px) {
    align-items: center;

    & > strong {
      align-self: center;
    }

    & > span {
      text-align: center;
    }
  }
`

export const PhotoContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;

  & > div {
    position: relative;
    width: 30rem;
    height: 28rem;

    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);

    border: 1px solid ${(props) => props.theme['gray-300']};
    border-bottom: 0;
    border-radius: 1.5rem 1.5rem 0 0;

    & > div {
      position: absolute;
      display: flex;
      top: 2rem;
      left: 2rem;
      gap: 1rem;

      & > img {
        width: 2rem;
        filter: brightness(0) invert(1);

        animation: pulse 1s ease-in-out infinite;

        @media screen and (max-width: 400px) {
          width: 1.3rem;
        }
      }
    }

    & > img {
      position: absolute;
      bottom: 0;
      width: 110%;
      object-fit: cover;
    }

    @media screen and (max-width: 850px) {
      width: 18rem;
      height: 17rem;
    }

    @media screen and (max-width: 400px) {
      width: 15rem;
      height: 14rem;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.5rem);
    }
  }
`

export const ContactButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  & > a {
    text-decoration: none;
    padding: 0.3rem 0.6rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme.white};
    font-weight: 600;
    font-size: 0.8rem;
    border: 1px solid ${(props) => props.theme.white};

    :first-child {
      background: ${(props) => props.theme['green-300']};
      border: 0;
      color: ${(props) => props.theme.black};
    }
  }
`
