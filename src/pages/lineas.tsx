import { useEffect, useState } from 'react'

import LayoutHandler from '../components/LayoutHandler'
import CellarInfoSection from '../components/CellarInfoSection'
import Section from '../components/Section'

export default function Lineas(): JSX.Element {

  const [selectedSection, setSelectedSection] = useState<string>('')

  const S = [
    'aaaa',
    'bbbb',
    'cccc',
  ]

  useEffect(() => {
    if (!window) return
    let { hash: section } = window.location
    if (!section) return
    section = section.replaceAll('#', '')
    setSelectedSection(section)
  }, [])

  return (
    <>
      <LayoutHandler title={'Líneas – More Wine'} scrollToSection={selectedSection} carouselCallback={setSelectedSection}>
        <Section> </Section>
        {
          S.map((id, index) => {
            return <CellarInfoSection id={id} />
          })
        }
      </LayoutHandler>
    </>
  )
}