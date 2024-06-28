import { useEffect, useState } from 'react'
import { Element } from 'react-scroll'

import { useAppDispatch, useAppSelector } from '../../../../Hooks/useRedux'
import { addMessage } from '../../../../Store/Thunks/message.thunks'
import { HomeModel } from '../../../../Models/routes.models'
import { useToast } from '../../../../Context/ToastContext'
import { Button, FormInput } from '../../../../Components'
import style from './contact.module.css'

export interface IMessageData {
  id: string
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [validateForm, setValidateForm] = useState<boolean>(false)
  const ContactListData = useAppSelector(store => store.social)
  const { showToast } = useToast()
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState<IMessageData>({
    id: '',
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(addMessage(formData))

    showToast('El mensaje fue enviado con éxito', 'success')

    setFormData({
      id: '',
      name: '',
      email: '',
      message: '',
    })
  }

  useEffect(() => {
    if (formData.email.includes('@') && formData.message.length >= 10) {
      setValidateForm(true)
    } else {
      setValidateForm(false)
    }
  }, [formData])

  return (
    <Element className={style.element} name={HomeModel.CONTACT}>
      <section className={style.section}>
        <article className={style.article}>
          <div className={style.container}>
            <h2>Contacto</h2>
            <div className={style.content}>
              <div className={style.info}>
                <h3>Redes sociales</h3>
                <ul className={style.list}>
                  {ContactListData.map(item => (
                    <li className={style.item} key={item.id}>
                      {item.link ? (
                        <a href={item.link}>
                          <i className={`fi fi-brands-${item.icon}`} />
                          <span>{item.content}</span>
                        </a>
                      ) : (
                        <span>
                          <i className={`fi fi-brands-${item.icon}`} />
                          {item.content}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.form}>
                <form onSubmit={handleSubmitForm}>
                  <h4>Formulario de contacto</h4>
                  <div className={style.formField}>
                    <FormInput
                      type="text"
                      name={'contactName'}
                      value={formData.name}
                      placeholder={'Nombre'}
                      newValue={e => handleInputChange('name', e)}
                    />
                    <FormInput
                      type="email"
                      name={'contactEmail'}
                      value={formData.email}
                      placeholder={'Email'}
                      newValue={e => handleInputChange('email', e)}
                    />
                  </div>
                  <div className={style.formTextArea}>
                    <FormInput
                      type="textarea"
                      name={'contactMessage'}
                      placeholder={'Mensaje'}
                      value={formData.message}
                      newValue={e => handleInputChange('message', e)}
                    />
                  </div>
                  <Button value="Enviar" type="submit" icon="paper-plane" disabled={!validateForm} />
                </form>
              </div>
            </div>
          </div>
        </article>
      </section>
      <footer className={style.footer}>(C) Copyright 2024, Todos los derechos reservados - Vesion: 0.0.1</footer>
    </Element>
  )
}

export default Contact
