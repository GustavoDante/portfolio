import styled from 'styled-components'

export const HomeContainer = styled.div`
  /* display: flex; */
`

export const AboutMeContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    margin: 2rem 0 1rem 0;

    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 3rem;
      height: 0.1rem;
      background-color: ${(props) => props.theme['green-300']};
    }
    ::after {
      content: '';
      display: block;
      position: absolute;
      left: 3rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme['green-300']};
    }
  }

  & > p {
    margin: 1rem 0;
  }
`

export const SkillsContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    margin: 2rem 0 1rem 0;
    overflow: hidden;

    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 18rem;
      width: calc(100% - 18rem);
      height: 0.1rem;
      background-color: ${(props) => props.theme['green-300']};
    }
    ::after {
      content: '';
      display: block;
      position: absolute;
      left: 18rem;

      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme['green-300']};
    }
  }
`
