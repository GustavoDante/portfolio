import styled from 'styled-components'

export const FeedBackupsPanelContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  > div {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 3rem;
    width: 30rem;
    border-radius: 1rem;

    transition: transform 0.5s ease;

    :hover {
      transform: scale(1.05);
    }

    > h3 {
      color: ${(props) => props.theme['green-300']};
      margin-bottom: 1rem;
    }

    @media screen and (max-width: 1275px) {
      width: 23rem;
    }

    @media screen and (max-width: 900px) {
      width: 15rem;
      padding: 2.5rem;
    }

    @media screen and (max-width: 610px) {
      width: 100%;
      padding: 2rem;
    }
  }
`
