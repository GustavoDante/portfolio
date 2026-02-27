import styled from 'styled-components'

export const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 4rem;

  /* Vertical line */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.4rem;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme['green-300']},
      ${(props) => props.theme['green-300']}22
    );
    border-radius: 2px;
  }

  @media screen and (max-width: 675px) {
    padding-left: 1.25rem;
  }
`

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

  /* Dot on the timeline */
  &::before {
    content: '';
    position: absolute;
    left: -2.45rem;
    top: 0.45rem;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    background: ${(props) => props.theme['green-300']};
    box-shadow: 0 0 0 3px ${(props) => props.theme['blue-900']},
      0 0 0 5px ${(props) => props.theme['green-300']}44;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:last-child::before {
    background: ${(props) => props.theme['gray-500']};
    box-shadow: 0 0 0 3px ${(props) => props.theme['blue-900']},
      0 0 0 5px ${(props) => props.theme['gray-500']}44;
  }

  @media screen and (max-width: 675px) {
    &::before {
      left: -1.7rem;
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`

export const CardExperience = styled.div`
  background: ${(props) => props.theme['glass-bg']};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme['glass-border']};
  border-radius: 1rem;
  padding: 1.75rem 2rem;
  cursor: default;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme['green-300']}44;
    transform: translateX(4px);
  }

  > .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;

    > h3 {
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.1rem;
      font-weight: 600;
    }

    > .date-badge {
      font-size: 0.78rem;
      font-weight: 500;
      color: ${(props) => props.theme['green-300']};
      background: ${(props) => props.theme['green-300']}15;
      border: 1px solid ${(props) => props.theme['green-300']}33;
      padding: 0.25rem 0.75rem;
      border-radius: 2rem;
      white-space: nowrap;
    }
  }

  > .company {
    display: block;
    font-weight: 600;
    font-size: 0.85rem;
    color: ${(props) => props.theme['green-300']};
    margin-bottom: 1rem;
    letter-spacing: 0.03em;
  }

  > p {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.9rem;
    line-height: 1.7;
  }
`
