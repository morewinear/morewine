import Section from './Section'

import {
  AboutSectionContainer,
  ImageContainer,
  StoryContainer,
  Text,
  SignaturesContainer,
} from './styled/AboutSectionComponents'

import SignatureMJ from '../public/images/signatures/firma-mj.svg'
import SignatureMS from '../public/images/signatures/firma-ms.svg'


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
            <SignaturesContainer>
              <SignatureMJ />
              <SignatureMS />
            </SignaturesContainer>
          </StoryContainer>
        </AboutSectionContainer>
      </Section>
    </>
  )
}