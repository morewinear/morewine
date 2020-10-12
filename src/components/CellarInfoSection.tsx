import Section from './Section'

import {
  CellarInfoContainer,
  BackgroundContainer,
  LogoContainer,
  LogoLink,
  StoryContainer,
  TitleContainer,
  DescriptionText,
} from './styled/CellarInfoSectionComponents'

type CellarWineInfoType = {
  id: string,
  background: string,
  logo: any,
  description: [string, number, number][],
  web: string,
}

export default function CellarWineInfo({ id, background, logo: { default: Logo }, description, web }: CellarWineInfoType): JSX.Element {
  return (
    <>
      <Section id={id}>
        <CellarInfoContainer>
          <BackgroundContainer background={background}>
            <LogoContainer>
              <LogoLink href={web} target={'_blank'}>
                <Logo />
              </LogoLink>
            </LogoContainer>
          </BackgroundContainer>
          <StoryContainer>
            <TitleContainer>Historia</TitleContainer>
            {
              description.map(([text, top, bottom], index: number) => {
                return <DescriptionText key={index} top={top} bottom={bottom}>{text}</DescriptionText>
              })
            }
          </StoryContainer>
        </CellarInfoContainer>
      </Section>
    </>
  )
}