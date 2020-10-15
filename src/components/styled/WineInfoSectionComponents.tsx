import styled from 'styled-components'
import { animated } from 'react-spring'

export const WineInfoContainer = styled.div`
  background-color: #111111;
  width: 100%;
  height: calc(100% - 10px);
  display: grid;
  gap: 0px 4px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  @media (max-width: 519px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 4px 4px;
  }
`

type CellarContainerType = {
  background: string,
}

export const CellarContainer = styled.div<CellarContainerType>`
  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-color: rgba(17, 17, 17, 0.6);
  background-blend-mode: darken;
  transition: all .4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(17, 17, 17, 0.2);
  }  

  & > svg {
    width: 35%;
  }

  @media (max-width: 519px) {
    display: none;
  }
`

export const WineContainer = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  gap: 0px 4px;
  grid-template-columns: 0.75fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'image' 'description';

  @media (max-width: 519px) {
    grid-template-columns: 1fr;
    grid-template-rows: .75fr 1fr;
    gap: 4px 0px;
  }
`

type WineImageType = {
  background: string,
}

export const WineImage = styled(animated.div)<WineImageType>`
  background-image: url('${({ background }) => background}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  height: calc(100% - 2 * 8px);
  width: 100%;
  margin: auto;
  filter: drop-shadow(0 0 0.6em #2d2d2d);

  @media (max-width: 519px) {
    margin-top: 38px;
  }
`

export const InfoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 519px) {
    justify-content: unset;
  }
`

export const DescriptionContainer = styled(animated.p)`
  width: 100%;
  max-width: 570px;
  padding-right: 16px;
  font-size: calc(1.45 * 0.813em);
  font-weight: 500;
  font-style: italic;
  line-height: 2;
  margin-bottom: 8vmax;
  color: white;
  opacity: 0.6;
  font-family: 'Minion Pro Italic';
  margin-top: -1vmin;

  @media (max-width: 519px) {
    margin-top: 15%;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
    font-size: 3.4vmin;
    line-height: 1.75;
  }
`

export const LinksContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 570px;
  bottom: 10vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 519px) {
    padding-left: 10%;
    padding-right: 5%;
    bottom: 12%;
  }
`

export const LinkContainer = styled(animated.a)`
  margin: 12px 0;
  color: white;
  opacity: 0.8 !important;
  text-transform: uppercase;
  text-decoration: none;
  font-size: calc(0.9 * 0.813em);
  font-weight: 700;
  letter-spacing: 0.08em;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 519px) {
    font-size: 2.5vmin;
  }
`