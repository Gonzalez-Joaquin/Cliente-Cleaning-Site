import { useState } from 'react'

import { updateUser } from '../Store/Reducers/user.reducer'
import { useAppDispatch } from './useRedux'
import apiRest from '../Api/apiRest'

interface LoginDTO {
  username: string
  password: string
}

const useAuth = () => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()

  const login = async (credentials: LoginDTO): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const response = await apiRest.post('auth', credentials)
      console.log('Login successful', response.data)

      dispatch(updateUser({name: credentials.username}))
      setLoading(false)

      return true
    } catch (err) {
      setError('Error en el inicio de sesión')
      console.error(err)
      setLoading(false)
      return false
    }
  }

  return { login, loading, error }
}

export default useAuth
