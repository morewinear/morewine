import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000000;
  backdrop-filter: blur(30px) grayscale(100%);
  background-color: rgba(17, 17, 17, 0.65);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &[data-show=true] {
    display: flex;
  }
`

export const LogoContainer = styled.a`
  & > svg {
    transform: scale(0.75);
  }
`

export const DisclaimerContainer = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 16px 0px;
  margin: 64px 0px;
`

export const Title = styled.p`
  width: 100%;
  height: 32px;
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  font-size: calc(2 * 0.813em);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.08em;
  margin: 0;
  text-align: center;
`

export const OptionsContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  margin: 32px 0px;
`

export const Option = styled.button`
  width: 50%;
  max-width: 150px;
  height: 100%;
  text-transform: uppercase;
  font-size: 0.813em;
  font-weight: 500;
  line-height: 1.85;
  letter-spacing: 0.08em;
  border: none;
  border-radius: 2.5%;

  &:hover {
    cursor: pointer;
  }
`

export const RememberContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
`

export const Remember = styled.input`
  color: white;
  opacity: 0.6;
`

export const RememberLabel = styled.label`
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  font-size: calc(0.9 * 0.813em);
  font-weight: 500;
  letter-spacing: 0.08em;
`

export const BottomDisclaimer = styled.div`
  width: calc(100% - 2 * 4px);
  height: 48px;
  background-color: #111111;
  padding: 4px;
  color: white;
  text-transform: uppercase;
  font-size: calc(0.8 * 0.813em);
  font-weight: 500;
  letter-spacing: 0.08em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`