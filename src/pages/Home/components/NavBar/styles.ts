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

interface DropdownProps {
  isVisible: boolean
}

export const DropdownContent = styled.div<DropdownProps>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  position: absolute;
  top: 5rem;
  right: 0;
  z-index: 2;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  height: 100vh;
  background-color: ${(props) => props.theme['blue-900']};
  border-radius: 1rem 0 0 1rem;
`

export const NavBarContent = styled.nav`
  font-weight: 600;
  & > div {
    display: none;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    & > div {
      display: block;
    }

    > a {
      display: none;
    }
  }
`
