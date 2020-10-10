import { CarouselsContainer } from './styled/CarouselsHandlerComponents'
import Carousel from './Carousel'

import { CellarData } from '../data/CellarsData'
import { Dispatch, SetStateAction } from 'react'

export default function CarouselsHandler({ sectionCallback }: { sectionCallback: Dispatch<SetStateAction<string>> }): JSX.Element {
  return (
    <>
      <CarouselsContainer>
        {
          CellarData.map(({ name, images }, index: number) => {
            return <Carousel key={index} cellar={name} images={images} callback={sectionCallback} />
          })
        }
      </CarouselsContainer>
    </>
  )
}