import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`

export const HeaderContainer = styled.div`
  display: block;

  & > div {
    position: absolute;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    height: 46.5rem;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      width: 50%;

      & > strong {
        background: ${(props) => props.theme['green-300']};
        color: ${(props) => props.theme.black};
        align-self: flex-start;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
      }

      & > div {
        display: flex;
        gap: 1rem;

        & > a {
          text-decoration: none;
          padding: 0.2rem 0.5rem;
          border-radius: 0.5rem;
          color: ${(props) => props.theme.white};
          font-weight: 600;
          border: 1px solid ${(props) => props.theme.white};

          :first-child {
            background: ${(props) => props.theme['green-300']};
            border: 0;
            color: ${(props) => props.theme.black};
          }
        }
      }
    }

    & > div:last-child {
      display: flex;
      align-items: end;
      justify-content: end;
      padding-right: 7rem;
      /* width: 100%; */

      & > img {
        width: 70%;
      }
    }
  }

  & > img {
    position: absolute;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
