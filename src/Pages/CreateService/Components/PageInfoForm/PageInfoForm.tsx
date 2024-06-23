import { useEffect, useState } from 'react'

import { useCreateService } from '../../CreateService'
import CommonInput from '../CommonInput/CommonInput'
import { InfoTextSelector } from './Components'
import { Button } from '../../../../Components'
import { useToast } from '../../../../Context/ToastContext'
import style from './pageInfoForm.module.css'

const PageInfoForm = () => {
  const { serviceData, setPageInfo, handleGoBack } = useCreateService()
  const { showToast } = useToast()

  const [formData, setFormData] = useState<{
    title: string
    desc: string
    text: Array<{ title: string; text: string }>
  }>({
    title: '',
    desc: '',
    text: [],
  })

  useEffect(() => {
    if (serviceData && serviceData.page) {
      setFormData({
        title: serviceData.page.title,
        desc: serviceData.page.desc,
        text: serviceData.page.text || [],
      })
    }
  }, [serviceData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target
    if (index !== undefined) {
      const newText = [...formData.text]
      newText[index] = { ...newText[index], [name]: value }
      setFormData(prevData => ({
        ...prevData,
        text: newText,
      }))
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const handleAddText = (title: string, text: string) => {
    setFormData(prevData => ({
      ...prevData,
      text: [...prevData.text, { title, text }],
    }))
  }

  const handleEditText = (index: number, newText: { title: string; text: string }) => {
    const updatedText = [...formData.text]
    updatedText[index] = newText
    setFormData(prevData => ({
      ...prevData,
      text: updatedText,
    }))
  }

  const validateForm = () => {
    const { title, desc } = formData
    if (title.length < 5) {
      showToast('El título debe tener al menos 5 caracteres.', 'error')
      return false
    }
    if (desc.length < 20) {
      showToast('La descripción debe tener al menos 20 caracteres.', 'error')
      return false
    }

    return true
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      setPageInfo(formData)
    }
  }

  const handleDelete = () => {
    setFormData(prevData => ({
      ...prevData,
      text: [],
    }))
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.header}>
        <h2>Información de la Página</h2>
      </div>
      <div className={style.container}>
        <div className={style.left}>
          <CommonInput
            type="text"
            label="Título de la Página:"
            name="title"
            placeholder="Ingrese el título de la página"
            value={formData.title}
            onChange={handleChange}
          />

          <CommonInput
            type="textarea"
            label="Descripción de la Página:"
            name="desc"
            placeholder="Ingrese la descripción de la página"
            value={formData.desc}
            onChange={handleChange}
          />
        </div>
        <div className={style.right}>
          <InfoTextSelector
            texts={formData.text}
            onAddText={handleAddText}
            onEditText={handleEditText}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <div className={style.footer}>
        <Button value="Volver" styles="default" onClick={handleGoBack} />
        <Button type="submit" value="Siguiente" />
      </div>
    </form>
  )
}

export default PageInfoForm
