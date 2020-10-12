import { faWhatsapp, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const AboutMenuData = [
  {
    name: 'Nuestra historia',
    link: '/#nosotros',
  }
]

export const SocialMenuData = [
  {
    icon: faWhatsapp,
    link: 'https://wa.me/5491168372041',
  },
  {
    icon: faInstagram,
    link: 'https://instagram.com/morewine.ar/',
  },
  {
    icon: faFacebookF,
    link: 'https://facebook.com/morewine.ar/',
  },
  {
    icon: faEnvelope,
    link: 'mailto:info@morewine.ar',
  }
]

export type WebMenuType = {
  name: string,
  link: string | null,
  drop?: DropType[],
}

export type DropType = {
  name: string,
  link: string,
}

export const WebMenuData: WebMenuType[] = [
  {
    name: 'Líneas',
    link: '/lineas',
    drop: [
      {
        name: 'Nieto Senetiner',
        link: '/lineas#nieto-senetiner',
      },
      {
        name: 'Salentein',
        link: '/lineas#salentein',
      },
      {
        name: 'La Mascota',
        link: '/lineas#mascota',
      },
      {
        name: 'Mosquita Muerta',
        link: '/lineas#mosquita-muerta',
      },
      {
        name: 'Cadus',
        link: '/lineas#cadus',
      },
      {
        name: 'Viña Cobos',
        link: '/lineas#cobos',
      },
    ],
  },
  {
    name: 'Varietales',
    link: null,
    drop: [
      {
        name: 'Malbec',
        link: '/varietal/malbec',
      },
      {
        name: 'Cabernet Franc',
        link: '/varietal/cabernet-franc',
      },
      {
        name: 'Cabernet Sauvignon',
        link: '/varietal/cabernet-sauvignon',
      },
      {
        name: 'Blend',
        link: '/varietal/blend',
      },
      {
        name: 'Bonarda',
        link: '/varietal/bonarda',
      },
    ],
  },
  {
    name: 'Tienda',
    link: 'https://tienda.morewine.ar/',
  },
  {
    name: 'Contacto',
    link: '/contacto'
  }
]