import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { updateUser } from '../Store/Reducers/user.reducer'
import { useToast } from '../Context/ToastContext'
import { useAppDispatch } from './useRedux'
import { auth } from '../firebase'

interface LoginDTO {
  username: string
  password: string
}

const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const { showToast } = useToast()

  const login = async (credentials: LoginDTO): Promise<boolean> => {
    setLoading(true)

    if (!credentials.username || !credentials.password) {
      showToast('Usuario o contraseña no pueden estar vacíos', 'warning')
      setLoading(false)
      return false
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, credentials.username, credentials.password)
      const user = userCredential.user

      if (user) {
        showToast('Inicio de sesión exitoso', 'success')
        dispatch(updateUser({ name: user.email ?? credentials.username }))
        setLoading(false)
        return true
      } else {
        showToast('Usuario no encontrado', 'error')
        setLoading(false)
        return false
      }
    } catch (err) {
      showToast('Error en el inicio de sesión', 'warning')
      console.error('Error details:', err)
      setLoading(false)
      return false
    }
  }

  return { login, loading }
}

export default useAuth
