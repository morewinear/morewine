import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import {
  NavbarContainer,
  LogoContainer,
  AboutMenuContainer,
  AboutMenuItem,
  SocialMenuContainer,
  SocialMenuItem,
  WebMenuContainer,
  WebMenuItem,
  WebMenuSeparator,
  SubNavbarContainer,
  SubWebMenuContainer,
} from '../components/styled/NavbarComponents'

import DropdownMenu from '../components/DropdownMenu'

import PhoneMenu from '../components/PhoneMenu'

import { AboutMenuData, SocialMenuData, WebMenuData, WebMenuType } from '../data/NavbarData'

import Logo from '../public/images/logo.svg'

export default function Navbar({ shouldUpdate }: { shouldUpdate: boolean }): JSX.Element {

  return (
    <>
      <NavbarContainer data-update={shouldUpdate}>
        <Link href={'/'} passHref={true}>
          <LogoContainer data-logo>
            <Logo />
          </LogoContainer>
        </Link>
        <AboutMenuContainer data-about>
          {
            AboutMenuData.map(({ name, link }: { name: string, link: string }, index: number) => {
              return <AboutMenuItem key={index} href={link}>{name}</AboutMenuItem>
            })
          }
        </AboutMenuContainer>
        <SocialMenuContainer data-social>
          {SocialMenuData.map(({ icon, link }: { icon: IconDefinition, link: string }, index: number) => {
            return (
              <SocialMenuItem key={index} href={link}>
                <FontAwesomeIcon icon={icon} fixedWidth={true} />
              </SocialMenuItem>
            )
          })}
        </SocialMenuContainer>
        <WebMenuContainer data-menu>
          {WebMenuData.map(({ name, link, drop }: WebMenuType) => {
            return (
              <>
                <DropdownMenu drop={drop}>
                  <WebMenuItem href={link as string}>{name}</WebMenuItem>
                </DropdownMenu>
                <WebMenuSeparator>·</WebMenuSeparator>
              </>
            )
          })}
        </WebMenuContainer>
        <PhoneMenu />
      </NavbarContainer>
      <SubNavbarContainer data-update={!shouldUpdate}>
        <Link href={'/'} passHref={true}>
          <LogoContainer data-logo>
            <Logo />
          </LogoContainer>
        </Link>
        <SubWebMenuContainer>
          {WebMenuData.map(({ name, link, drop }: WebMenuType) => {
            return (
              <>
                <DropdownMenu drop={drop}>
                  <WebMenuItem href={link as string}>{name}</WebMenuItem>
                </DropdownMenu>
                <WebMenuSeparator>·</WebMenuSeparator>
              </>
            )
          })}
        </SubWebMenuContainer>
      </SubNavbarContainer>
    </>
  )
}