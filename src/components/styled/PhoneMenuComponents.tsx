import { animated } from 'react-spring'
import styled from 'styled-components'

export const MenuButton = styled(animated.div)`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 12px;
  top: calc((72px - 48px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 70% !important;
    height: 70% !important;
    color: white;
    opacity: 0.4;
  }
`

export const MenuItemHolder = styled.div`
  visibility: hidden;
  position: fixed;
  width: 100%;
  height: calc(100% - 72px);
  top: 72px;
  left: 0;
  background-color: #111111;
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  overflow-y: auto;

  &[data-show=true] {
    visibility: visible;
  }

  @media (min-width: 520px) {
    visibility: hidden;
  }
`

const MenuItemGeneric = styled.a`
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  text-decoration: none;
  font-size: calc(1.5 * 0.813em);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-align: right;
`

export const ItemContainer = styled.div`
  width: 100%;
  margin-bottom: 4vmin;
  display: flex;
  flex-direction: column;
  padding-right: 16px;
`

export const MenuItem = styled(MenuItemGeneric)`
  &:not(:only-child) {
    margin-bottom: 4vmin;
  }
`

export const SubMenuItem = styled(MenuItemGeneric)`
  font-size: calc(1.15 * 0.813em);
  margin-bottom: 2.75vmin;

  &:after {
    content: '·';
    font-size: calc(1.35 * 0.813em);
    margin-left: 5px;
  }
`

export const SocialHolder = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;

  & > a {
    height: 38px;
    width: 38px;
    margin-left: 5px;
    margin-right: 15px;

    & > svg {
      width: 100% !important;
      height: 100% !important;
      color: white;
      opacity: 0.6;
    }
  }
`