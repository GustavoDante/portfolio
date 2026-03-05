import styled from 'styled-components'

// ── Desktop grid (hidden on mobile) ─────────────────────────────────────────
export const TecnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.theme['glass-strong']};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme['glass-border']};
  padding: 3rem;
  border-radius: 1.25rem;

  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    padding: 2rem 1rem;
    width: 100%;
    grid-gap: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    display: none;
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
  background: ${(props) => props.theme['glass-strong']};
  border: 1px solid ${(props) => props.theme['glass-border']};
  border-radius: 1rem;
  transition: border-color 0.2s ease;

  > img {
    width: 100%;
    height: auto;
    padding: 1.5rem;
    transition: filter 0.2s ease;
  }

  & > div {
    width: 100%;
    height: 0px;
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    padding: 1rem 2rem 1rem 4rem;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    background: ${(props) => props.theme['gray-800']}ee;
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 1px solid ${(props) => props.theme['glass-border']};

    & > h3 {
      text-align: center;
      font-size: 1.4rem;
      margin-bottom: 0.75rem;
      color: ${(props) => props.theme['green-300']};
    }

    & > p {
      text-align: justify;
      visibility: hidden;
      font-size: 0.88rem;
      line-height: 1.6;

      & > span {
        color: ${(props) => props.theme['green-300']};
        text-align: center;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.03em;
        display: block;
        margin-bottom: 0.6rem;
      }
    }

    @media screen and (max-width: 550px) {
      left: unset;
      padding: 4rem 1rem 2rem 1rem;
    }
  }

  &:hover {
    overflow: visible;
    border-color: ${(props) => props.theme['green-300']}44;

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

// ── Mobile carousel (hidden on desktop) ─────────────────────────────────────
export const TechCarouselWrapper = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
  }
`

export const TechCarouselTrack = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  gap: 0.75rem;
  padding: 0.5rem 0 1.25rem;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TechCarouselSlide = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  padding: 0 0.25rem;
`

export const TechCarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme['glass-strong']};
  border: 1px solid ${(props) => props.theme['glass-border']};
  border-radius: 1rem;
  padding: 1rem 0.5rem 0.75rem;

  > img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    padding: 0.25rem;
  }

  > span {
    font-size: 0.68rem;
    color: ${(props) => props.theme['gray-100']};
    text-align: center;
    line-height: 1.2;
    font-weight: 500;
  }

  > small {
    font-size: 0.62rem;
    color: ${(props) => props.theme['green-300']};
    text-align: center;
    line-height: 1.2;
  }
`

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
`

export const Dot = styled.button<{ active: boolean }>`
  width: ${(props) => (props.active ? '1.5rem' : '0.4rem')};
  height: 0.4rem;
  border-radius: 2rem;
  border: none;
  background: ${(props) =>
    props.active ? props.theme['green-300'] : props.theme['gray-600']};
  transition:
    width 0.3s ease,
    background 0.3s ease;
  cursor: pointer;
  padding: 0;
`
