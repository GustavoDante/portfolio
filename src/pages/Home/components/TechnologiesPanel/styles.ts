import styled from 'styled-components'
import { mobileBreakpoint, monoLabel } from '../../styles'

export const AboutText = styled.p`
  margin-top: 28px;
  font-size: 20px;
  line-height: 1.7;
  color: ${(props) => props.theme['text-strong']};
  max-width: 760px;

  @media ${mobileBreakpoint} {
    margin-top: 22px;
    font-size: 17px;
  }
`

export const StackGrid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px 28px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
  }

  @media ${mobileBreakpoint} {
    margin-top: 40px;
  }
`

export const StackGroupLabel = styled.div`
  ${monoLabel}
  color: ${(props) => props.theme.muted};
  margin-bottom: 14px;
`

export const StackList = styled.ul`
  border-bottom: 1px solid ${(props) => props.theme.line};
`

export const StackItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid ${(props) => props.theme.line};
  font-size: 15px;
  color: ${(props) => props.theme.text};

  & > span:last-child {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
    color: ${(props) => props.theme.muted};
    align-self: center;
  }
`

export const StackFootnote = styled.p`
  ${monoLabel}
  margin-top: 20px;
  font-size: 11px;
  line-height: 1.8;
  color: ${(props) => props.theme.muted};
  text-transform: none;
  letter-spacing: 0.03em;
`
