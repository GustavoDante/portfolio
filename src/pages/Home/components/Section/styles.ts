import styled from 'styled-components'
import { mobileBreakpoint, monoLabel } from '../../styles'

export const SectionContainer = styled.section`
  border-top: 1px solid ${(props) => props.theme.line};
`

export const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 28px 56px;

  @media ${mobileBreakpoint} {
    padding: 64px 20px;
    gap: 14px;
  }
`

export const SectionLabel = styled.div`
  ${monoLabel}
  flex: 0 0 180px;
  align-self: flex-start;
  position: sticky;
  top: 88px;
  color: ${(props) => props.theme.muted};

  @media (max-width: 939px) {
    position: static;
    flex-basis: 100%;
  }
`

export const SectionBody = styled.div`
  flex: 1 1 640px;
  min-width: 0;
`
