import React from 'react'

import { useToast } from '../../../../../../Context/ToastContext'
import { Button } from '../../../../../../Components'
import style from './createPrice.module.css'
import { CommonInput } from '../../..'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  currentPrice: { name: string; price: number }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleAdd: () => void
}

const InfoCreator = ({ isOpen, setIsOpen, currentPrice, handleChange, handleAdd }: Props) => {
  const { showToast } = useToast()

  const validateForm = () => {
    if (currentPrice.name.trim() === '') {
      showToast('El título no puede estar vacío.', 'error')
      return false
    }

    if (currentPrice.price === 0) {
      showToast('El precio no puede estar vacío.', 'error')
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
          <CommonInput
            label="Título"
            name="name"
            placeholder="Ingrese el título aquí"
            value={currentPrice.name}
            onChange={handleChange}
          />

          <CommonInput
            label="Precío"
            name="price"
            type="number"
            placeholder="Ingrese el valor aquí"
            value={currentPrice.price}
            onChange={handleChange}
          />
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
