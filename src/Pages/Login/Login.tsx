import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button, FormInput } from '../../Components'
import RoutesModel from '../../Models/routes.models'
import useAuth from '../../Hooks/useAuth'
import style from './login.module.css'

interface LoginDTO {
  username: string
  password: string
}

const Login = () => {
  const [user, setUser] = useState<LoginDTO>({
    username: '',
    password: '',
  })

  const { login, loading } = useAuth()
  const navigate = useNavigate()

  const handleInputChange = (name: string, value: string) => {
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await login(user)

    if (success) {
      navigate(`/${RoutesModel.DASHBOARD}`)
    }
  }

  return (
    <section className={style.section}>
      <article className={style.article}>
        <div className={style.header}>
          <h2>ADMIN PANEL</h2>
          <i className={`fi fi-br-${loading ? 'spinner' : 'lock'} ${loading ? style.animate : ''}`} />
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <FormInput
            name={'usernameLogin'}
            type="text"
            placeholder={'Nombre de usuario'}
            value={user.username}
            newValue={(value: string) => handleInputChange('username', value)}
          />
          <FormInput
            name={'passwordLogin'}
            type="password"
            value={user.password}
            placeholder={'Contraseña'}
            newValue={(value: string) => handleInputChange('password', value)}
          />
          <Button
            type="submit"
            iconClassName={loading ? style.animate : ''}
            icon={loading ? 'fi fi-br-spinner' : ''}
            value={loading ? '' : 'Iniciar Sesión'}
            disabled={user.username.length === 0 || user.password.length === 0 || loading}
          />
        </form>
      </article>
    </section>
  )
}

export default Login
