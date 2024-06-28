import { doc, collection, setDoc, deleteDoc } from 'firebase/firestore'
import { Dispatch } from '@reduxjs/toolkit'
import { db } from '../../firebase'

import { IMessageData } from '../../Pages/HomePage/Layout/Contact/Contact'
import {
  createMessage,
  deleteMessageRedux,
  startLoadingMessages,
  stopLoadingMessages,
} from '../Reducers/contacts.reducer'

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

export { addMessage, deleteMessage }
