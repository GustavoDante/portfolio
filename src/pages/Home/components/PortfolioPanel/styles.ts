import styled from 'styled-components'

export const PortfolioPanelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

interface ProjectCardProps {
  gradient?: string
}

export const ProjectCard = styled.div<ProjectCardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['glass-bg']};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme['glass-border']};
  border-radius: 1.25rem;
  overflow: hidden;
  transition:
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${(props) => props.theme['green-300']}44;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px ${(props) => props.theme['green-300']}22;
  }
`

export const ProjectImageArea = styled.div<{
  gradient: string
  hasImage: boolean
}>`
  width: 100%;
  height: 14rem;
  background: ${(props) => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  > .image-pair {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;

    img {
      border-radius: 0.5rem;
      object-fit: cover;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

      &:first-child {
        width: 30%;
        height: 85%;
      }
      &:last-child {
        width: 65%;
        height: 75%;
      }
    }

    @media screen and (max-width: 520px) {
      > img:last-child {
        width: 70%;
      }
    }
  }

  > .gradient-label {
    font-family: 'Syne', 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.15);
    letter-spacing: -0.02em;
    user-select: none;
  }
`

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  gap: 0.75rem;

  > h3 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.15rem;
    font-weight: 700;
  }

  > p {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.88rem;
    line-height: 1.65;
    flex: 1;
  }
`

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`

export const Tag = styled.span`
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 2rem;
  background: ${(props) => props.theme['blue-700']}88;
  color: ${(props) => props.theme['green-300']};
  border: 1px solid ${(props) => props.theme['green-300']}33;
  letter-spacing: 0.02em;
  white-space: nowrap;
`

export const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem 1.25rem;
  border-top: 1px solid ${(props) => props.theme['glass-border']};
  margin-top: auto;

  > a {
    text-decoration: none;
    font-size: 0.82rem;
    font-weight: 600;
    color: ${(props) => props.theme['green-300']};
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: gap 0.2s ease;

    &:hover {
      gap: 0.65rem;
    }

    &::after {
      content: '→';
    }
  }

  > span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-500']};
    display: flex;
    align-items: center;
    gap: 0.35rem;

    &::before {
      content: '🔒';
      font-size: 0.8rem;
    }
  }
`
