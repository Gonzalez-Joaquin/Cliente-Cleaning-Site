import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IServiceData } from '../../Data/services.data'

interface IServices {
  loadingService: boolean
  listOfServices: Array<IServiceData>
}

const initialState: IServices = {
  loadingService: false,
  listOfServices: JSON.parse(sessionStorage.getItem('listOfServices') || '[]'),
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    startLoadingServices: state => {
      state.loadingService = true
    },
    stopLoadingServices: state => {
      state.loadingService = false
    },
    setServices: (state, action: PayloadAction<Array<IServiceData>>) => {
      state.listOfServices = action.payload
    },
    createService: (state, action: PayloadAction<IServiceData>) => {
      state.listOfServices.push(action.payload)
    },
    updateService: (state, action: PayloadAction<IServiceData>) => {
      const index = state.listOfServices.findIndex(service => service.id === action.payload.id)
      if (index !== -1) {
        state.listOfServices[index] = action.payload
      }
    },
    deleteServiceRedux: (state, action: PayloadAction<string>) => {
      state.listOfServices = state.listOfServices.filter(service => service.id !== action.payload)
    },
    toggleService: (state, action: PayloadAction<string>) => {
      const service = state.listOfServices.find(service => service.id === action.payload)
      if (service) {
        service.active = !service.active
      }
    },
  },
})

export const {
  startLoadingServices,
  stopLoadingServices,
  setServices,
  createService,
  updateService,
  toggleService,
  deleteServiceRedux,
} = servicesSlice.actions

export default servicesSlice.reducer
