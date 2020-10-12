import { useEffect, useState } from 'react'

import CarouselsHandler from '../components/CarouselsHandler'
import WineInfoSection from '../components/WineInfoSection'
import AboutSection from '../components/AboutSection'

import LayoutHandler from '../components/LayoutHandler'

import { WineData } from '../data/WineData'
import { CellarData } from '../data/CellarsData'

const offset = Math.floor(Math.random() * 3)

export default function Index(): JSX.Element {

  const [selectedSection, setSelectedSection] = useState('')

  useEffect(() => {
    let { hash: section } = location
    if (!section) return
    section = section.replaceAll('#', '')
    console.log(section)
    setSelectedSection(section)
  }, [])

  useEffect(() => {
    if (!window) return
    const onHashChange = ({ newURL }: { newURL: string }) => {
      console.log(newURL)
      setSelectedSection(newURL.split('#')[1])
    }

    window.addEventListener('hashchange', onHashChange, false)

    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <LayoutHandler title={'More Wine'} scrollToSection={selectedSection} carouselCallback={setSelectedSection} sort={true} accumulateSpeed={false}>
        <CarouselsHandler sectionCallback={setSelectedSection} />
        {
          Object.keys(WineData).map((key, index) => {
            const { img, cellar, description, datasheet, web, store } = WineData[key]
            const { background, logo } = CellarData[cellar]
            return <WineInfoSection key={index} id={key} img={img} background={background[(index + offset) % 3]} logo={logo} description={description} datasheet={datasheet} web={web} store={store} />
          })
        }
        <AboutSection id={'nosotros'} />
      </LayoutHandler>
    </>
  )
}