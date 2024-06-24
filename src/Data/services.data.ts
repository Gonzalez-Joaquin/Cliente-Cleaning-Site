import portadaSofa from '../Assets/Examples/Sofas/aspirandoSofaMojado.jpg'
import portadaSommier from '../Assets/Examples/Sommiers/aspirandoCama.png'
import portadaColchones from '../Assets/Examples/Sommiers/aspirandoCama.png'
import portadaAlfombras from '../Assets/Examples/Alfombras/alfombraLiquido.jpg'
import portadaSillas from '../Assets/Examples/Silla/limpiandoSillaHumedo.webp'
import portadaAuto from '../Assets/Examples/Auto/aspirandoAuto.png'

import sofa1 from '../Assets/Examples/Sofas/sofas.jpeg'
import sofa2 from '../Assets/Examples/Sofas/sofas2.jpeg'
import sofa3 from '../Assets/Examples/Sofas/sofaAntesYDespues.jpg'
import sofa4 from '../Assets/Examples/Sofas/sofaAntesYDespues2.jpg'

import colchon1 from '../Assets/Examples/Sommiers/colchonAntesYDespues.jpg'
import colchon2 from '../Assets/Examples/Sommiers/aspirandoCama.png'
import colchon3 from '../Assets/Examples/Sommiers/colchonAntesYDespues2.jpg'
import colchon4 from '../Assets/Examples/Sommiers/colchonAntesYDespues3.jpg'

import sommier1 from '../Assets/Examples/Sommiers/sommierAntesYDespues1.jpg'
import sommier2 from '../Assets/Examples/Sommiers/sommierAntesYDespues2.jpg'
import sommier3 from '../Assets/Examples/Sommiers/sommierAntesYDespues3.jpg'
import sommier4 from '../Assets/Examples/Sommiers/sommierAntesYDespues4.jpg'

import alfombra1 from '../Assets/Examples/Alfombras/alfombraLiquido.jpg'
import alfombra2 from '../Assets/Examples/Alfombras/aspirandoAlfombraHumo.jpg'
import alfombra3 from '../Assets/Examples/Alfombras/aspirandoPiso.jpg'
import alfombra4 from '../Assets/Examples/Alfombras/aspirandoAlfombraHumo.jpg'

import silla1 from '../Assets/Examples/Silla/aspirandoSillaVapor.jpg'
import silla2 from '../Assets/Examples/Silla/limpiandoSillaHumedo.webp'
import silla3 from '../Assets/Examples/Silla/sillas.jpeg'
import silla4 from '../Assets/Examples/Silla/SillaAntesVsDespues.webp'

import auto1 from '../Assets/Examples/Auto/autos2.jpeg'
import auto2 from '../Assets/Examples/Auto/motorSuciovsLimpio.webp'
import auto3 from '../Assets/Examples/Auto/autoSuciovsLimipio.jpg'
import auto4 from '../Assets/Examples/Auto/autos.jpeg'
import auto5 from '../Assets/Examples/Auto/Carro-Antes-y-Despues.png'
import auto6 from '../Assets/Examples/Auto/AntesDespuesAuto.png'

export interface IServiceData {
  id: number
  title: string
  icon: string
  portada: string
  desc: string
  active: boolean
  page: {
    title: string
    desc: string
    text: Array<{ title: string; text: string }>
  }
  information: Array<{
    img: string
    title: string
    text: string
  }>
  prices: Array<{
    name: string
    price: number
  }>
}

export const ServicesPage: Array<IServiceData> = [
  {
    id: 0,
    title: 'Sofá',
    icon: 'couch',
    portada: portadaSofa,
    desc: 'Todos los tipos de sofá sin importar su tamaño o cuerpo, tanto limpieza a vapor o solo aspiración. Dejá tu sofá como nuevo, libre de manchas y polvo.',
    information: [
      {
        img: sofa1,
        title: 'Limpieza Profunda',
        text: 'Realizamos una limpieza profunda de tus tapizados, eliminando manchas y olores.',
      },
      {
        img: sofa2,
        title: 'Desinfección Completa',
        text: 'Desinfectamos tus tapizados para eliminar gérmenes y bacterias, asegurando un ambiente más saludable.',
      },
      {
        img: sofa3,
        title: 'Aspirado Profesional',
        text: 'Utilizamos aspiradoras profesionales para remover polvo y suciedad incrustada en tus tapizados.',
      },
      {
        img: sofa4,
        title: 'Protección de Telas',
        text: 'Aplicamos productos que protegen las telas de tus tapizados contra futuros derrames y manchas.',
      },
    ],
    prices: [
      { name: 'Sillón de 1 cuerpo', price: 15000 },
      { name: 'Sillón de 2 cuerpos', price: 28000 },
      { name: 'Sillón de 3 cuerpos', price: 34000 },
      { name: 'Sillón de 3 cuerpos + camastro', price: 38000 },
      { name: 'Sofá Chester 1 cuerpo', price: 18000 },
      { name: 'Sofá Chester 2 cuerpo', price: 32000 },
      { name: 'Sofá Chester 3 cuerpo', price: 38000 },
      { name: 'Sofá Chester 3 cuerpo + camastro', price: 42000 },
      { name: 'Futón de 2 cuerpos de un lado', price: 20000 },
      { name: 'Futón de 3 cuerpos de un lado', price: 26000 },
    ],
    page: {
      title: 'Servicios de Limpieza de Sofás',
      desc: 'Ofrecemos servicios profesionales de limpieza de sofás, incluyendo limpieza profunda, desinfección completa, aspirado profesional y protección de telas. Aseguramos que tus tapizados queden impecables y protegidos.',
      text: [
        {
          title: 'Nuestro Compromiso',
          text: 'Nos comprometemos a ofrecer un servicio de alta calidad, utilizando técnicas y productos avanzados para cuidar y prolongar la vida útil de tus sofás. Tu satisfacción es nuestra prioridad.',
        },
        {
          title: 'Tecnología y Productos de Punta',
          text: 'Empleamos tecnología de última generación y productos ecológicos para garantizar una limpieza eficaz y segura. Nuestro equipo está capacitado para tratar todo tipo de tapizados con el mayor cuidado.',
        },
        {
          title: 'Beneficios de Nuestros Servicios',
          text: 'Además de mejorar la apariencia de tus sofás, nuestros servicios eliminan alérgenos y bacterias, mejorando la calidad del aire en tu hogar. Protege tu inversión y disfruta de un ambiente más saludable.',
        },
      ],
    },
    active: true,
  },
  {
    id: 1,
    title: 'Colchón',
    icon: 'bed',
    portada: portadaColchones,
    desc: 'Para que puedas descansar sin tener la preocupación de que vuele polvillo, pensando hasta en tu momento de relajación. Eliminamos ácaros y alérgenos para un sueño más saludable.',
    information: [
      {
        img: colchon1,
        title: 'Limpieza Profunda',
        text: 'Realizamos una limpieza profunda de tu colchón, eliminando manchas y olores para un mejor descanso.',
      },
      {
        img: colchon2,
        title: 'Desinfección Completa',
        text: 'Desinfectamos tu colchón eliminando ácaros, bacterias y gérmenes, asegurando un ambiente más saludable.',
      },
      {
        img: colchon3,
        title: 'Aspirado Profesional',
        text: 'Utilizamos aspiradoras profesionales para remover polvo y suciedad incrustada en tu colchón.',
      },
      {
        img: colchon4,
        title: 'Desodorización',
        text: 'Eliminamos olores desagradables de tu colchón, dejándolo fresco y limpio.',
      },
    ],
    prices: [
      { name: 'Colchón de 1 plaza o 1 plaza 1/2 de un solo lado', price: 12000 },
      { name: 'Colchón de 1 plaza o 1 plaza 1/2 de ambos lados', price: 20000 },
      { name: 'Colchón de 2 plazas o 2 plazas 1/2 de un solo lado', price: 20000 },
      { name: 'Colchón de 2 plazas o 2 plazas 1/2 de ambos lados', price: 32000 },
      { name: 'Colchón KING de 2X2m o 2x1.8m de un solo lado', price: 26000 },
      { name: 'Colchón KING de 2X2m o 2x1.8m de ambos lados', price: 38000 },
      { name: 'Colchón de Cuna', price: 14000 },
    ],
    page: {
      title: 'Servicios de Limpieza de Colchones',
      desc: 'Ofrecemos servicios profesionales de limpieza de colchones para mejorar tu descanso y salud. Incluye limpieza profunda, desinfección completa, aspirado profesional y desodorización.',
      text: [
        {
          title: 'Beneficios de Nuestros Servicios',
          text: 'Nuestros servicios no solo mejoran la apariencia de tu colchón, sino que también eliminan alérgenos y mejoran la calidad del aire en tu habitación. Disfruta de noches más saludables y reparadoras.',
        },
        {
          title: 'Tecnología Avanzada',
          text: 'Utilizamos tecnología avanzada y productos de calidad para garantizar resultados óptimos. Nuestro equipo está capacitado para tratar diferentes tipos de colchones con el máximo cuidado.',
        },
      ],
    },
    active: true,
  },
  {
    id: 2,
    title: 'Sommier',
    icon: 'bed',
    portada: portadaSommier,
    desc: 'Mantené tu sommier limpio y libre de polvo. Nuestra limpieza a fondo asegura que tu sommier esté en perfectas condiciones para un descanso óptimo.',
    information: [
      {
        img: sommier1,
        title: 'Limpieza Integral',
        text: 'Realizamos una limpieza integral de tu sommier, eliminando manchas y olores para un descanso óptimo.',
      },
      {
        img: sommier2,
        title: 'Desinfección Profunda',
        text: 'Desinfectamos tu sommier eliminando ácaros, bacterias y gérmenes, garantizando un ambiente más saludable.',
      },
      {
        img: sommier3,
        title: 'Aspirado Profesional',
        text: 'Utilizamos aspiradoras de alta potencia para remover polvo y suciedad incrustada en tu sommier.',
      },
      {
        img: sommier4,
        title: 'Tratamiento Antiácaros',
        text: 'Aplicamos tratamientos especiales que protegen tu sommier contra ácaros y otros alérgenos.',
      },
    ],
    prices: [
      { name: 'Estructura de somier 1 plaza', price: 10000 },
      { name: 'Estructura de somier 2 plazas', price: 14000 },
      { name: 'Respado de sommier 1 plaza', price: 12000 },
      { name: 'Respado de sommier 2 plazas', price: 16000 },
    ],
    page: {
      title: 'Servicios de Limpieza de Sommiers',
      desc: 'Ofrecemos servicios profesionales de limpieza de sommiers para mejorar tu descanso y salud. Incluye limpieza integral, desinfección profunda, aspirado profesional y tratamiento antiácaros.',
      text: [
        {
          title: 'Beneficios de Nuestros Servicios',
          text: 'Nuestros servicios no solo mejoran la apariencia de tu sommier, sino que también garantizan un ambiente más saludable al eliminar alérgenos y bacterias. Disfruta de noches más reparadoras y confortables.',
        },
        {
          title: 'Tecnología Avanzada',
          text: 'Utilizamos tecnología avanzada y productos de calidad para asegurar resultados óptimos. Nuestro equipo está capacitado para tratar diferentes tipos de sommiers con el máximo cuidado y eficiencia.',
        },
      ],
    },
    active: true,
  },
  {
    id: 3,
    title: 'Alfombra',
    icon: 'info',
    portada: portadaAlfombras,
    desc: 'Prolongá la vida útil de tus alfombras con nuestra limpieza profesional. Eliminamos manchas, olores y polvo, dejando tus alfombras frescas y revitalizadas.',
    information: [
      {
        img: alfombra1,
        title: 'Limpieza Profunda',
        text: 'Realizamos una limpieza profunda de tus alfombras, eliminando manchas y olores persistentes. Nuestro servicio restaura la frescura y belleza original de tus alfombras.',
      },
      {
        img: alfombra2,
        title: 'Desinfección Completa',
        text: 'Desinfectamos tus alfombras eliminando bacterias, gérmenes y ácaros, asegurando un ambiente más saludable y libre de alérgenos.',
      },
      {
        img: alfombra3,
        title: 'Aspirado Profesional',
        text: 'Utilizamos aspiradoras industriales para remover polvo y suciedad incrustada en tus alfombras, garantizando una limpieza a fondo y sin daños.',
      },
      {
        img: alfombra4,
        title: 'Tratamiento Anti-manchas',
        text: 'Aplicamos productos especiales que protegen tus alfombras contra futuros derrames y manchas, prolongando su vida útil y manteniendo su aspecto impecable.',
      },
    ],
    prices: [
      { name: 'Alfombra pequeña (hasta 2m²)', price: 8000 },
      { name: 'Alfombra mediana (entre 2m² y 4m²)', price: 12000 },
      { name: 'Alfombra grande (más de 4m²)', price: 16000 },
    ],
    page: {
      title: 'Servicios de Limpieza de Alfombras',
      desc: 'Ofrecemos servicios profesionales de limpieza de alfombras para mantenerlas limpias y libres de alérgenos. Incluye limpieza profunda, desinfección completa, aspirado profesional y tratamiento anti-manchas.',
      text: [
        {
          title: 'Beneficios de Nuestros Servicios',
          text: 'Nuestros servicios mejoran la apariencia de tus alfombras y garantizan un ambiente más saludable al eliminar alérgenos y bacterias. Mantén tus espacios limpios y acogedores con nuestras soluciones especializadas.',
        },
        {
          title: 'Tecnología Avanzada',
          text: 'Utilizamos equipos de limpieza de última generación y productos de alta calidad para resultados óptimos. Nuestro equipo está capacitado para tratar diferentes tipos de alfombras con cuidado y profesionalismo.',
        },
      ],
    },
    active: true,
  },
  {
    id: 4,
    title: 'Silla',
    icon: 'chair',
    portada: portadaSillas,
    desc: 'Desde sillas de comedor hasta sillas de oficina, aseguramos una limpieza profunda que elimina suciedad y alérgenos, mejorando la higiene y apariencia de tus sillas.',
    information: [
      {
        img: silla1,
        title: 'Limpieza Profunda',
        text: 'Realizamos una limpieza profunda de tus sillas, eliminando manchas y olores para devolverles un aspecto renovado y fresco.',
      },
      {
        img: silla2,
        title: 'Desinfección Completa',
        text: 'Desinfectamos tus sillas eliminando bacterias, gérmenes y ácaros, asegurando un ambiente más saludable y libre de alérgenos.',
      },
      {
        img: silla3,
        title: 'Aspirado Profesional',
        text: 'Utilizamos aspiradoras profesionales para remover polvo y suciedad incrustada en tus sillas, garantizando una limpieza a fondo sin dañar las telas.',
      },
      {
        img: silla4,
        title: 'Tratamiento Anti-manchas',
        text: 'Aplicamos productos que protegen las telas de tus sillas contra futuros derrames y manchas, prolongando su vida útil y manteniendo su apariencia impecable.',
      },
    ],
    prices: [
      { name: 'Base de sillas', price: 4000 },
      { name: 'Base y respaldo de sillas', price: 5000 },
      { name: 'Base y respaldo de ambos lados de tela', price: 6000 },
      { name: 'Matera', price: 10000 },
      { name: 'Baulera', price: 20000 },
    ],
    page: {
      title: 'Servicios de Limpieza de Sillas',
      desc: 'Ofrecemos servicios profesionales de limpieza de sillas para mantenerlas en óptimas condiciones. Incluye limpieza profunda, desinfección completa, aspirado profesional y tratamiento anti-manchas.',
      text: [
        {
          title: 'Beneficios de Nuestros Servicios',
          text: 'Nuestros servicios mejoran la apariencia y prolongan la vida útil de tus sillas, garantizando un ambiente más limpio y saludable. Disfruta de muebles impecables y bien cuidados.',
        },
        {
          title: 'Tecnología Avanzada',
          text: 'Utilizamos equipos especializados y productos de calidad para asegurar resultados superiores en la limpieza de tus sillas. Nuestro personal está capacitado para tratar diferentes tipos de tejidos con el máximo cuidado.',
        },
      ],
    },
    active: true,
  },
  {
    id: 5,
    title: 'Auto',
    icon: 'car',
    portada: portadaAuto,
    desc: 'Mantené tu vehículo impecable con nuestra limpieza de tapizados. Removemos manchas, olores y suciedad acumulada para que disfrutes de un interior como nuevo.',
    information: [
      {
        img: auto1,
        title: 'Limpieza de Tapizado Interior',
        text: 'Realizamos una limpieza profunda del tapizado interior de tu auto, eliminando manchas y olores para un ambiente más fresco y confortable.',
      },
      {
        img: auto2,
        title: 'Limpieza de Motor a Vapor',
        text: 'Desengrasamos y limpiamos el motor de tu auto utilizando vapor a alta presión, asegurando su buen funcionamiento y una apariencia impecable. Precio: Consultar.',
      },
      {
        img: auto4,
        title: 'Limpieza de Asientos',
        text: 'Limpieza específica de los asientos de tu auto, eliminando manchas, olores y renovando su apariencia para mayor confort.',
      },
      {
        img: auto3,
        title: 'Limpieza de Baúl',
        text: 'Limpieza y organización del baúl de tu auto, eliminando polvo y suciedad acumulada para mantenerlo ordenado y limpio.',
      },
      {
        img: auto5,
        title: 'Limpieza de Tableros y Consola',
        text: 'Limpieza y desinfección de tableros y consola, eliminando polvo y huellas para un acabado impecable y funcional.',
      },
      {
        img: auto6,
        title: 'Limpieza Completa Interior',
        text: 'Un servicio integral que incluye la limpieza de todas las partes del auto, tanto interiores y motor, para mantenerlo como nuevo.',
      },
    ],
    prices: [
      { name: 'Butacas (4 butacas)', price: 26000 },
      { name: 'Butacas y piso (sin sacar butacas)', price: 32000 },
      { name: 'Butacas, techo, piso (sin sacar butacas)', price: 38000 },
      { name: 'Interior completo (sin sacar butacas)', price: 46000 },
      { name: 'Limpieza de Motor a Vapor', price: 50000 },
    ],
    page: {
      title: 'Servicios de Limpieza de Autos',
      desc: 'Ofrecemos servicios profesionales de limpieza de autos para mantener tu vehículo en óptimas condiciones. Incluye limpieza de tapizado interior, motor a vapor, baúl, asientos, tableros y una limpieza completa interior.',
      text: [
        {
          title: 'Beneficios de Nuestros Servicios',
          text: 'Nuestros servicios mejoran la estética y prolongan la vida útil de tu auto, garantizando un ambiente más limpio y seguro para ti y tus pasajeros.',
        },
        {
          title: 'Tecnología Avanzada',
          text: 'Utilizamos técnicas de limpieza avanzadas como el vapor a alta presión para el motor, asegurando resultados superiores y un funcionamiento óptimo de tu vehículo.',
        },
      ],
    },
    active: true,
  },
]

export default ServicesPage
