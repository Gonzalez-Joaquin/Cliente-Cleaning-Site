import { doc, collection, setDoc, deleteDoc, getDocs } from 'firebase/firestore'
import { Dispatch } from '@reduxjs/toolkit'
import { db } from '../../firebase'

import { IMessageData } from '../../Pages/HomePage/Layout/Contact/Contact'
import {
  createMessage,
  deleteMessageRedux,
  setMessages,
  startLoadingMessages,
  stopLoadingMessages,
} from '../Reducers/contacts.reducer'

const getMessages = () => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingMessages())

    const messages: IMessageData[] = []
    const collectionRef = collection(db, 'messages')

    try {
      const snapshot = await getDocs(collectionRef)
      snapshot.forEach(doc => {
        const data = doc.data() as IMessageData
        messages.push({ ...data, id: doc.id })
      })
      dispatch(setMessages(messages))
    } catch (err: any) {
      console.error('Fallo al traer los datos de Firebase.', err)
    } finally {
      dispatch(stopLoadingMessages())
    }
  }
}

const addMessage = (newMessage: IMessageData) => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingMessages())
    try {
      const messageRef = doc(collection(db, 'messages'))
      const messageWithId: IMessageData = {
        ...newMessage,
        id: messageRef.id,
      }

      await setDoc(messageRef, messageWithId)
      dispatch(createMessage(messageWithId))
    } catch (err: any) {
      console.error('Fallo al añadir el nuevo mensaje a Firebase.', err)
    } finally {
      dispatch(stopLoadingMessages())
    }
  }
}

const deleteMessage = (id: string) => {
  return async function (dispatch: Dispatch) {
    dispatch(startLoadingMessages())

    try {
      const messageRef = doc(db, 'messages', id.toString())
      await deleteDoc(messageRef)
      dispatch(deleteMessageRedux(id))
    } catch (err: any) {
      console.error('Fallo al eliminar el mensaje en Firebase.', err)
    } finally {
      dispatch(stopLoadingMessages())
    }
  }
}

export { addMessage, deleteMessage,getMessages }
