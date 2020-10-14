import LayoutHandler from '../components/LayoutHandler'
import AboutSection from '../components/AboutSection'

export default function Nosotros(): JSX.Element {
  return (
    <>
      <LayoutHandler title={'Nosotros – More Wine'}>
        <AboutSection />
      </LayoutHandler>
    </>
  )
}