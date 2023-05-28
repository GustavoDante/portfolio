import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  left: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem 8rem;

  & > img {
    width: 10rem;
  }

  @media screen and (max-width: 1050px) {
    padding: 1rem 4rem;
  }

  @media screen and (max-width: 675px) {
    padding: 1rem 3rem;
  }
`
