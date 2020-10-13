import { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

import {
  MenuButton,
  MenuItemHolder,
  ItemContainer,
  MenuItem,
  SubMenuItem,
  SocialHolder,
} from './styled/PhoneMenuComponents'

import { AboutMenuData, SocialMenuData, WebMenuData } from '../data/NavbarData'

export default function PhoneRightMenu(): JSX.Element {
  const [show, setShow] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    setShow(!show)
  }, [show])

  return (
    <>
      <MenuButton data-phone onClick={toggleMenu}>
        <FontAwesomeIcon icon={show ? faTimes : faBars} />
      </MenuButton>
      <MenuItemHolder data-show={show}>
        {
          WebMenuData.map(({ name, link, drop }, index: number) => {
            return (
              <ItemContainer key={index}>
                <Link href={link || '#'} passHref>
                  <MenuItem onClick={toggleMenu}>{name}</MenuItem>
                </Link>
                {drop && drop.map(({ name: dropName, link: dropLink }, dropIndex: number) => {
                  return <SubMenuItem key={dropIndex} href={dropLink || '#'} onClick={toggleMenu}>{dropName}</SubMenuItem>
                })}
              </ItemContainer>
            )
          })
        }
        {
          AboutMenuData.map(({ name, link }, index: number) => {
            return (
              <ItemContainer key={index}>
                <MenuItem href={link} onClick={toggleMenu}>{name}</MenuItem>
              </ItemContainer>
            )
          })
        }
        <SocialHolder>
          {
            SocialMenuData.map(({ icon, link }, index: number) => {
              return (
                <a key={index} href={link}>
                  <FontAwesomeIcon icon={icon} />
                </a>
              )
            })
          }
        </SocialHolder>
      </MenuItemHolder>
    </>
  )
}