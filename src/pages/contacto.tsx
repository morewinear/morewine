import LayoutHandler from '../components/LayoutHandler'

import ContactSection from '../components/ContactSection'

export default function Contacto(): JSX.Element {
  return (
    <>
      <LayoutHandler title={'Contacto – More Wine'}>
        <ContactSection />
      </LayoutHandler>
    </>
  )
}