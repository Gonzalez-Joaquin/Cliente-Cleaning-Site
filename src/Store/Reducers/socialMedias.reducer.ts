import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ISocialMedias {
  id: number
  content: string
  icon: string
  name?: string
  link?: string
}

const initialState: Array<ISocialMedias> = [
  {
    id: 0,
    name: 'Whatsapp',
    content: '+54 9 223 304-2204',
    icon: 'whatsapp',
    link: 'https://wa.me/5492233042204',
  },
  {
    id: 2,
    name: 'Facebook',
    content: 'Limpieza De Tapizados',
    icon: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=61560946685046',
  },
  {
    id: 3,
    name: 'Instagram',
    content: '@gbcleaningsite',
    icon: 'instagram',
    link: 'https://www.instagram.com/gbcleaningsite/',
  },
  {
    id: 4,
    name: 'Email',
    content: 'gb.cleaningsite@gmail.com',
    icon: 'google',
  },
]

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    createContact: (state, action: PayloadAction<ISocialMedias>) => {
      state.push(action.payload)
    },
    updateContact: (state, action: PayloadAction<ISocialMedias>) => {
      const index = state.findIndex(contact => contact.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      return state.filter(contact => contact.id !== action.payload)
    },
  },
})

export const { createContact, updateContact, deleteContact } = socialSlice.actions

export default socialSlice.reducer
