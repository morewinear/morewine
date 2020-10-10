import Section from '../components/Section'
import { useState } from 'react'

import CarouselsHandler from '../components/CarouselsHandler'
import WineInfoSection from '../components/WineInfoSection'

import LayoutHandler from '../components/LayoutHandler'

import { WineData } from '../data/WineData'

export default function Index(): JSX.Element {

  const [selectedSection, setSelectedSection] = useState('')

  return (
    <>
      <LayoutHandler title={'More Wine'} scrollToSection={selectedSection} carouselCallback={setSelectedSection}>
        <Section>
          <CarouselsHandler sectionCallback={setSelectedSection} />
        </Section>
        {
          Object.keys(WineData).map((key, index) => {
            const { img, description, datasheet, web, store } = WineData[key]
            return <WineInfoSection key={index} id={key} img={img} description={description} datasheet={datasheet} web={web} store={store} />
          })
        }
      </LayoutHandler>
    </>
  )
}