export const CellarDictionary: { [key: string]: string } = {
  'nieto-senetiner': 'Nieto Senetiner',
  'salentein': 'Salentein',
  'mascota': 'La Mascota',
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

export const CarouselData = [
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

type CellarDataType = {
  name: string,
  logo: any,
  background: string[],
  web: string,
  description: [string, number, number][],
}

export const CellarData: { [key: string]: CellarDataType } = {
  'nieto-senetiner': {
    name: 'Nieto Senetiner',
    logo: require('../public/images/cellars/nieto-logo.svg'),
    background: [
      require('../public/images/cellars/nieto-background-1.png'),
      require('../public/images/cellars/nieto-background-2.png'),
      require('../public/images/cellars/nieto-background-3.png'),
    ],
    web: 'https://www.nietosenetiner.com.ar/',
    description: [
      ['El reloj comenzó a girar un día de 1888 en Vistalba, Luján de Cuyo, cuando un grupo de inmigrantes italianos hundió sus manos en la tierra para plantar los primeros viñedos y fundar una nueva bodega.', 1.25, 0.25],
      ['Desde ese primer día, diferentes familias fueron transmitiéndose, unas a otras, los secretos de la elaboración de grandes vinos: un profundo amor por la naturaleza, el respeto por la esencia de cada terroir y el valor de la espera.', 0.25, 1.25],
      ['En 1969, las familias Nieto y Senetiner adquirieron la finca y comenzaron a escribir un nuevo capítulo de crecimiento y desarrollo. Ampliaron las instalaciones y consolidaron una presencia que ya se había vuelto ineludible en la historia de los grandes vinos argentinos.', 1.25, 1.25],
      ['En 1998, Nieto Senetiner pasó a formar parte del Grupo de Bodegas de la familia Pérez Companc. Comprometido con los más altos estándares de elaboración y calidad del vino, y sustentados en un plan continuo de inversiones, tanto en fincas como en tecnología de procesos, Nieto Senetiner consolida desde entonces su liderazgo, sin renunciar a los nobles atributos que forjaron su origen y marcaron su tiempo.', 1.25, 1.25],
    ],
  },
  'salentein': {
    name: 'Salentein',
    logo: require('../public/images/cellars/salentein-logo.svg'),
    background: [
      require('../public/images/cellars/salentein-background-1.png'),
      require('../public/images/cellars/salentein-background-2.png'),
      require('../public/images/cellars/salentein-background-3.png'),
    ],
    web: 'http://bodegasalentein.com/',
    description: [
      ['El objetivo de Bodegas Salentein es claro: elaborar vinos de la más alta calidad, comprometidos con la tierra en la que nacen. Durante su elaboración, Salentein respeta la naturaleza y, al mismo tiempo, se involucra con la comunidad de la zona; porque la gente se convierte en un componente esencial que se refleja en la expresión de los vinos.', 1.25, 1.25],
      ['En sus viñedos situados en el Valle de Uco en el corazón de la provincia de Mendoza, Bodegas Salentein ha comenzado a transformar la vitivinicultura de la Argentina.', 1.25, 0.25],
      ['La tierra en esta región es franco arenosa, y el clima seco, con días muy calurosos y noches muy frescas. La presencia de más de 900 bodegas y 145 mil hectáreas de viñedos explican por qué esta zona es el área vitivinícola más importante del país. Sin embargo, esta tierra todavía tiene mucho por decir.', 0.25, 1.25],
      ['Así lo cree Bodegas Salentein, y obra en consecuencia, difundiendo a nivel internacional el surgimiento de bodegas de primera línea en la Argentina.', 1.25, 1.25],
    ],
  },
  'mascota': {
    name: 'La Mascota',
    logo: require('../public/images/cellars/mascota-logo.svg'),
    background: [
      require('../public/images/cellars/mascota-background-1.png'),
      require('../public/images/cellars/mascota-background-2.png'),
      require('../public/images/cellars/mascota-background-3.png'),
    ],
    web: 'https://www.mascotavineyards.com.ar/',
    description: [
      ['En el año 2005, con la visión de convertirse en una bodega argentina Premium de vinos de autor, orientada al mercado externo, un equipo de agrónomos y enólogos comenzaron a trabajar en un viñedo llamado Finca La Mascota, ubicado en Cruz de Piedra, en Maipú, provincia de Mendoza, Argentina.', 1.25, 1.25],
      ['Los vinos de Mascota Vineyards reflejan la pasión con la que fueron concebidos y la singular afluencia ejercida por su región de origen.', 1.25, 1.25],
      ['Mascota Vineyards encierra una mística particular: revela en sus vinos la obra de un autor. Ejemplares únicos e irreproducibles, en los que se traducen los conocimientos técnicos, estilo y personalidad de un autor.', 1.25, 1.25],
    ],
  },
  'mosquita-muerta': {
    name: 'Mosquita Muerta',
    logo: require('../public/images/cellars/mosquita-logo.svg'),
    background: [
      require('../public/images/cellars/mosquita-background-1.png'),
      require('../public/images/cellars/mosquita-background-2.png'),
      require('../public/images/cellars/mosquita-background-3.png'),
    ],
    web: 'http://www.mosquitamuertawines.com/',
    description: [
      ['El proyecto Mosquita Muerta comienza en 2010 de la mano de José Millan (hijo).', 1.25, 1.25],
      ['El mismo está focalizado en la elaboración de Blends Premium. Para ello se realiza una cuidadosa selección de diferentes variedades ubicadas en Viñedos propios y de terceros en las zonas más importantes de Mendoza.', 1.25, 1.25],
      ['Malbec, Cabernet Sauvignon, Cabernet Franc, Syrah, Bonarda y Merlot son algunas de las variedades tintas que se utilizan para darle vida a los 4 Vinos tintos que componen este proyecto.', 1.25, 1.25],
      ['A partir de 2014 se comenzó a trabajar con uvas blancas como Chardonnay, Viognier, Sauvignon Blanc y Moscatel de Alejandría para la elaboración de una serie de Vinos blancos que fueron lanzados al mercado a fines de 2015.', 1.25, 1.25],
      ['Viñedos ubicados en Gualtallary, Vista Flores, Chacayes, Tupungato, La Consulta, Los Arboles, Altamira, Perdriel y Medrano son los que le dan vida a este emprendimiento.', 1.25, 1.25],
    ],
  },
  'cadus': {
    name: 'Cadus',
    logo: require('../public/images/cellars/cadus-logo.svg'),
    background: [
      require('../public/images/cellars/cadus-background-1.png'),
      require('../public/images/cellars/cadus-background-2.png'),
      require('../public/images/cellars/cadus-background-3.png'),
    ],
    web: 'https://www.caduswines.com/',
    description: [
      ['Cadus era el nombre en latín de las ánforas que contenían partidas limitadas y especiales de vino en la Antigua Roma. Bajo ese mismo espíritu nació CADUS, y durante dos décadas se destacó como el vino ícono de la histórica bodega mendocina Nieto Senetiner.', 1.25, 1.25],
      ['Hoy, Cadus Wines reafirma una trayectoria que lleva 20 años arando un camino propio, y es una bodega independiente, que, a través de partidas limitadas de vinos de autor, logra expresar las singulares características de las más virtuosas fincas precordilleranas.', 1.25, 1.25],
    ],
  },
  'cobos': {
    name: 'Viña Cobos',
    logo: require('../public/images/cellars/cobos-logo.svg'),
    background: [
      require('../public/images/cellars/cobos-background-1.png'),
      require('../public/images/cellars/cobos-background-2.png'),
      require('../public/images/cellars/cobos-background-3.png'),
    ],
    web: 'http://vinacobos.com/',
    description: [
      ['Viña Cobos es la visión de un soñador que un día asumió el desafío de elaborar vinos como nunca antes en Argentina.', 1.25, 1.25],
      ['Viña Cobos elabora vinos que expresan naturalmente el terruño del que provienen. Paul Hobbs, socio fundador y enólogo de Viña Cobos, trabaja desde 1988 en la exploración de los distintos terroirs de Mendoza, buscando las regiones más destacadas dentro de Luján de Cuyo y Valle de Uco, para la elaboración de vinos únicos.', 1.25, 0.25],
      ['Un manejo sustentable del viñedo permite lograr cosechas equilibradas y fruta de gran calidad, a partir de allí un trato cuidadoso de la uva y un meticuloso proceso de elaboración, da lugar a vinos complejos y elegantes, de gran sutileza y balance.', 0.25, 1.25],
      ['Desde la primera cosecha de Cobos Malbec en 1999, Viña Cobos ha marcado un hito en la vitivinicultura, desafiando los límites de la calidad para ubicar a la Argentina al lado de los grandes productores del mundo. Actualmente su prestigio es reconocido tanto por la crítica como por los consumidores alrededor del mundo.', 1.25, 1.25],
    ],
  }
}