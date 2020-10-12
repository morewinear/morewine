import Section from './Section'

import {
  CellarsContainer,
  CellarBackground,
  CellarLogoContainer,
  CellarLogoAnchor,
} from './styled/CellarSectionComponents'

import { CellarData } from '../data/CellarsData'

export default function CellarSection(): JSX.Element {
  return (
    <>
      <Section>
        <CellarsContainer>
          {
            Object.keys(CellarData).map((key, index: number) => {
              const { background, logo: { default: Logo } } = CellarData[key]
              return (
                <CellarBackground key={index} background={background[0]}>
                  <CellarLogoContainer>
                    <CellarLogoAnchor href={`#${key}`}>
                      <Logo />
                    </CellarLogoAnchor>
                  </CellarLogoContainer>
                </CellarBackground>
              )
            })
          }
        </CellarsContainer>
      </Section>
    </>
  )
}