import Section from '../components/Section'
import { useState } from 'react'

import LayoutHandler from '../components/LayoutHandler'

export default function Varietales(): JSX.Element {

  const [selectedSection, setSelectedSection] = useState('')

  return (
    <>
      <LayoutHandler title={'Varietales – More Wine'} scrollToSection={selectedSection} carouselCallback={setSelectedSection}>
        
      </LayoutHandler>
    </>
  )
}