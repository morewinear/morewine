import { useRouter } from 'next/router'

import Section from '../../components/Section'
import LayoutHandler from '../../components/LayoutHandler'

import { VarietalDictionary, } from '../../data/CellarsData'

export default function Linea(): JSX.Element {
  const router = useRouter()
  const { varietal } = router['query']

  return (
    <>
      <LayoutHandler title={`${varietal && VarietalDictionary[varietal.toString()]} – More Wine`}>
        <Section>
          {varietal && VarietalDictionary[varietal.toString()]}
        </Section>
      </LayoutHandler>
    </>
  )
}