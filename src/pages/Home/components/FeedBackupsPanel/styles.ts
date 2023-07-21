import styled from 'styled-components'

export const FeedBackupsPanelContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  > a {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 3rem;
    width: 30rem;
    border-radius: 1rem;
    text-decoration: none;

    transition: transform 0.5s ease;

    :hover {
      transform: scale(1.05);
    }

    > h3 {
      color: ${(props) => props.theme['green-300']};
      margin-bottom: 1rem;
    }

    > p {
      color: ${(props) => props.theme['gray-100']};
    }

    @media screen and (max-width: 1275px) {
      width: 23rem;
    }

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
