import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.5rem 0;

  background-color: ${(props) => props.theme['blue-900']};
  color: ${(props) => props.theme['gray-300']};

  nav {
    display: flex;
    gap: 2rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      white-space: nowrap;
      text-decoration: none;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-300']};
        color: ${(props) => props.theme['green-300']};
      }
    }
  }

  & > div > img {
    width: 10rem;
  }
`
