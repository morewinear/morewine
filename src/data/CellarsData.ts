export const CellarDictionary: { [key: string]: string } = {
  'nieto-senetiner': 'Nieto Senetiner',
  'salentein': 'Salentein',
  'la-mascota': 'La Mascota',
  'mosquita-muerta': 'Mosquita Muerta',
  'cadus': 'Cadus',
  'vina-cobos': 'Viña Cobos',
}

export const VarietalDictionary: { [key: string]: string } = {
  'malbec': 'Malbec',
  'cabernet-franc': 'Cabernet Franc',
  'cabernet-sauvignon': 'Cabernet Sauvignon',
  'blend': 'Blend',
  'bonarda': 'Bonarda',
  'tempranillo': 'Tempranillo',
  'merlot': 'Merlot',
}

export const CellarData = [
  {
    name: 'Nieto Senetiner',
    images: [
      {
        img: require('../public/images/carousel/SENETINER1.png'),
        offset: '50',
        id: 'nieto_nicanor_malbec'
      },
      {
        img: require('../public/images/carousel/SENETINER2.png'),
        offset: '50',
        id: 'nieto_limitada_bonarda'
      },
      {
        img: require('../public/images/carousel/SENETINER3.png'),
        offset: '50',
        id: 'nieto_nicanor_barrel'
      },
    ]
  },
  {
    name: 'Salentein',
    images: [
      {
        img: require('../public/images/carousel/SALENTEIN1.png'),
        offset: '50',
        id: 'salentein_reserva_malbec'
      },
      {
        img: require('../public/images/carousel/SALENTEIN2.png'),
        offset: '50',
        id: 'salentein_grandvu_blend'
      },
      {
        img: require('../public/images/carousel/SALENTEIN3.png'),
        offset: '50',
        id: 'salentein_reserva_blend'
      },
    ]
  },
  {
    name: 'La Mascota',
    images: [
      {
        img: require('../public/images/carousel/MASCOTA1.png'),
        offset: '50',
        id: 'mascota_mascota_cabernet'
      },
      {
        img: require('../public/images/carousel/MASCOTA2.png'),
        offset: '50',
        id: 'mascota_unanime_tinto'
      },
      {
        img: require('../public/images/carousel/MASCOTA3.png'),
        offset: '50',
        id: 'mascota_granmascota_malbec'
      },
    ]
  },
  {
    name: 'Mosquita Muerta',
    images: [
      {
        img: require('../public/images/carousel/MOSQUITA1.png'),
        offset: '50',
        id: 'mosquita_perro_blend'
      },
      {
        img: require('../public/images/carousel/MOSQUITA2.png'),
        offset: '50',
        id: 'mosquita_mosquita_blend'
      },
      {
        img: require('../public/images/carousel/MOSQUITA3.png'),
        offset: '50',
        id: 'mosquita_malcriado_malbec'
      },
    ]
  },
  {
    name: 'Cadus',
    images: [
      {
        img: require('../public/images/carousel/CADUS1.png'),
        offset: '50',
        id: 'cadus_tupungato_malbec'
      },
      {
        img: require('../public/images/carousel/CADUS2.png'),
        offset: '50',
        id: 'cadus_chacayes_malbec'
      },
      {
        img: require('../public/images/carousel/CADUS3.png'),
        offset: '50',
        id: 'cadus_tocazas_malbec'
      },
    ]
  },
  {
    name: 'Viña Cobos',
    images: [
      {
        img: require('../public/images/carousel/Bramare1.png'),
        offset: '50',
        id: 'cobos_bramare_malbec'
      },
      {
        img: require('../public/images/carousel/Cocodrilo2.png'),
        offset: '50',
        id: 'cobos_cocodrilo_corte'
      },
      {
        img: require('../public/images/carousel/Felino3.png'),
        offset: '50',
        id: 'cobos_felino_malbec'
      },
    ]
  },
]