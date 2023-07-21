import styled from 'styled-components'

export const ExperiencePanelContainer = styled.div`
  margin-bottom: rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

export const CardExperience = styled.div`
  background-color: ${(props) => props.theme['gray-700']};
  padding: 3rem;
  width: 75%;
  border-radius: 1rem;

  transition: transform 0.5s ease;

  :hover {
    transform: scale(1.05);
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media screen and (max-width: 610px) {
      flex-direction: column;
    }

    > h3 {
      color: ${(props) => props.theme['green-300']};

      @media screen and (max-width: 610px) {
        margin-bottom: 1rem;
      }
    }

    > p {
      color: ${(props) => props.theme['gray-100']};
    }
  }

  > span {
    display: flex;
    font-weight: 600;
    color: ${(props) => props.theme['yellow-500']};
    margin-bottom: 1rem;
  }

  > p {
    color: ${(props) => props.theme['gray-100']};
  }

  @media screen and (max-width: 1275px) {
    width: 80%;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  @media screen and (max-width: 610px) {
    width: 100%;
  }
`
