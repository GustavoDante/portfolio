import styled from 'styled-components'

export const DegreePanelContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  > a {
    width: 50%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    border-radius: 1rem;

    > img {
      width: 100%;
      border-radius: 1rem;
    }

    @media screen and (max-width: 675px) {
      width: 70%;
    }

    @media screen and (max-width: 450px) {
      width: 90%;
    }
  }
`
