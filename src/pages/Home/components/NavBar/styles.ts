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

    @media screen and (max-width: 370px) {
      width: 5rem;
    }
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

  @media screen and (max-width: 730px) {
    & > div {
      display: block;
    }

    > a {
      display: none;
    }
  }
`

export const SelectLanguage = styled.select`
  background-color: ${(props) => props.theme['gray-100']};
  border: thin solid ${(props) => props.theme['blue-700']};
  border-radius: 1rem;
  display: inline-block;
  color: ${(props) => props.theme['blue-900']};
  line-height: 1.5em;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  cursor: pointer;

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 16px) calc(1em + 2px),
    calc(100% - 11px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;

  :focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      radial-gradient(gray 70%, transparent 72%);
    background-position: calc(100% - 11px) 1em, calc(100% - 16px) 1em,
      calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    border-color: ${(props) => props.theme['blue-500']};
    outline: 0;
  }
`
