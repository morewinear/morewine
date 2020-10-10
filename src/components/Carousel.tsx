import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react"
import { useTransition } from "react-spring"

import {
  CarouselContainer,
  CellarName,
  ImagesContainer,
  ImageContainer,
  ImageBackground,
} from './styled/CarouselComponents'

type Slide = {
  img: string,
  offset: string,
  id: string,
}

export default function Carousel({ cellar, images, callback: sectionCallback }: { cellar: string, images: Slide[], callback: Dispatch<SetStateAction<string>> }): JSX.Element {
  const [slide, setSlide] = useState(0)

  const slides = useMemo(() => {
    return images.map(({ img, offset, id }, index: number) => {
      return ({ style }: { style: Record<string, unknown> }) => {
        return (
          <ImageContainer key={index} style={{ ...style }}>
            <ImageBackground image={img} offset={offset} data-id={id} data-image />
          </ImageContainer>
        )
      }
    })
  }, [images])

  useEffect(() => {
    const updater = setInterval(() => {
      setSlide(slide => (slide + 1) % images.length)
    }, 3000 + (Math.random() * 2000))

    return () => clearInterval(updater)
  }, [images])

  const onClick = ({ target }: Record<string, any>) => {
    const { id } = target['dataset']
    if (!id) return
    sectionCallback(id)
  }

  const transitions = useTransition(slide, props => props, {
    from: {
      transform: 'translate3d(100%,0,0)'
    },
    enter: {
      transform: 'translate3d(0%,0,0)'
    },
    leave: {
      transform: 'translate3d(-100%,0,0)'
    },
    config: {
      tension: 300,
      friction: 20
    }
  })

  return (
    <>
      <CarouselContainer onClick={onClick}>
        <CellarName data-cellar>{cellar}</CellarName>
        <ImagesContainer>
          {
            transitions.map(({ item, props, key }) => {
              if (!slides) return
              const SelectedSlide = slides[item]
              return <SelectedSlide key={key} style={{ ...props }} />
            })
          }
        </ImagesContainer>
      </CarouselContainer>
    </>
  )
}