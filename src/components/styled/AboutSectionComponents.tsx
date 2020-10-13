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

  &[data-bold] {
    font-weight: 700;
  }

  &[data-italic] {
    font-style: italic;
  }
`