import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ServicesPage, { IServiceData } from '../../Data/services.data'

const initialState: Array<IServiceData> = ServicesPage

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    createService: (state, action: PayloadAction<IServiceData>) => {
      state.push(action.payload)
    },
    updateService: (state, action: PayloadAction<IServiceData>) => {
      const index = state.findIndex(job => job.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteService: (state, action: PayloadAction<number>) => {
      return state.filter(job => job.id !== action.payload)
    },
    toggleService: (state, action: PayloadAction<number>) => {
      const service = state.find(service => service.id === action.payload)
      if (service) {
        service.active = !service.active
      }
    },
  },
})

export const { createService, updateService, deleteService, toggleService } = servicesSlice.actions

export default servicesSlice.reducer
