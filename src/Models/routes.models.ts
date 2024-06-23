const RoutesModel = {
  HOME: 'Inicio',
  SERVICES: 'Servicios',
  DASHBOARD: 'Panel',
  SOCIAL: 'Qr',
  LOGIN: 'Entrar',
  CREATE: 'Crear',
} as const

export const HomeModel = {
  HOME: 'Inicio',
  JOBS: 'Trabajos',
  SERVICES: 'Servicios',
  ABOUT: 'Sobre Nosotros',
  CONTACT: 'Contacto',
} as const

export default RoutesModel

export type HomeKeys = keyof typeof HomeModel