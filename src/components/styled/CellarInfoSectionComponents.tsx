import styled from 'styled-components'

export const CellarInfoContainer = styled.div`
  background-color: #111111;
  width: calc(100%);
  height: calc(100% - 10px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "image" "story";

  @media (max-width: 519px) {
    grid-template-columns: 1fr;
    grid-template-rows: 20vh 1fr;
  }
`

type BackgroundContainerType = {
  background: string,
}

export const BackgroundContainer = styled.div<BackgroundContainerType>`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-color: rgba(17, 17, 17, 0.6);
  background-blend-mode: darken;
  transition: all .4s ease-in-out;
  grid-area: "image";

  &:hover {
    background-color: rgba(17, 17, 17, 0.2);
  }
`

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoLink = styled.a`
  width: 35%;

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export const StoryContainer = styled.div`
  height: 100%;
  background-color: #111111;
  grid-area: "story";
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  position: relative;
`

export const TitleContainer = styled.p`
  color: white;
  opacity: 0.6;
  font-size: 24px;
  line-height: 1.85;
  text-transform: uppercase;
  margin: 1.25vh 10%;

  @media (max-width: 519px) {
    font-size: 0.95em;
    margin: 0.75vh 10%;
    text-align: center;
  }
`

type DescriptionTextType = {
  top: number,
  bottom: number,
}

export const DescriptionText = styled.p<DescriptionTextType>`
  color: white;
  opacity: 0.6;
  font-size: 16px;
  line-height: 1.85;
  margin: 0 10%;
  margin-top: ${({ top }) => top}vh;
  margin-bottom: ${({ bottom }) => bottom}vh;
  font-family: 'Minion Pro Italic';

  @media (max-width: 519px) {
    font-size: 0.85em;
    text-align: center;
    margin: 0 5%;
  }
`