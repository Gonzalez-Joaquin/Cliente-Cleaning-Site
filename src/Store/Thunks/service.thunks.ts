import { addDoc, collection, getDocs } from 'firebase/firestore'
import { Dispatch } from 'redux'

import { startLoadingServices, stopLoadingServices, setServices, createService } from '../Reducers/services.reducer'
import { IServiceData } from '../../Data/services.data'
import { db } from '../../firebase'

const getServices = () => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingServices())

    const services: IServiceData[] = []
    const collectionRef = collection(db, 'services')

    try {
      const snapshot = await getDocs(collectionRef)
      snapshot.forEach(doc => {
        const data = doc.data() as IServiceData
        services.push({ ...data })
      })
      dispatch(setServices(services))
    } catch (err: any) {
      console.error('Fallo al traer los datos de Firebase.', err)
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

const addService = (newService: IServiceData) => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingServices())

    try {
      const docRef = await addDoc(collection(db, 'services'), newService)
      const serviceWithId = { ...newService, id: +docRef.id }
      dispatch(createService(serviceWithId))
    } catch (err: any) {
      console.error('Fallo al añadir el nuevo servicio a Firebase.', err)
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

export { getServices, addService }
