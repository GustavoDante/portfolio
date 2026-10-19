import styled from 'styled-components'
import { mobileBreakpoint, monoLabel } from '../../styles'

export const JobsHeading = styled.div`
  margin-bottom: 40px;

  @media ${mobileBreakpoint} {
    margin-bottom: 28px;
  }
`

export const JobItem = styled.div`
  border-top: 1px solid ${(props) => props.theme.line};

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.line};
  }
`

export const JobButton = styled.button`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 32px;
  align-items: baseline;
  padding: 24px 0;
  background: transparent;
  border: 0;
  color: inherit;
  text-align: left;

  & > .date {
    ${monoLabel}
    flex: 0 0 170px;
    font-size: 11px;
    color: ${(props) => props.theme.muted};
  }

  & > .title {
    flex: 1 1 260px;
    min-width: 0;
  }

  & > .title > .role {
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }

  & > .title > .company {
    display: block;
    margin-top: 4px;
    font-size: 15px;
    color: ${(props) => props.theme.muted};
  }

  & > .sign {
    flex: none;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 18px;
    color: ${(props) => props.theme.muted};
    transition: color 0.2s ease;
  }

  &:hover > .sign {
    color: ${(props) => props.theme.text};
  }

  @media ${mobileBreakpoint} {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 4px 16px;
    align-items: start;
    padding: 20px 0;
    min-height: 44px;

    & > .date {
      grid-column: 1;
      flex: none;
    }

    & > .title {
      grid-column: 1;
    }

    & > .title > .role {
      font-size: 18px;
    }

    & > .title > .company {
      font-size: 14px;
    }

    & > .sign {
      grid-column: 2;
      grid-row: 1 / span 2;
      padding-top: 18px;
    }
  }
`

interface JobBodyProps {
  $open: boolean
}

export const JobBody = styled.div<JobBodyProps>`
  display: grid;
  grid-template-rows: ${(props) => (props.$open ? '1fr' : '0fr')};
  transition: grid-template-rows 0.36s cubic-bezier(0.2, 0.8, 0.2, 1);

  & > div {
    min-height: 0;
    overflow: hidden;
  }

  & p {
    padding: 0 0 28px 202px;
    max-width: 900px;
    font-size: 16px;
    line-height: 1.75;
    color: ${(props) => props.theme.soft};
  }

  @media ${mobileBreakpoint} {
    & p {
      padding: 0 0 22px;
      font-size: 15px;
      line-height: 1.7;
    }
  }
`
