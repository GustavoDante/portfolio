import styled from 'styled-components'

export const TecnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;
  width: 75%;
  margin: 0 auto;
  background-color: ${(props) => props.theme['gray-900']};
  padding: 3rem;
  border-radius: 1rem;

  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(auto-fit, minmax(8, 1fr));
    padding: 2rem 0;
    width: 100%;
    grid-gap: 0.5rem;
  }

  @media screen and (max-width: 675px) {
    grid-template-columns: repeat(auto-fit, minmax(4, 1fr));
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 0;
    grid-gap: 0rem;
  }

  @media screen and (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const TechnologieWithOverlay = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  margin: 0.5rem auto;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 1rem;
  box-shadow: 0 0 5px ${(props) => props.theme['gray-700']};

  > img {
    width: 100%;
    height: auto;
    padding: 1.5rem;
  }

  & > div {
    width: 100%;
    height: 0px;
    border-radius: 1rem;
    box-shadow: 0 0 5px ${(props) => props.theme['gray-700']};
    padding: 1rem 2rem 1rem 4rem;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    background-color: ${(props) => props.theme['gray-800']};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    & > h3 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme['green-300']};
    }

    & > p {
      text-align: justify;
      visibility: hidden;
      & > span {
        color: ${(props) => props.theme['green-300']};
        text-align: center;
        display: block;
        margin-bottom: 0.5rem;
      }
    }

    @media screen and (max-width: 550px) {
      left: unset;
      padding: 4rem 1rem 2rem 1rem;
    }
  }

  &:hover {
    overflow: visible;
    & > div {
      z-index: 1;
      animation: size-transition 0.3s ease forwards;

      @media screen and (max-width: 1140px) {
        animation: size-transition-for-mobile 0.3s ease forwards;
      }

      & > p {
        animation: transition-text 0.1s ease forwards;
        animation-delay: 0.15s;
      }
    }
    & > img {
      z-index: 2;
    }
  }

  @keyframes size-transition {
    0% {
      visibility: hidden;
      width: 100%;
      height: 0px;
    }
    100% {
      visibility: visible;
      width: 25rem;
      height: auto;
    }
  }

  @keyframes size-transition-for-mobile {
    0% {
      visibility: hidden;
      width: 100%;
      height: 100%;
    }
    100% {
      visibility: visible;
      width: calc(100% * 2.5);
      height: auto;
    }
  }

  @keyframes transition-text {
    0% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
`
