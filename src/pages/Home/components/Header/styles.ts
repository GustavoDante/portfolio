import styled, { keyframes } from 'styled-components'
import {
  fadeUpEntrance,
  mobileBreakpoint,
  monoLabel,
  TextLink,
} from '../../styles'

const pulse = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`

export const HeroContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 88px 32px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 56px 64px;

  @media ${mobileBreakpoint} {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 40px;
    padding: 48px 20px 0;
  }
`

export const HeroContent = styled.div`
  flex: 1 1 440px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-bottom: 96px;

  @media ${mobileBreakpoint} {
    flex: none;
    gap: 24px;
    padding-bottom: 0;
  }
`

export const Eyebrow = styled.p`
  ${monoLabel}
  color: ${(props) => props.theme.muted};
  ${fadeUpEntrance(0.05)}
`

export const HeroTitle = styled.h1`
  font-size: 64px;
  line-height: 1;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: ${(props) => props.theme.white};
  ${fadeUpEntrance(0.14)}

  & > span:last-child {
    color: ${(props) => props.theme['green-300']};
  }

  @media ${mobileBreakpoint} {
    font-size: clamp(34px, 13vw, 52px);

    & > span:first-child {
      display: block;
    }
  }
`

export const HeroText = styled.p`
  font-size: 18px;
  line-height: 1.65;
  color: ${(props) => props.theme.soft};
  max-width: 500px;
  ${fadeUpEntrance(0.24)}

  @media ${mobileBreakpoint} {
    font-size: 17px;
  }
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 28px;
  ${fadeUpEntrance(0.34)}

  @media ${mobileBreakpoint} {
    flex-direction: column;
    align-items: stretch;
    gap: 4px;

    ${TextLink} {
      justify-content: center;
    }
  }
`

export const NowRow = styled.p`
  ${monoLabel}
  padding-top: 24px;
  border-top: 1px solid ${(props) => props.theme.line};
  line-height: 1.7;
  color: ${(props) => props.theme.muted};
  ${fadeUpEntrance(0.34)}

  & > span {
    color: ${(props) => props.theme.text};
  }
`

export const PhotoContainer = styled.div`
  flex: 0 0 480px;
  max-width: 100%;
  margin-left: auto;
  ${fadeUpEntrance(0.24)}

  @media ${mobileBreakpoint} {
    flex: none;
    width: 100%;
    margin-left: 0;
  }
`

export const PhotoCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 448px;
  border-radius: 24px 24px 0 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${(props) => props.theme.line};
  border-bottom: 0;
  overflow: hidden;

  & > img {
    position: absolute;
    bottom: 0;
    left: -2%;
    width: 106%;
    max-width: none;
    height: auto;
    display: block;
  }

  @media ${mobileBreakpoint} {
    max-width: none;
    height: 330px;
  }
`

export const TechIcons = styled.div`
  position: absolute;
  top: 28px;
  left: 28px;
  display: flex;
  gap: 16px;
  z-index: 1;

  & > img {
    width: 32px;
    height: auto;
    display: block;
    filter: brightness(0) invert(1);
    animation: ${pulse} 1s ease-in-out infinite;
  }

  @media ${mobileBreakpoint} {
    top: 20px;
    left: 20px;
    gap: 14px;

    & > img {
      width: 30px;
    }
  }
`
