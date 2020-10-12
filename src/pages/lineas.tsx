import { useEffect, useState } from 'react'

import LayoutHandler from '../components/LayoutHandler'
import CellarInfoSection from '../components/CellarInfoSection'
import CellarSection from '../components/CellarSection'

import { CellarData } from '../data/CellarsData'

export default function Lineas(): JSX.Element {

  const [selectedSection, setSelectedSection] = useState<string>('')

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
      setSelectedSection(newURL.split('#')[1])
    }

    window.addEventListener('hashchange', onHashChange, false)

    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])


  return (
    <>
      <LayoutHandler title={'Líneas – More Wine'} scrollToSection={selectedSection} carouselCallback={setSelectedSection} accumulateSpeed={true}>
        <CellarSection />
        {
          Object.keys(CellarData).map((key, index: number) => {
            const { background, logo, description, web } = CellarData[key]
            return <CellarInfoSection key={index} id={key} background={background[0]} description={description} logo={logo} web={web} />
          })
        }
      </LayoutHandler>
    </>
  )
}