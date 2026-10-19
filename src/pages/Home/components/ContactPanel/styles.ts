import styled from 'styled-components'
import { mobileBreakpoint, PrimaryButton, TextLink } from '../../styles'

export const ContactTitle = styled.h2`
  font-size: 72px;
  line-height: 1;
  letter-spacing: -0.035em;
  font-weight: 800;
  color: ${(props) => props.theme.white};

  @media ${mobileBreakpoint} {
    font-size: clamp(30px, 11vw, 40px);
  }
`

export const ContactText = styled.p`
  margin-top: 24px;
  font-size: 19px;
  line-height: 1.65;
  color: ${(props) => props.theme.soft};
  max-width: 520px;

  @media ${mobileBreakpoint} {
    margin-top: 20px;
    font-size: 17px;
  }
`

export const ContactActions = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 28px;

  @media ${mobileBreakpoint} {
    margin-top: 28px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    ${PrimaryButton} {
      width: 100%;
    }

    ${TextLink} {
      align-self: flex-start;
    }
  }
`
