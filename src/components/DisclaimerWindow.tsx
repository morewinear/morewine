import { useCallback, useEffect, useState } from 'react'

import {
  BackgroundContainer,
  LogoContainer,
  DisclaimerContainer,
  Title,
  OptionsContainer,
  Option,
  RememberContainer,
  Remember,
  RememberLabel,
  BottomDisclaimer,
} from './styled/DisclaimerWindowComponents'

import Logo from '../public/images/logo.svg'

export default function DisclaimerWindow(): JSX.Element {
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false)
  const [remeberAnwser, setRemeberAnwser] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const storage = window.localStorage
    const shouldShowDisclaimer = storage.getItem('showdisclaimer')
    if (typeof shouldShowDisclaimer === 'object') return setShowDisclaimer(true)
    setShowDisclaimer(shouldShowDisclaimer != 'false')
  }, [])

  const toggleDisclaimer = useCallback(() => {
    setShowDisclaimer(false)
    if (!remeberAnwser) return
    if (typeof window === 'undefined') return
    const storage = window.localStorage
    try {
      storage.setItem('showdisclaimer', 'false')
    } catch (error) {
      console.error(error)
    }
  }, [remeberAnwser])

  const toggleRemember = useCallback(() => {
    setRemeberAnwser((previous: boolean) => !previous)
  }, [])

  return (
    <>
      <BackgroundContainer data-show={showDisclaimer}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <DisclaimerContainer>
          <Title>¿Sos mayor de 18 años?</Title>
          <OptionsContainer>
            <Option onClick={toggleDisclaimer}>Sí</Option>
            <Option>No</Option>
          </OptionsContainer>
          <RememberContainer>
            <Remember type={'checkbox'} name={'remember'} onChange={toggleRemember} />
            <RememberLabel htmlFor={'remember'}>Recordar respuesta</RememberLabel>
          </RememberContainer>
        </DisclaimerContainer>
        <BottomDisclaimer>Beber con moderación · Prohibida su venta a menores de 18 años · Todos los derechos reservados 2020</BottomDisclaimer>
      </BackgroundContainer>
    </>
  )
}