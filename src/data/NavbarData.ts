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
        name: 'Bodegas Salentein',
        link: '/lineas#salentein',
      },
      {
        name: 'Cadus Wines',
        link: '/lineas#cadus',
      },
      {
        name: 'Mascota Vineyards',
        link: '/lineas#mascota',
      },
      {
        name: 'Mosquita Muerta Wines',
        link: '/lineas#mosquita-muerta',
      },
      {
        name: 'Nieto Senetiner',
        link: '/lineas#nieto-senetiner',
      },
      {
        name: 'Viña Cobos',
        link: '/lineas#cobos',
      },
    ],
  },
  {
    name: 'Varietal',
    link: null,
    drop: [
      {
        name: 'Malbec',
        link: 'https://tienda.morewine.ar/vinos/malbec/',
      },
      {
        name: 'Blend',
        link: 'https://tienda.morewine.ar/vinos/blend/',
      },
      {
        name: 'Bonarda',
        link: 'https://tienda.morewine.ar/vinos/bonarda/',
      },
      {
        name: 'Cabernet Franc',
        link: 'https://tienda.morewine.ar/vinos/cabernet-franc/',
      },
      {
        name: 'Cabernet Sauvignon',
        link: 'https://tienda.morewine.ar/vinos/cabernet-sauvignon/',
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