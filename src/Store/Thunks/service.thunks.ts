import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { Dispatch } from 'redux'

import {
  setServices,
  createService,
  updateService,
  deleteServiceRedux,
  stopLoadingServices,
  startLoadingServices,
} from '../Reducers/services.reducer'

import { IServiceData } from '../../Data/services.data'
import { db } from '../../firebase'

const getServices = (showToast: (message: string, type: 'success' | 'error' | 'warning') => void) => {
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
      showToast('Fallo al traer los servicios, recargue la página para continuar.', 'error')
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

const addService = (
  newService: IServiceData,
  showToast: (message: string, type: 'success' | 'error' | 'warning') => void
) => {
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
      showToast('Servicio añadido exitosamente.', 'success')
    } catch (err: any) {
      console.error('Fallo al añadir el nuevo servicio a Firebase.', err)
      showToast('Fallo al añadir el nuevo servicio, pruebe reitentandolo', 'error')
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

const editService = (
  updatedService: IServiceData,
  showToast: (message: string, type: 'success' | 'error' | 'warning') => void
) => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingServices())

    console.log(updatedService)

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
      showToast('Servicio modificado exitosamente.', 'success')
    } catch (err: any) {
      console.error('Fallo al actualizar el servicio en Firebase.', err)
      showToast('Fallo al modificar el servicio, pruebe volviendo a intentar.', 'error')
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

const deleteService = (id: string, showToast: (message: string, type: 'success' | 'error' | 'warning') => void) => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingServices())

    try {
      const serviceRef = doc(db, 'services', id.toString())
      await deleteDoc(serviceRef)
      dispatch(deleteServiceRedux(id))
      showToast('Servicio eliminado exitosamente.', 'success')
    } catch (err: any) {
      console.error('Fallo al eliminar el servicio en Firebase.', err)
      showToast('Fallo al eliminar el servicio, pruebe reitentandolo', 'error')
    } finally {
      dispatch(stopLoadingServices())
    }
  }
}

export { getServices, addService, editService, deleteService }
