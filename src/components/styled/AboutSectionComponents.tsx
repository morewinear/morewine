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
    grid-template-rows: 20vh 1fr;
  }
`

export const ImageContainer = styled.div`
  
`