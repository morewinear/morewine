import Section from './Section'

import {
  AboutSectionContainer,
  ImageContainer,
  StoryContainer,
  Text,
} from './styled/AboutSectionComponents'

export default function AboutSection(): JSX.Element {
  return (
    <>
      <Section>
        <AboutSectionContainer>
          <ImageContainer background={require('../public/images/nosotros.png')}>

          </ImageContainer>
          <StoryContainer>
            <Text>Somos una empresa joven, nacida a partir de una premisa:</Text>
            <Text data-bold>Comercializar vinos de calidad premium al mejor precio del mercado.</Text>
            <Text>Comprometidos con la calidad y la excelencia, entendemos el significado de disfrutar cada momento en compañía de nuestros afectos.</Text>
            <Text data-bold>Y más aún, con un buen vino. </Text>
          </StoryContainer>
        </AboutSectionContainer>
      </Section>
    </>
  )
}