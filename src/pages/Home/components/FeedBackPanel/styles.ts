import styled from 'styled-components'

export const FeedBackupsPanelContainer = styled.div`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const TestimonialCard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${(props) => props.theme['glass-bg']};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme['glass-border']};
  border-radius: 1.25rem;
  padding: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  /* decorative quote mark */
  &::before {
    content: '\u201C';
    position: absolute;
    top: 0.5rem;
    left: 1.5rem;
    font-size: 5rem;
    line-height: 1;
    color: ${(props) => props.theme['green-300']};
    opacity: 0.12;
    font-family: Georgia, serif;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme['green-300']}44;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  }

  > .testimonial-text {
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.9rem;
    line-height: 1.75;
    flex: 1;
  }

  > .testimonial-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-top: 1.25rem;
    border-top: 1px solid ${(props) => props.theme['glass-border']};

    > .avatar {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: linear-gradient(
        135deg,
        ${(props) => props.theme['blue-700']},
        ${(props) => props.theme['green-700']}
      );
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: 700;
      color: ${(props) => props.theme['green-300']};
      flex-shrink: 0;
    }

    > .author-info {
      > strong {
        display: block;
        color: ${(props) => props.theme['gray-100']};
        font-size: 0.9rem;
        font-weight: 600;
      }
      > span {
        color: ${(props) => props.theme['green-300']};
        font-size: 0.78rem;
      }
    }

    > .linkedin-hint {
      margin-left: auto;
      font-size: 0.72rem;
      color: ${(props) => props.theme['gray-500']};
      display: flex;
      align-items: center;
      gap: 0.3rem;

      &::after {
        content: '\u2794';
      }
    }
  }
`
