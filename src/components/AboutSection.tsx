import Section from './Section'

import {
  AboutSectionContainer,
  ImageContainer,
  StoryContainer,
  Text,
} from './styled/AboutSectionComponents'

type AboutSectionType = {
  id: string,
}

export default function AboutSection({ }: AboutSectionType): JSX.Element {
  return (
    <>
      <Section id={'nosotros'}>
        <AboutSectionContainer>
          <ImageContainer background={require('../public/images/cellars/cadus-background-1.png')}>

          </ImageContainer>
          <StoryContainer>
            <Text>Somos una empresa joven, nacida a partir de una premisa:</Text>
            <Text data-bold>Comercializar vinos de calidad premium al mejor precio del mercado.</Text>
            <Text>Comprometidos con la calidad y la excelencia, entendemos el significado de disfrutar cada momento en compañía de nuestros afectos.</Text>
            <Text data-italic data-bold>Y más aún, con un buen vino. </Text>
          </StoryContainer>
        </AboutSectionContainer>
      </Section>
    </>
  )
}