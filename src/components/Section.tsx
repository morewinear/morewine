import { ReactNode } from 'react'
import {
  SectionContainer,
} from './styled/SectionComponents'

export type SectionType = {
  children: ReactNode | ReactNode[],
  id?: string,
}

export default function Section({ children }: SectionType): JSX.Element {
  return (
    <>
      <SectionContainer>
        {children}
      </SectionContainer>
    </>
  )
}