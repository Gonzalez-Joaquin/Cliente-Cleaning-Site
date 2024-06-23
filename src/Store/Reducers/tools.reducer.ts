import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import aspiradora1 from '../../Assets/Examples/Aspiradora/aspiradoraKaercher.jpg'
import aspiradora2 from '../../Assets/Examples/Aspiradora/aspiradora2.jpg'
import aspiradora3 from '../../Assets/Examples/Aspiradora/aspiradora3.jpg'

interface IToolsData {
  id: number
  title: string
  desc: string
  img: string
}

const initialState: Array<IToolsData> = [
  {
    id: 1,
    title: 'LAVA-ASPIRADORA Puzzi 10/1',
    desc: 'La Puzzi 10/1 es una lava-aspiradora profesional diseñada para la limpieza profunda de alfombras y tapizados. Su potente succión y sistema de inyección-extracción garantizan una limpieza eficiente y rápida.',
    img: aspiradora1,
  },
  {
    id: 2,
    title: 'ASPIRADORA EN SECO Y HÚMEDO NT 20/1 Me Classic',
    desc: 'La NT 20/1 Me Classic es una aspiradora versátil que puede manejar tanto residuos secos como húmedos. Ideal para talleres y entornos industriales, ofrece una robustez y durabilidad excepcionales.',
    img: aspiradora2,
  },
  {
    id: 3,
    title: 'Polti Vaporetto Eco Pro 3.0',
    desc: 'El Polti Vaporetto Eco Pro 3.0 es un limpiador a vapor multifunción que elimina la suciedad y las bacterias sin necesidad de químicos. Ideal para una limpieza profunda y ecológica de diversas superficies.',
    img: aspiradora3,
  },
]

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    createTool: (state, action: PayloadAction<IToolsData>) => {
      state.push(action.payload)
    },
    updateTool: (state, action: PayloadAction<IToolsData>) => {
      const index = state.findIndex(job => job.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteTool: (state, action: PayloadAction<number>) => {
      return state.filter(job => job.id !== action.payload)
    },
  },
})

export const { createTool, updateTool, deleteTool } = toolSlice.actions

export default toolSlice.reducer
