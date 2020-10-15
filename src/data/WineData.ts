type WineDataType = {
  img: string,
  cellar: string,
  description: string,
  datasheet: string,
  store: string,
}

export const WineData: { [key: string]: WineDataType } = {
  "nieto_nicanor_malbec": {
    img: require('../public/images/wines/nieto_nicanor_malbec.png'),      //DONE
    cellar: 'nieto-senetiner',
    description: 'Este vino nace en nuestro viñedo de Vistalba plantado en 1900. Estas uvas logran por su antigüedad una madurez con armonía y equilibrio. En nariz, este vino presenta complejos aromas a frutos negros y violetas. En segundo plano se perciben suaves notas de especias, como resultado de su paso de 24 meses por barricas de roble Francés, lo que le otorga mayor elegancia y complejidad. Un clásico para tener en la cava y aprovechar en ocasiones muy puntuales.',
    datasheet: require('../public/datasheets/Nieto Senetiner Don Nicanor Single Vineyard Malbec.pdf'),
    store: 'https://tienda.morewine.ar/productos/don-nicanor-single-vineyard-finca-villa-la-blanca-malbec-2016/',
  },
  "nieto_limitada_bonarda": {
    img: require('../public/images/wines/nieto_limitada_bonarda.png'),    //DONE
    cellar: 'nieto-senetiner',
    description: 'En un viñedo de Agrelo, cultivándose con cuidado y paciencia desde 1973, empezó la historia de un varietal del que Nieto Senetiner fue pionero. En nariz de presenta pleno y complejo, con notas de ciruelas, pasas, almendras, mermelada de frutas rojas y algunos matices ahumados. En boca armónico, redondo, persistente, repitiendo las notas percibidas en nariz.',
    datasheet: require('../public/datasheets/Nieto Senetiner Reserva Bonarda.pdf'),
    store: 'https://tienda.morewine.ar/productos/nieto-senetiner-bonarda-partida-limitada-2018/',
  },
  "nieto_nicanor_barrel": {
    img: require('../public/images/wines/nieto_nicanor_barrel.png'),      //DONE
    cellar: 'nieto-senetiner',
    description: 'Este vino surge de la selección de las mejores barricas de cada cosecha, inspiradas en la fruta y la expresión del terroir. De intenso color rojo púrpura y exquisitas notas frutales a cereza y grosella. En boca combinan sus amables taninos y moderada acidez.',
    datasheet: require('../public/datasheets/Nieto Senetiner Don Nicanor Barrel Select Malbec.pdf'),
    store: 'https://tienda.morewine.ar/productos/don-nicanor-barrel-select-malbec/',
  },


  "salentein_reserva_malbec": {
    img: require('../public/images/wines/salentein_reserva_malbec.png'),  //DONE
    cellar: 'salentein',
    description: 'A la vista presenta color rojo/violeta de alta intensidad. En nariz se percibe fresco, intenso y complejo, se destacan aromas a frutos rojos, bayas negras, delicadas notas florales. En la boca presenta entrada dulce y suave, es fresco, frutado y de buena intensidad, amplio en la media boca y largo final.',
    datasheet: require('../public/datasheets/Salentein Reserve Malbec.pdf'),
    store: '',
  },
  "salentein_grandvu_blend": {
    img: require('../public/images/wines/salentein_grandvu_blend.png'),   //DONE
    cellar: 'salentein',
    description: 'De un intenso color rojo bordo, profundo. En la nariz se perciben aromas a frutos negros, anís, regaliz y mentolados. De gran expresión aromática, intensa, compleja y a la vez delicada. En boca presenta taninos maduros y estructurados. De muy buen volumen, redondo, con final largo y persistente.',
    datasheet: require('../public/datasheets/Salentein Gran Uco Blend.pdf'),
    store: 'https://tienda.morewine.ar/productos/salentein-gran-vu-blend/',
  },
  "salentein_reserva_blend": {
    img: require('../public/images/wines/salentein_reserva_blend.png'),   //DONE
    cellar: 'salentein',
    description: 'Color rojo rubí, profundo. La combinación de cepas da como resultado un vino complejo y equilibrado. Presenta aromas a especias, regaliz, frutos negros como casis y moras que se combinan con delicadas notas de tabaco. En boca es un vino complejo, de impacto dulce, taninos redondos y largo final.',
    datasheet: require('../public/datasheets/Salentein Reserve Blend.pdf'),
    store: '',
  },


  "mascota_mascota_cabernet": {
    img: require('../public/images/wines/mascota_mascota_cabernet.png'),    //DONE
    cellar: 'mascota',
    description: 'Producido con uvas de nuestro viñedo emblema, en la Finca La Mascota. Ubicada en Cruz de Piedra, una de las regiones vitivinícolas más antiguas y prestigiosas de Mendoza. Antes de ser embotellado, este exquisito y complejo varietal reposa durante 15 meses en barricas nuevas de roble francés y americano.',
    datasheet: require('../public/datasheets/Mascota Mascota Cabernet Franc.pdf'),
    store: 'https://tienda.morewine.ar/productos/la-mascota-cabernet-franc-2018/',
  },
  "mascota_unanime_tinto": {
    img: require('../public/images/wines/mascota_unanime_tinto.png'),       //DONE
    cellar: 'mascota',
    description: 'Emblema de Mascota Vineyards, proveniente del Valle de Uco, Mendoza. Ampliamente condecorado alrededor del mundo. Es un blend compuesto por Cabernet Sauvignon, Malbec y Cabernet Franc. Criado en barricas nuevas de roble francés durante 20 meses.',
    datasheet: require('../public/datasheets/Mascota Unanime Gran Vino Tinto Blend.pdf'),
    store: 'https://tienda.morewine.ar/productos/unanime-gran-vino-tinto-blend/',
  },
  "mascota_granmascota_malbec": {
    img: require('../public/images/wines/mascota_granmascota_malbec.png'),  //DONE
    cellar: 'mascota',
    description: 'Elaborado con uvas de viñedos seleccionados, ubicados a 1.050 metros sobre el nivel del mar, en el Valle de Uco, Mendoza. Posee una crianza de 18 meses en barricas nuevas de roble francés y, luego, 6 meses de añejamiento en botella.',
    datasheet: require('../public/datasheets/Mascota Gran Mascota Malbec.pdf'),
    store: 'https://tienda.morewine.ar/productos/gran-mascota-malbec/',
  },


  "mosquita_perro_blend": {
    img: require('../public/images/wines/mosquita_perro_blend.png'),        //DONE
    cellar: 'mosquita-muerta',
    description: 'Perro Callejero, fiel a sus convicciones e incansable buscador. Guiado por su olfato enfrenta día a día su propio destino. Perro Callejero que busca ese hueso de oro hasta las últimas consecuencias. No intentes domesticarlo… él es su propio dueño.',
    datasheet: require('../public/datasheets/Mosquita Muerta Perro Callejero.pdf'),
    store: 'https://tienda.morewine.ar/productos/perro-callejero-blend-de-malbec-2019/',
  },
  "mosquita_mosquita_blend": {
    img: require('../public/images/wines/mosquita_mosquita_blend.png'),     //DONE
    cellar: 'mosquita-muerta',
    description: 'Mosquita Muerta, tímida e inofensiva. Juega con el silencio prudente mientras las demás pierden con el aleteo exagerando. Mosquita Muerta que se las trae, un veneno inesperado, un plan entre manos. No intentes con ella, puedes quedar preso… por siempre.',
    datasheet: require('../public/datasheets/Mosquita Muerta Mosquita.pdf'),
    store: 'https://tienda.morewine.ar/productos/mosquita-muerta-blend-de-tintas/',
  },
  "mosquita_malcriado_malbec": {
    img: require('../public/images/wines/mosquita_malcriado_malbec.png'),   //DONE
    cellar: 'mosquita-muerta',
    description: 'Caprichoso y consentido el malcriado tuvo todo lo que quiso y más, aun así supo darlo todo de nuevo a sus amadas mosquitas.',
    datasheet: require('../public/datasheets/Mosquita Muerta Malcriado.pdf'),
    store: 'https://tienda.morewine.ar/productos/malcriado-single-vineyard/',
  },


  "cadus_tupungato_malbec": {
    img: require('../public/images/wines/cadus_tupungato_malbec.png'),    //DONE
    cellar: 'cadus',
    description: 'Es un tinto de un rojo-violeta intenso, que ofrece en nariz refrescantes y voluptuosas notas a violetas y, también, a membrillo. En boca es jugoso, mordiente, con unos taninos muy suaves y un carácter mineral que se expresa en esa sensación a "tiza" en el medio de la lengua.',
    datasheet: require('../public/datasheets/Cadus Appellation Tupungato.pdf'),
    store: 'https://tienda.morewine.ar/productos/cadus-tupungato-appelation-malbec-2017/',
  },
  "cadus_blend_vineyards": {
    img: require('../public/images/wines/cadus_blend_vineyards.png'),     //DONE
    cellar: 'cadus',
    description: 'Procedente de tres viñedos diferentes, los rasgos distintivos de cada terruño se conjugan para revelar con elegancia la personalidad de un assemblage auténtico y original. Este blend es un tributo al terroir mendocino, un escenario variado y exuberante de microrregiones. Los rasgos distintivos de cada viñedo se conjugan para revelar con elegancia la personalidad de este assemblage de Malbec.',
    datasheet: require('../public/datasheets/Cadus Blend of Vineyards.pdf'),
    store: 'https://tienda.morewine.ar/productos/cadus-blend-of-vineyards-2016/',
  },
  "cadus_finca_malbec": {
    img: require('../public/images/wines/cadus_finca_malbec.png'),      //DONE
    cellar: 'cadus',
    description: 'Color intenso, con tonalidades rojas y brillantes reflejos violáceos. En nariz se caracteriza por sus aromas a violetas y frutos negros como moras, cassis e higos. También se perciben aromas tostados, ahumados y a caramelo, otorgados por su crianza en barrica de roble. Posee una entrada dulce en boca y una larga y buena estructura, combinada con una importante acidez, que le proporciona fluidez y elegancia.',
    datasheet: require('../public/datasheets/Cadus Single Vineyard Torcazas.pdf'),
    store: '',
  },


  "cobos_bramare_malbec": {
    img: require('../public/images/wines/cobos_bramare_malbec.png'),      //DONE
    cellar: 'cobos',
    description: 'La tipicidad del Cabernet Sauvignon se aprecia en su color rojo con tonos violáceos. Encontramos una nariz deliciosa con presencia de fruta roja, cassis y guinda que se complementa con chocolate, pimiento, hierbas y sutiles notas terrosas. Es un vino robusto y con gran personalidad. Tiene una entrada dulce, taninos marcados, fruta negra y especias. Es untuoso en boca, complejo y elegante, de prolongado final.',
    datasheet: require('../public/datasheets/Cobos Bramare Cabernet Sauvignon Luján de Cuyo.pdf'),
    store: 'https://tienda.morewine.ar/productos/bramare-malbec-valle-de-uco/',
  },
  "cobos_cocodrilo_corte": {
    img: require('../public/images/wines/cobos_cocodrilo_corte.png'),     //DONE
    cellar: 'cobos',
    description: 'Un vino complejo, muy elegante y equilibrado. En nariz se destaca la frescura, donde encontramos frutas rojas como guinda y cassis, granada o cereza negra. Notas especiadas muy características del cabernet -pimienta, clavo de olor y paprika- se complementan con un toque floral y una nota herbal a eucalipto para lograr este elegante bouquet. En boca tiene una entrada amable, taninos finos y dulces, buena longitud de boca y persistencia.',
    datasheet: require('../public/datasheets/Cobos Cocodrilo Red Blend.pdf'),
    store: 'https://tienda.morewine.ar/productos/cocodrilo-red-blend-corte-2017/',
  },
  "cobos_felino_malbec": {
    img: require('../public/images/wines/cobos_felino_malbec.png'),       //DONE
    cellar: 'cobos',
    description: 'De un intenso color rojo con tonos violáceos y azules, este exquisito Malbec se caracteriza por exhibir aromas a flores blancas y frutos negros junto con notas de pimienta blanca y clavo de olor. Deleita el paladar con recuerdos de regaliz y chocolate mientras se presenta amplio, suave y de taninos firmes. Es un vino elegante, equilibrado y de persistente final.',
    datasheet: require('../public/datasheets/Cobos Felino Malbec.pdf'),
    store: 'https://tienda.morewine.ar/productos/felino-malbec-2018/',
  },
}