import styled from 'styled-components'
import { mobileBreakpoint, monoLabel } from '../../styles'

export const SectionContainer = styled.section`
  border-top: 1px solid ${(props) => props.theme.line};
`

export const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 32px;

  @media ${mobileBreakpoint} {
    padding: 64px 20px;
  }
`

export const SectionLabel = styled.div`
  ${monoLabel}
  margin-bottom: 16px;
  color: ${(props) => props.theme.muted};

  @media ${mobileBreakpoint} {
    margin-bottom: 14px;
  }
`

export const SectionBody = styled.div`
  min-width: 0;
`
