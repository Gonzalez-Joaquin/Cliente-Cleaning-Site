import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import aspirandoCama from '../../Assets/Backgrounds/aspirandoCama.png'
import alfombraLiquido from '../../Assets/Backgrounds/alfombraLiquido.jpg'
import aspirandoSillaVapor from '../../Assets/Backgrounds/aspirandoSillaVapor.jpg'

interface JobsData {
  id: number
  img: string
  title: string
  desc: string
}

const initialState: Array<JobsData> = [
  {
    id: 0,
    img: aspirandoCama,
    title: 'Aspirado en Seco',
    desc: 'Nuestro servicio de aspirado en seco ofrece una limpieza profunda y eficiente para todas las superficies. Utilizamos tecnología avanzada para eliminar el polvo, la suciedad y los alérgenos, dejando tus espacios impecables y libres de contaminantes. Ideal para mantener la salud y la higiene de tu hogar o negocio.',
  },
  {
    id: 1,
    img: alfombraLiquido,
    title: 'Limpieza y Desinfección Profesional',
    desc: 'Garantiza un entorno seguro y libre de gérmenes con nuestro servicio de limpieza y desinfección profesional. Utilizamos equipos de alta tecnología y productos de calidad para eliminar bacterias, virus y alérgenos, asegurando un ambiente más saludable para tu hogar o negocio. ¡Confía en nosotros para proteger tu salud!',
  },
  {
    id: 2,
    img: aspirandoSillaVapor,
    title: 'Limpieza a Vapor Ecológica',
    desc: 'Descubre la eficacia de nuestra limpieza a vapor, ideal para eliminar suciedad incrustada y desinfectar sin químicos agresivos. Nuestro método ecológico es perfecto para mantener tus espacios impecables y saludables, cuidando del medio ambiente. ¡Opta por una limpieza profunda y responsable!',
  },
]

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    createJob: (state, action: PayloadAction<JobsData>) => {
      state.push(action.payload)
    },
    updateJob: (state, action: PayloadAction<JobsData>) => {
      const index = state.findIndex(job => job.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteJob: (state, action: PayloadAction<number>) => {
      return state.filter(job => job.id !== action.payload)
    },
  },
})

export const { createJob, updateJob, deleteJob } = jobsSlice.actions

export default jobsSlice.reducer
