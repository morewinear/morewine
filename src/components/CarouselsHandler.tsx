import { CarouselsContainer } from './styled/CarouselsHandlerComponents'
import Carousel from './Carousel'
import Section from './Section'

import { CarouselData } from '../data/CellarsData'
import { Dispatch, SetStateAction } from 'react'

export default function CarouselsHandler({ sectionCallback }: { sectionCallback: Dispatch<SetStateAction<string>> }): JSX.Element {
  return (
    <>
      <Section>
        <CarouselsContainer>
          {
            CarouselData.map(({ name, images }, index: number) => {
              return <Carousel key={index} cellar={name} images={images} callback={sectionCallback} />
            })
          }
        </CarouselsContainer>
      </Section>
    </>
  )
}