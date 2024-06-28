import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMessageData {
  id: string
  name: string
  email: string
  subject: string
  message: string
}

interface IMessageState {
  loadingMessages: boolean
  listOfMessages: IMessageData[]
}

const initialState: IMessageState = {
  loadingMessages: false,
  listOfMessages: [],
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    startLoadingMessages: state => {
      state.loadingMessages = true
    },
    stopLoadingMessages: state => {
      state.loadingMessages = false
    },
    setMessages: (state, action: PayloadAction<IMessageData[]>) => {
      state.listOfMessages = action.payload
    },
    createMessage: (state, action: PayloadAction<IMessageData>) => {
      state.listOfMessages.push(action.payload)
    },
    updateMessage: (state, action: PayloadAction<IMessageData>) => {
      const index = state.listOfMessages.findIndex(message => message.id === action.payload.id)
      if (index !== -1) {
        state.listOfMessages[index] = action.payload
      }
    },
    deleteMessageRedux: (state, action: PayloadAction<string>) => {
      state.listOfMessages = state.listOfMessages.filter(message => message.id !== action.payload)
    },
  },
})

export const {
  updateMessage,
  createMessage,
  setMessages,
  deleteMessageRedux,
  stopLoadingMessages,
  startLoadingMessages,
} = messagesSlice.actions

export default messagesSlice.reducer
