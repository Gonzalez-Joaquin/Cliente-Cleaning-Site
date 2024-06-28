import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { Dispatch } from 'redux'

import {
  startLoadingServices,
  stopLoadingServices,
  setServices,
  createService,
  updateService,
  deleteServiceRedux,
} from '../Reducers/services.reducer'

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
        services.push({ ...data, id: doc.id })
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
      const serviceRef = doc(collection(db, 'services'))
      const serviceWithId: IServiceData = {
        ...newService,
        id: serviceRef.id,
      }

      await setDoc(serviceRef, serviceWithId)
      dispatch(createService(serviceWithId))
    } catch (err: any) {
      console.error('Fallo al añadir el nuevo servicio a Firebase.', err)
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

const editService = (updatedService: IServiceData) => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingServices())

    try {
      const serviceDataForFirestore = {
        title: updatedService.title,
        icon: updatedService.icon,
        portada: updatedService.portada,
        desc: updatedService.desc,
        active: updatedService.active,
        page: {
          title: updatedService.page.title,
          desc: updatedService.page.desc,
          text: updatedService.page.text,
        },
        information: updatedService.information,
        prices: updatedService.prices,
      }

      const serviceRef = doc(db, 'services', updatedService.id.toString())
      await updateDoc(serviceRef, serviceDataForFirestore)
      dispatch(updateService(updatedService))
    } catch (err: any) {
      console.error('Fallo al actualizar el servicio en Firebase.', err)
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

const deleteService = (id: string) => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingServices())

    try {
      const serviceRef = doc(db, 'services', id.toString())
      await deleteDoc(serviceRef)
      dispatch(deleteServiceRedux(id))
    } catch (err: any) {
      console.error('Fallo al eliminar el servicio en Firebase.', err)
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

export { getServices, addService, editService, deleteService }
