import styled from 'styled-components'

export const HomeContainer = styled.div`
  > header + div,
  > div + div {
    margin-top: 5rem;
  }
`

// ── Shared section title style ──────────────────────────────────────────────
export const SectionLabel = styled.span`
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(props) => props.theme['green-300']};
  margin-bottom: 0.5rem;
`

// ── About Me ────────────────────────────────────────────────────────────────
export const AboutMeContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 4rem 0 2rem;
    font-size: 2rem;
    white-space: normal;

    &::before {
      content: '';
      flex-shrink: 0;
      width: 3px;
      height: 2rem;
      background: linear-gradient(
        to bottom,
        ${(props) => props.theme['green-300']},
        transparent
      );
      border-radius: 2px;
    }
  }
`

export const AboutMeCard = styled.div`
  background: ${(props) => props.theme['glass-bg']};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme['glass-border']};
  border-radius: 1.25rem;
  padding: 2.5rem;

  & > p {
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.05rem;
  }
`

export const HighlightsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme['glass-border']};

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.5;

    &::before {
      content: '▸';
      color: ${(props) => props.theme['green-300']};
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`

// ── Skills ───────────────────────────────────────────────────────────────────
export const SkillsContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 4rem 0 0.5rem;
    font-size: 2rem;
    white-space: normal;

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(
        to right,
        ${(props) => props.theme['green-300']}55,
        transparent
      );
    }
  }

  & > p {
    margin: 1rem 0 2rem;
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.95rem;
  }
`

// ── Portfolio / Projects ─────────────────────────────────────────────────────
export const PortfolioContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 4rem 0 2rem;
    font-size: 2rem;
    white-space: normal;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(
        to left,
        ${(props) => props.theme['green-300']}55,
        transparent
      );
    }
  }
`

// ── Feedbacks ────────────────────────────────────────────────────────────────
export const FeedbacksContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 4rem 0 2rem;
    font-size: 2rem;
    white-space: normal;

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(
        to right,
        ${(props) => props.theme['green-300']}55,
        transparent
      );
    }
  }
`

// ── Experience ───────────────────────────────────────────────────────────────
export const ExperiencePanelContainer = styled.div`
  > h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 4rem 0 2rem;
    font-size: 2rem;
    white-space: normal;
    color: ${(props) => props.theme['gray-100']};

    &::before {
      content: '';
      flex-shrink: 0;
      width: 3px;
      height: 2rem;
      background: linear-gradient(
        to bottom,
        ${(props) => props.theme['green-300']},
        transparent
      );
      border-radius: 2px;
    }
  }
`

// ── Degree ───────────────────────────────────────────────────────────────────
export const DegreePanelContainer = styled.div`
  & > h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 4rem 0 2rem;
    font-size: 2rem;
    white-space: normal;
    color: ${(props) => props.theme['gray-100']};

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(
        to right,
        ${(props) => props.theme['green-300']}55,
        transparent
      );
    }
  }
`

interface ScrollToTopButtonProps {
  show: boolean
}
export const ScrollToTopButton = styled.button<ScrollToTopButtonProps>`
  display: flex;
  position: fixed;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  bottom: 2rem;
  right: 2rem;

  width: 3rem;
  height: 3rem;

  background: linear-gradient(
    135deg,
    ${(props) => props.theme['green-300']},
    ${(props) => props.theme['green-700']}
  );

  border-radius: 50%;
  border: none;
  cursor: pointer;

  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  box-shadow: 0 4px 20px rgba(115, 242, 168, 0.3);

  &:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 6px 24px rgba(115, 242, 168, 0.45);
  }

  & > img {
    width: 55%;
  }
`
