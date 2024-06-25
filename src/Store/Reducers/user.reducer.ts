import { createSlice } from '@reduxjs/toolkit'

import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

interface IUser {
  name: string
}

const EmptyUserState: IUser = {
  name: '',
}

export const UserKey = 'user'

export const userSlice = createSlice({
  name: 'user',
  initialState: EmptyUserState,
  reducers: {
    createUser: (_state, action) => {
      return action.payload
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload }
      return result
    },
    resetUser: () => {
      signOut(auth)
      return EmptyUserState
    },
  },
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
