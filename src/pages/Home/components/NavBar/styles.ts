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
  display: flex;
  align-items: center;
  font-weight: 600;

  & > div:last-child {
    display: none;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 730px) {
    & > div:last-child {
      display: block;
    }

    > a {
      display: none;
    }
  }
`

export const CustomDropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 1rem; // Adicione espaçamento
  margin-right: 1rem;
  z-index: 100; // Aumente o z-index para garantir visibilidade
  height: 2rem; // Defina uma altura mínima
`

export const DropdownToggle = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  border: 2px solid ${(props) => props.theme['blue-700']}; // Borda mais evidente
  border-radius: 0.5rem;
  color: ${(props) => props.theme['blue-900']};
  padding: 0rem 0.5rem; // Ajuste o padding
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center; // Centraliza o conteúdo
  min-width: 2rem; // Largura mínima para o botão
  min-height: 2rem; // Altura mínima para o botão

  &::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.5em;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
  }
`

export const LanguageFlag = styled.img`
  width: 1.8rem; // Aumenta o tamanho da imagem
  height: auto;
  display: block; // Garante que a imagem seja exibida como um bloco
  object-fit: contain; // Mantém a proporção da imagem
`

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 110; // Aumente o z-index
  min-width: 100%;
  background-color: ${(props) => props.theme['gray-100']};
  border: 2px solid ${(props) => props.theme['blue-700']};
  border-radius: 0.5rem;
  margin-top: 0.25rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // Adiciona sombra para destacar

  & > div:first-child {
    padding: 0.5rem 0.5rem 0.25rem 0.5rem; // Ajusta o padding
  }

  & > div:last-child {
    padding: 0.25rem 0.5rem 0.5rem 0.5rem; // Ajusta o padding
  }
`

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start; // Centraliza o conteúdo
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem; // Adiciona bordas arredondadas aos itens
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['gray-300']};
  }
`
