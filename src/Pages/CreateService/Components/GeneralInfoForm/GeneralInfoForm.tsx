import React, { useEffect, useState } from 'react'
import { useCreateService } from '../../CreateService'
import style from './generalInfoForm.module.css'
import { Button, ImageUploader, Toggle } from '../../../../Components'
import CommonInput from '../CommonInput/CommonInput'
import { useToast } from '../../../../Context/ToastContext'

const GeneralInfoForm = () => {
  const { setGeneralInfo, serviceData } = useCreateService()
  const { showToast } = useToast()

  const [formData, setFormData] = useState({
    title: '',
    icon: '',
    portada: '',
    desc: '',
    active: true,
  })

  useEffect(() => {
    if (serviceData) {
      setFormData({
        title: serviceData.title || '',
        icon: serviceData.icon || '',
        portada: serviceData.portada || '',
        desc: serviceData.desc || '',
        active: serviceData.active || true,
      })
    }
  }, [serviceData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      setGeneralInfo(formData)
    }
  }

  const validateForm = () => {
    const { title, desc, portada, icon } = formData

    if (title.length < 3) {
      showToast('El título debe tener al menos 3 caracteres.', 'error')
      return false
    }

    if (portada.trim() === '') {
      console.log(portada)

      showToast('El campo de portada no puede estar vacío.', 'error')
      return false
    }

    if (icon.trim() === '') {
      showToast('El campo de icono no puede estar vacío.', 'error')
      return false
    }

    if (desc.length < 10) {
      showToast('Se recomienda que la descripción sea un poco más extensa.', 'warning')
      return true
    }

    return true
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.header}>
        <h2>Informacion general</h2>
        <label className={style.toggle}>
          Activo
          <Toggle
            id={''}
            value={formData.active}
            onChange={e => {
              setFormData(prevData => ({
                ...prevData,
                active: e,
              }))
            }}
          />
        </label>
      </div>
      <div className={style.container}>
        <div className={style.left}>
          <CommonInput
            type="text"
            label={'Titulo:'}
            name={'title'}
            placeholder={'Ingrese el servicio'}
            value={formData.title}
            onChange={handleChange}
          />

          <CommonInput
            type="textarea"
            label={'Descripción:'}
            name={'desc'}
            placeholder={'Ingrese la descripción'}
            value={formData.desc}
            onChange={handleChange}
          />
        </div>
        <div className={style.right}>
          <ImageUploader label="Portada:" name="portada" image={formData.portada} handleChange={handleChange} />

          <CommonInput
            type="text"
            label={'Icono:'}
            name={'icon'}
            placeholder={'Ingrese el icono'}
            value={formData.icon}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={style.footer}>
        <Button type="submit" value="Siguiente" />
      </div>
    </form>
  )
}

export default GeneralInfoForm
