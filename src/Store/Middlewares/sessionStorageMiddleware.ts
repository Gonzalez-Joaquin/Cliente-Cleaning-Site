import { Middleware } from '@reduxjs/toolkit'

import { setServices } from '../Reducers/services.reducer'

const sessionStorageMiddleware: Middleware = _store => next => action => {
  const result = next(action)
  if (setServices.match(action)) {
    sessionStorage.setItem('listOfServices', JSON.stringify(action.payload))
  }
  return result
}

export default sessionStorageMiddleware
