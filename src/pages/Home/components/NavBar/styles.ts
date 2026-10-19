import styled, { css, keyframes } from 'styled-components'
import { mobileBreakpoint, monoLabel } from '../../styles'

const sheetIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const NavBarContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(11, 12, 16, 0.9);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.line};

  @media ${mobileBreakpoint} {
    background: ${(props) => props.theme.bg};
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
`

export const NavBarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media ${mobileBreakpoint} {
    padding: 8px 20px;
  }
`

export const Logo = styled.a`
  font-family: 'Syne', 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
`

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 860px) {
    gap: 24px;
  }

  @media ${mobileBreakpoint} {
    display: none;
  }
`

interface NavLinkProps {
  active: boolean
}

export const NavLink = styled.a<NavLinkProps>`
  position: relative;
  padding: 10px 0;
  font-size: 14px;
  color: ${(props) => (props.active ? props.theme.text : props.theme.muted)};
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6px;
    height: 1px;
    background: ${(props) => props.theme.text};
    transform: scaleX(${(props) => (props.active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:hover {
    color: ${(props) => props.theme.text};

    &::after {
      transform: scaleX(1);
    }
  }
`

interface LanguageToggleProps {
  inSheet: boolean
}

export const LanguageToggle = styled.div<LanguageToggleProps>`
  display: inline-flex;
  gap: 2px;
  align-items: center;

  ${(props) =>
    props.inSheet
      ? css`
          margin-top: 8px;
        `
      : css`
          @media ${mobileBreakpoint} {
            display: none;
          }
        `}
`

interface LanguageButtonProps {
  active: boolean
}

export const LanguageButton = styled.button<LanguageButtonProps>`
  ${monoLabel}
  min-width: 44px;
  min-height: 44px;
  border: 0;
  background: transparent;
  color: ${(props) => (props.active ? props.theme.text : props.theme.muted)};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`

export const MenuButton = styled.button`
  ${monoLabel}
  display: none;
  min-height: 44px;
  padding: 0 4px;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.text};

  @media ${mobileBreakpoint} {
    display: block;
  }
`

export const Sheet = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 8px 20px 24px;
  background: ${(props) => props.theme.bg};
  border-bottom: 1px solid ${(props) => props.theme.line};
  animation: ${sheetIn} 0.22s ease-out both;

  @media (min-width: 761px) {
    display: none;
  }
`

export const SheetLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px;
  border-bottom: 1px solid ${(props) => props.theme.line};
  font-family: 'Syne', 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 700;

  &:last-of-type {
    border-bottom: 0;
  }

  & > span {
    color: ${(props) => props.theme.muted};
  }
`
