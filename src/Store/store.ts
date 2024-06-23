import { configureStore } from '@reduxjs/toolkit'

import userReducer from './Reducers/user.reducer'
import jobsReducer from './Reducers/jobs.reducer'
import toolsReducer from './Reducers/tools.reducer'
import servicesReducer from './Reducers/services.reducer'
import socialMediasReducer from './Reducers/socialMedias.reducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobsReducer,
    tools: toolsReducer,
    social: socialMediasReducer,
    services: servicesReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
