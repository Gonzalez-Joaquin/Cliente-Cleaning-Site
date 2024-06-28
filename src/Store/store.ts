import { configureStore } from '@reduxjs/toolkit'

import sessionStorageMiddleware from './Middlewares/sessionStorageMiddleware'
import socialMediasReducer from './Reducers/socialMedias.reducer'
import servicesReducer from './Reducers/services.reducer'
import toolsReducer from './Reducers/tools.reducer'
import userReducer from './Reducers/user.reducer'
import jobsReducer from './Reducers/jobs.reducer'
import contactsReducer from './Reducers/contacts.reducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobsReducer,
    tools: toolsReducer,
    social: socialMediasReducer,
    services: servicesReducer,
    messages: contactsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sessionStorageMiddleware),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
