import { useCallback, useEffect, useState } from 'react'
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
import { useTransition } from 'react-spring'

export default function PhoneRightMenu(): JSX.Element {
  const [show, setShow] = useState<boolean>(false)
  const debounced = useDebounce<boolean>(show, 180)

  const toggleMenu = useCallback(() => {
    setShow(!show)
  }, [show])

  const IconTransition = useTransition(show, null, {
    from: {
      transform: 'rotate(0deg)',
      opacity: 0,
    },
    enter: {      transform: 'rotate(0deg)',
      opacity: 1,
    },
    leave: {
      transform: 'rotate(270deg)',
      opacity: 0,
    },
  })

  return (
    <>
      {
        IconTransition.map(({ item, key, props }) => {
          return (
            <MenuButton key={key} style={props} data-phone onClick={toggleMenu}>
              <FontAwesomeIcon icon={item ? faTimes : faBars} />
            </MenuButton>
          )
        })
      }
      <MenuItemHolder data-show={debounced}>
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

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}