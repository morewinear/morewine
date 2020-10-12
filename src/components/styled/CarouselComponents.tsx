import styled from 'styled-components'
import { animated } from 'react-spring'

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &:hover {
    cursor: pointer;

    & > p[data-cellar] {
      opacity: 1;
    }

    &  div[data-image] {
      transform: scale(1.1);
    }
  }
`

export const CellarName = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  position: absolute;
  top: 50%;
  margin: 0px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.813em;
  letter-spacing: 0.08em;
  transition: all .2s ease-in-out;
  opacity: 0;
  color: white;
  z-index: 99999;
`

export const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
`

export const ImageContainer = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
`

type ImageBackgroundType = {
  image: string,
  offset: string,
}

export const ImageBackground = styled.div<ImageBackgroundType>`
  width: 100%;
  height: 100%;
  transition: all .2s ease-in-out;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: ${({ offset }) => offset}% 50%;
  will-change: transform;
`