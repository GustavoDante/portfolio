import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: block;
  width: 100%;
  height: 45rem;

  & > div {
    position: absolute;
    left: 0;
    padding: 0 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    height: 45rem;
    background-image: url('/src/assets/backgrounds/headerr-background.png');
    background-size: 300vw;
    background-position: center;
    background-repeat: no-repeat;
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
      }
    }

    & > img {
      position: absolute;
      bottom: 0;
      width: 110%;
      object-fit: cover;
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
    font-size: 0%.8rem;
    border: 1px solid ${(props) => props.theme.white};

    :first-child {
      background: ${(props) => props.theme['green-300']};
      border: 0;
      color: ${(props) => props.theme.black};
    }
  }
`
