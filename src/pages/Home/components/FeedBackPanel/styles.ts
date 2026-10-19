import styled from 'styled-components'
import { mobileBreakpoint, monoLabel } from '../../styles'

export const QuotesRow = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 48px 56px;

  @media ${mobileBreakpoint} {
    margin-top: 32px;
    flex-direction: column;
    gap: 40px;
  }
`

export const Quote = styled.figure`
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > blockquote {
    font-size: 18px;
    line-height: 1.7;
    color: ${(props) => props.theme['text-strong']};
  }

  & > figcaption {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  & > figcaption > strong {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }

  & > figcaption > span {
    font-size: 14px;
    color: ${(props) => props.theme.muted};
  }

  & > figcaption > a {
    align-self: flex-start;
    font-size: 14px;
  }

  @media ${mobileBreakpoint} {
    flex: none;
    gap: 18px;

    & > blockquote {
      font-size: 17px;
    }

    & > figcaption {
      gap: 0;
    }
  }
`

export const CertificationRow = styled.div`
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid ${(props) => props.theme.line};
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 24px;

  & > p {
    font-size: 15px;
    color: ${(props) => props.theme.soft};
  }

  & > p > .label {
    ${monoLabel}
    margin-right: 14px;
    color: ${(props) => props.theme.muted};
  }

  & > a {
    font-size: 14px;
  }

  @media ${mobileBreakpoint} {
    margin-top: 40px;
    padding-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;

    & > p {
      line-height: 1.6;
    }

    & > p > .label {
      display: block;
      margin: 0 0 6px;
    }
  }
`
