import { useState } from 'react'
import { useToast } from '../../../../../../Context/ToastContext'
import { Button } from '../../../../../../Components'
import { CommonInput, PopUpInput } from '../../..'
import style from './infoTextSelector.module.css'

interface Props {
  texts: Array<{ title: string; text: string }>
  onAddText: (title: string, text: string) => void
  onEditText: (index: number, newText: { title: string; text: string }) => void
  handleDelete: () => void
}

const InfoTextSelector = ({ texts, onAddText, onEditText, handleDelete }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentText, setCurrentText] = useState({ title: '', text: '' })
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const { showToast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCurrentText(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSave = () => {
    if (currentText.title.trim() === '' || currentText.text.trim() === '') {
      showToast('Por favor complete todos los campos', 'error')
      return
    }

    if (editIndex !== null) {
      onEditText(editIndex, currentText)
    } else {
      onAddText(currentText.title, currentText.text)
    }
    resetForm()
  }

  const handleEdit = (index: number) => {
    setCurrentText(texts[index])
    setEditIndex(index)
    setIsEditing(true)
  }

  const resetForm = () => {
    setCurrentText({ title: '', text: '' })
    setEditIndex(null)
    setIsEditing(false)
    if (!isEditing && !editIndex) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <PopUpInput
        label="Información extra"
        onClick={() => setIsOpen(!isOpen)}
        size={texts.length}
        onDeleteClick={e => {
          e.stopPropagation()
          handleDelete()
        }}
      />
      <div className={`${style.content} ${isOpen ? style.open : ''}`}>
        <div className={`${style.popUp} ${isOpen ? style.open : ''}`}>
          <div className={style.header}>
            <div className={style.headerContainer}>
              <Button icon="angle-left" styles="default" onClick={resetForm} />
              <h2>Información</h2>
            </div>
            {!isEditing && (
              <Button
                icon="plus"
                styles="default"
                onClick={() => {
                  setIsEditing(true)
                  setIsOpen(true)
                }}
              />
            )}
          </div>
          <div className={style.body}>
            {!isEditing ? (
              texts.length > 0 ? (
                texts.map((text, index) => (
                  <div key={index} className={style.textItem} onClick={() => handleEdit(index)}>
                    <h4>{text.title}</h4>
                    <i className="fi fi-br-angle-right" />
                  </div>
                ))
              ) : (
                <div className={style.empty}>
                  <i className="fi fi-br-info" />
                  <span>No se encontró información extra, cree una para continuar</span>
                </div>
              )
            ) : (
              <div className={style.newText}>
                <CommonInput
                  label={'Nuevo Título'}
                  name={'title'}
                  placeholder={'Título'}
                  value={currentText.title}
                  onChange={handleChange}
                />
                <CommonInput
                  type="textarea"
                  label={'Nuevo Párrafo'}
                  name={'text'}
                  placeholder={'Ingrese el texto aquí'}
                  value={currentText.text}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className={style.footer}>
            <Button value="Cancelar" styles="default" onClick={resetForm} />
            {isEditing ? (
              <Button value={'Guardar'} styles="default" onClick={handleSave} />
            ) : (
              <Button value={'Aplicar'} styles="default" onClick={() => setIsOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoTextSelector
