import IntroductionToBackEnd from '../../../../assets/files/Coursera-itbd.pdf'
import imageIntroductionToBackEnd from '../../../../assets/images/certificate-itbd.png'
import { CertificateCard, DegreePanelContainer } from './styles'

export function DegreePanel() {
  return (
    <DegreePanelContainer>
      <CertificateCard
        href={IntroductionToBackEnd}
        target="_blank"
        rel="noreferrer"
        data-reveal
        data-reveal-delay="1"
      >
        <img src={imageIntroductionToBackEnd} alt="Certificate thumbnail" />
        <div className="cert-info">
          <strong>Introduction to Back-End Development</strong>
          <span>Meta · Coursera</span>
          <p>Completed</p>
        </div>
        <span className="cert-arrow">&rarr;</span>
      </CertificateCard>
    </DegreePanelContainer>
  )
}
