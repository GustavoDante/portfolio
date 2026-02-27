import styled from 'styled-components'

export const DegreePanelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 4rem;
  width: 100%;
`

export const CertificateCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 36rem;
  background: ${(props) => props.theme['glass-bg']};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme['glass-border']};
  border-radius: 1.25rem;
  padding: 1.25rem 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme['green-300']}44;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  }

  > img {
    width: 6rem;
    height: 4.5rem;
    object-fit: cover;
    border-radius: 0.5rem;
    flex-shrink: 0;
  }

  > .cert-info {
    > strong {
      display: block;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    > span {
      color: ${(props) => props.theme['green-300']};
      font-size: 0.8rem;
      font-weight: 500;
    }
    > p {
      color: ${(props) => props.theme['gray-500']};
      font-size: 0.78rem;
      margin-top: 0.3rem;
    }
  }

  > .cert-arrow {
    margin-left: auto;
    color: ${(props) => props.theme['green-300']};
    font-size: 1.2rem;
    opacity: 0.5;
    transition: opacity 0.2s, transform 0.2s;
  }

  &:hover > .cert-arrow {
    opacity: 1;
    transform: translateX(4px);
  }
`
