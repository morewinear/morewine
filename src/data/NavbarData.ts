import { faWhatsapp, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const AboutMenuData = [
  {
    name: 'Nuestra historia',
    link: '/nosotros',
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
  link: string,
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
        link: '/linea/nieto-senetiner',
      },
      {
        name: 'Salentein',
        link: '/linea/salentein',
      },
      {
        name: 'La Mascota',
        link: '/linea/la-mascota',
      },
      {
        name: 'Mosquita Muerta',
        link: '/linea/mosquita-muerta',
      },
      {
        name: 'Cadus',
        link: '/linea/cadus',
      },
      {
        name: 'Viña Cobos',
        link: '/linea/vina-cobos',
      },
    ],
  },
  {
    name: 'Varietales',
    link: '/varietales',
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
      {
        name: 'Tempranillo',
        link: '/varietal/tempranillo',
      },
      {
        name: 'Merlot',
        link: '/varietal/merlot',
      }
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