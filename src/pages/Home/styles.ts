import styled, { css, keyframes } from 'styled-components'

export const monoLabel = css`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const mobileBreakpoint = '(max-width: 760px)'

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const fadeUpEntrance = (delay: number) => css`
  animation: ${fadeUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: ${delay}s;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeInSwap = css`
  animation: ${fadeIn} 0.24s ease-out both;
`

export const HomeContainer = styled.main`
  display: block;
`

export const SectionTitle = styled.h2`
  font-family: 'Syne', 'Inter', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.white};
  text-wrap: balance;

  @media ${mobileBreakpoint} {
    font-size: 30px;
  }
`

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid transparent;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
`

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme.ink};

  &:hover {
    background: ${(props) => props.theme.white};
  }
`

export const QuietButton = styled.a`
  ${buttonBase}
  border-color: ${(props) => props.theme.line};
  color: ${(props) => props.theme.text};

  &:hover {
    border-color: ${(props) => props.theme.muted};
  }
`

export const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  font-size: 15px;
  color: ${(props) => props.theme.text};
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.line};
  text-underline-offset: 6px;
  text-decoration-thickness: 1px;
  transition:
    text-decoration-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    text-decoration-color: ${(props) => props.theme.text};
  }
`
