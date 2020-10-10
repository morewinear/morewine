import Section from './Section'

import {
  CellarInfoContainer,
} from './styled/CellarInfoSectionComponents'

type CellarWineInfoType = {
  id: string,
}

export default function CellarWineInfo({ id }: CellarWineInfoType): JSX.Element {
  return (
    <>
      <Section id={id}>
        <CellarInfoContainer>
          {id}
        </CellarInfoContainer>
      </Section>
    </>
  )
}