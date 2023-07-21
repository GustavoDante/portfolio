import { DegreePanelContainer } from './styles'
import imageIntroductionToBackEnd from '../../../../assets/images/certificate-itbd.png'
import IntroductionToBackEnd from '../../../../assets/files/Coursera-itbd.pdf'

export function DegreePanel() {
  return (
    <DegreePanelContainer>
      <a href={IntroductionToBackEnd} target="_blank" rel="noreferrer">
        <img src={imageIntroductionToBackEnd} alt="" />
      </a>
    </DegreePanelContainer>
  )
}
