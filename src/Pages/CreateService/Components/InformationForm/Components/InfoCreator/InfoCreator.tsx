import React from 'react'
import { Button, ImageUploader } from '../../../../../../Components'
import CommonInput from '../../../CommonInput/CommonInput'
import style from './infoCreator.module.css'
import { useToast } from '../../../../../../Context/ToastContext'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  currentInfo: { img: string; title: string; text: string }
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleAdd: () => void
}

const InfoCreator = ({ isOpen, setIsOpen, currentInfo, handleChange, handleAdd }: Props) => {
  const { showToast } = useToast()

  const validateForm = () => {
    if (currentInfo.img.trim() === '') {
      showToast('Debe seleccionar una imagen.', 'error')
      return false
    }

    if (currentInfo.title.trim() === '') {
      showToast('El título no puede estar vacío.', 'error')
      return false
    }

    return true
  }

  const handleSubmit = () => {
    if (validateForm()) {
      handleAdd()
      setIsOpen(false)
    }
  }

  return (
    <div className={`${style.content} ${isOpen ? style.open : ''}`}>
      <div className={`${style.popUp} ${isOpen ? style.open : ''}`}>
        <div className={style.header}>
          <div className={style.headerContainer}>
            <Button icon="angle-left" styles="default" onClick={() => setIsOpen(false)} />
            <h2>Información</h2>
          </div>
        </div>
        <div className={style.body}>
          <div>
            <ImageUploader label="Foto:" name="img" image={currentInfo.img} handleChange={handleChange} />

            <CommonInput
              label="Título"
              name="title"
              placeholder="Ingrese el título aquí"
              value={currentInfo.title}
              onChange={handleChange}
            />

            <CommonInput
              label="Descripción"
              name="text"
              placeholder="Ingrese la descripción aquí"
              value={currentInfo.text}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.footer}>
          <Button value="Cancelar" styles="default" onClick={() => setIsOpen(false)} />
          <Button value="Guardar" styles="default" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default InfoCreator
