import styled from 'styled-components'
import { fadeInSwap, mobileBreakpoint, monoLabel } from '../../styles'

interface ActiveProps {
  active: boolean
}

export const FiltersRow = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 32px;
  margin-bottom: 28px;

  @media ${mobileBreakpoint} {
    margin-top: 20px;
    margin-bottom: -4px;
    padding: 4px 0;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const FilterButton = styled.button<ActiveProps>`
  flex: none;
  scroll-snap-align: start;
  min-height: 44px;
  padding: 0 2px;
  border: 0;
  border-bottom: 1px solid
    ${(props) => (props.active ? props.theme.text : 'transparent')};
  background: transparent;
  color: ${(props) => (props.active ? props.theme.text : props.theme.muted)};
  font-size: 14px;
  white-space: nowrap;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.text};
  }

  & > span {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
    margin-left: 6px;
    color: ${(props) => props.theme.muted};
  }

  @media ${mobileBreakpoint} {
    padding: 0;
  }
`

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px 48px;
  align-items: flex-start;

  @media ${mobileBreakpoint} {
    display: block;
  }
`

export const ProjectList = styled.ul`
  flex: 1 1 280px;
  max-width: 360px;
  border-bottom: 1px solid ${(props) => props.theme.line};

  @media ${mobileBreakpoint} {
    display: none;
  }
`

export const ProjectRow = styled.button<ActiveProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 56px;
  padding: 0;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.line};
  background: transparent;
  color: ${(props) => (props.active ? props.theme.white : props.theme.muted)};
  text-align: left;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => (props.active ? props.theme.white : props.theme.text)};
  }

  & > .marker {
    width: 16px;
    flex: none;
    color: ${(props) => props.theme['green-300']};
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.2s ease;
  }

  & > .name {
    flex: 1;
    font-size: 17px;
    font-weight: 500;
  }

  & > .type {
    ${monoLabel}
    font-size: 11px;
    color: ${(props) => props.theme.muted};
  }
`

export const ProjectScroller = styled.div`
  display: none;

  @media ${mobileBreakpoint} {
    display: flex;
    gap: 22px;
    margin-top: 0;
    padding: 4px 0;
    border-bottom: 1px solid ${(props) => props.theme.line};
    overflow-x: auto;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const ProjectTab = styled.button<ActiveProps>`
  flex: none;
  scroll-snap-align: start;
  min-height: 44px;
  padding: 0;
  border: 0;
  border-bottom: 1px solid
    ${(props) => (props.active ? props.theme['green-300'] : 'transparent')};
  background: transparent;
  color: ${(props) => (props.active ? props.theme.white : props.theme.muted)};
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`

export const Showcase = styled.div`
  flex: 2 1 480px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
  ${fadeInSwap}

  @media ${mobileBreakpoint} {
    margin-top: 24px;
    gap: 22px;
  }
`

export const Screens = styled.div`
  position: relative;

  @media ${mobileBreakpoint} {
    padding-bottom: 18px;
  }
`

export const BrowserFrame = styled.div`
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.line};
  background: ${(props) => props.theme.raised};
  overflow: hidden;

  & > img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
  }

  @media ${mobileBreakpoint} {
    border-radius: 10px;
  }
`

export const BrowserBar = styled.div`
  ${monoLabel}
  padding: 10px 16px;
  border-bottom: 1px solid ${(props) => props.theme.line};
  font-size: 11px;
  color: ${(props) => props.theme.muted};
  text-transform: none;
  letter-spacing: 0.02em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${mobileBreakpoint} {
    padding: 8px 12px;
  }
`

export const PhoneFrame = styled.div`
  position: absolute;
  right: 20px;
  bottom: -24px;
  width: 118px;
  border-radius: 18px;
  border: 4px solid ${(props) => props.theme.bg};
  overflow: hidden;
  background: ${(props) => props.theme.bg};
  box-shadow: 0 0 0 1px ${(props) => props.theme.line};

  & > img {
    display: block;
    width: 100%;
    aspect-ratio: 9 / 19;
    object-fit: cover;
    object-position: top;
  }

  @media ${mobileBreakpoint} {
    right: 12px;
    bottom: 0;
    width: 76px;
    border-radius: 12px;
    border-width: 3px;
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 4px;

  & > .type {
    ${monoLabel}
    color: ${(props) => props.theme.muted};
  }

  & > h3 {
    font-size: 32px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: ${(props) => props.theme.white};
  }

  & > .description {
    font-size: 16px;
    line-height: 1.7;
    color: ${(props) => props.theme.soft};
    max-width: 640px;
  }

  & > .stack {
    ${monoLabel}
    font-size: 11px;
    line-height: 1.9;
    color: ${(props) => props.theme.muted};
    text-transform: none;
    letter-spacing: 0.03em;
  }

  @media ${mobileBreakpoint} {
    gap: 12px;
    padding-top: 0;

    & > h3 {
      font-size: 26px;
    }

    & > .description {
      font-size: 15px;
    }
  }
`

export const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 28px;
  margin-top: 4px;

  @media ${mobileBreakpoint} {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
  }
`

export const QuoteRow = styled.div`
  margin-top: 72px;
  padding-top: 28px;
  border-top: 1px solid ${(props) => props.theme.line};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 32px;

  & > p {
    font-size: 17px;
    line-height: 1.6;
    color: ${(props) => props.theme.soft};
    max-width: 520px;
  }

  @media ${mobileBreakpoint} {
    margin-top: 48px;
    padding-top: 24px;
    flex-direction: column;
    align-items: flex-start;

    & > p {
      font-size: 16px;
    }
  }
`
