import { ReactNode } from 'react'
import {
  SectionBody,
  SectionContainer,
  SectionInner,
  SectionLabel,
} from './styles'

interface SectionProps {
  id: string
  label: string
  children: ReactNode
}

export function Section({ id, label, children }: SectionProps) {
  return (
    <SectionContainer id={id}>
      <SectionInner>
        <SectionLabel>{label}</SectionLabel>
        <SectionBody data-reveal>{children}</SectionBody>
      </SectionInner>
    </SectionContainer>
  )
}
