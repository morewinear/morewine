import Section from './Section'

import {
  AboutSectionContainer,
} from './styled/AboutSectionComponents'

type AboutSectionType = {
  id: string,
}

export default function AboutSection({ }: AboutSectionType): JSX.Element {
  return (
    <>
      <Section id={'nosotros'}>
        <AboutSectionContainer>
          hdasjhdjak
        </AboutSectionContainer>
      </Section>
    </>
  )
}