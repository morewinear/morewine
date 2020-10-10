import styled from 'styled-components'
import { animated } from 'react-spring'

export const WineInfoContainer = styled.div`
  background-color: #111111;
  width: max-content;
  min-width: 70%;
  height: 90%;
  display: grid;
  gap: 0px 4px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'image' 'description';
  box-shadow: 0px 0px 10px 5px rgba(34,34,34,1);
`

export const WineImage = styled(animated.img)`
  height: calc(100% - 2 * 8px);
  margin: auto;
  filter: drop-shadow(0 0 0.6em #2d2d2d);
`

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const DescriptionContainer = styled(animated.p)`
  width: 100%;
  max-width: 570px;
  padding-right: 16px;
  font-size: calc(1.25 * 0.813em);
  font-weight: 500;
  font-style: italic;
  line-height: 2;
  margin-top: 5%;
  color: white;
  opacity: 0.6;
`

export const LinksContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 570px;
  bottom: 15%;
  display: flex;
  flex-direction: column;
`

export const LinkContainer = styled(animated.a)`
  margin: 12px 0;
  color: white;
  opacity: 0.6;
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
`