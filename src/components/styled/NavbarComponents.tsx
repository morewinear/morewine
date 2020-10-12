import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 52px;
  transition: all .2s ease-in-out;
  background-color: #111111;
  padding: 8px 5.55%;
  z-index: 100000;

  & > div[data-phone] {
    display: none;
  }

  &[data-update=true] {
    height: 72px;

    & > a[data-logo] {
      display: block;
    }

    & > div[data-about] {
      display: none;
    }

    & > div[data-social] {
      height: calc((72px - 2 * 8px) / 2 - 4px) !important;
    }

    & > div[data-menu] {
      display: flex;
    }
  }

  @media (max-width: 519px) {
    height: 72px !important;

    & > a[data-logo] {
      display: block;
      margin: auto;
      transform: scale(0.8);
    }

    & > div[data-about] {
      display: none !important;
    }

    & > div[data-social] {
      display: none !important;
    }

    & > div[data-menu] {
      display: none !important;
    }

    & > div[data-phone] {
      display: flex;
    }
  }
`

const MenuContainer = styled.div`
  position: absolute;
  height: calc(52px - 2 * 8px);
  transition: all .2s ease-in-out;
  width: max-content;
  display: flex;
  align-items: center;
  top: 8px;
`

const MenuItem = styled.a`
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  text-decoration: none;
  font-size: calc(0.9 * 0.813em);
  font-weight: 700;
  letter-spacing: 0.08em;
  transition: all .2s ease-in-out;
`

export const AboutMenuContainer = styled(MenuContainer)`
  transform: translateX(0.75em);

  &:before {
    content: '//';
    color: white;
    opacity: 0.4;
    font-size: calc(0.9 * 0.813em);
    font-weight: 700;
    letter-spacing: 0.08em;
    transform: translateX(-0.75em);
  }
`

export const AboutMenuItem = styled(MenuItem)`
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }

  &:not(:first-child) {
    margin-left: calc(1.5 * 0.375em);
  }
`


export const SocialMenuContainer = styled(MenuContainer)`
  right: 5.55%;
  justify-content: space-evenly;
`

export const SocialMenuItem = styled(MenuItem)`
  width: 20px;
  height: 20px;
  opacity: 1;
  margin-left: calc(1.5 * 0.375em);

  &:not(:last-child) {
    margin-right: calc(1.5 * 0.375em);
  }

  & > svg {
    width: 100%;
    height: 100%;
    color: white;
    opacity: 0.4;
    transition: all .2s ease-in-out;
    font-size: 1.313em;
      
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`


export const WebMenuContainer = styled(MenuContainer)`
  display: none;
  right: 5.55%;
  top: calc((72px - 2 * 8px) / 2 + 8px + 4px);
  height: calc((72px - 2 * 8px) / 2 - 4px) !important;
`

export const WebMenuItem = styled(MenuItem)`
  &:hover {
    opacity: 1;
  }
`

export const WebMenuSeparator = styled(MenuItem)`
  margin: 0 0.75em;

  &:last-child {
    display: none;
  }
`

export const SubNavbarContainer = styled.div`
  position: absolute;
  width: calc(100% - 2 * 5.55%);
  z-index: 100000;
  top: calc(52px + 1.5em);
  left: 5.55%;

  &[data-update=true] {
    & > a[data-logo] {
      display: block;
    }
  }

  &[data-update=false] {
    display: none;
  }

  @media (max-width: 519px) {
    display: none;
  }
`

export const LogoContainer = styled.a`
  display: none;
  width: max-content;

  & > svg {
    height: 60px;
    opacity: 0.4;
    transition: all .2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`

export const SubWebMenuContainer = styled(MenuContainer)`
  right: 0;
  top: 0;
  height: 15px;
`