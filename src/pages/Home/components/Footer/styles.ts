import styled from 'styled-components'
import { mobileBreakpoint, monoLabel } from '../../styles'

export const FooterContainer = styled.footer`
  border-top: 1px solid ${(props) => props.theme.line};
`

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 16px;

  & > span {
    ${monoLabel}
    font-size: 11px;
    color: ${(props) => props.theme.muted};
  }

  & > a {
    font-size: 14px;
  }

  @media ${mobileBreakpoint} {
    padding: 24px 20px;
  }
`
