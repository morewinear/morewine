import styled from 'styled-components'

export const AboutSectionContainer = styled.div`
  background-color: #111111;
  width: calc(100%);
  height: calc(100% - 10px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "image" "story";

  @media (max-width: 519px) {
    grid-template-columns: 1fr;
    grid-template-rows: 30vh 1fr;
  }
`

type ImageContainerType = {
  background: string,
}

export const ImageContainer = styled.div<ImageContainerType>`
  background-image: url('${({ background }) => background}');
  background-position: 50%;
  background-size: cover;
  grid-area: 'image';
  background-color: orange;
`

export const StoryContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: 'story';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  width: 75%;
  color: white;
  opacity: 0.6;
  font-weight: 400;
  font-size: calc(1.65 * 0.813em);
  margin: 1.15vh 0;
  text-align: center;
  font-family: 'Minion Pro Italic';

  &[data-bold] {
    font-weight: 700;
  }
`

export const SignaturesContainer = styled.div`
  height: 15%;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-top: 5vh;

  & > svg {
    width: 100%;
    height: 100%;

    & > path {
      fill: darkgray;
    }
  }

  @media (max-width: 519px) {
    height: 35%;
    width: 35%;
    margin-top: 0.25vh;
  }
`