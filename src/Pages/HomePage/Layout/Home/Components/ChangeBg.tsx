import { useEffect, useState } from 'react'

import { Button } from '../../../../../Components'
import style from './ChangeBg.module.css'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onConfirm: (file: File) => void
  onCancel: () => void
}

const ChangeBg = ({ isOpen, onConfirm, onCancel }: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)

      const reader = new FileReader()
      reader.onloadend = () => {
        setFilePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleConfirmClick = () => {
    if (selectedFile) {
      onConfirm(selectedFile)
    }
  }

  useEffect(() => {
    setFilePreview('')
    setSelectedFile(null)
  }, [isOpen])

  return (
    <div className={`${style.container} ${style[String(isOpen)]}`}>
      <div className={style.popup}>
        <div className={style['popup-header']}>
          <Button icon="angle-left" styles="default" type="reset" onClick={onCancel} />
          <h2>Cambiar fondo</h2>
        </div>
        <div className={style['popup-body']}>
          <label className={style.fileUploader}>
            <div className={style.preview}>
              {filePreview ? (
                <div className={style.previewContainer}>
                  {selectedFile?.type.startsWith('video') ? (
                    <video controls src={filePreview} className={style.previewVideo} />
                  ) : (
                    <img src={filePreview} alt="Previsualización" className={style.previewImage} />
                  )}
                </div>
              ) : (
                <div className={style.placeholder}>No se ha seleccionado archivo</div>
              )}
            </div>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              id="fileUpload"
              name="fileUpload"
              className={style.fileInput}
            />
            <label htmlFor="fileUpload" className={style.uploadButton}>
              Seleccionar archivo
            </label>
          </label>
        </div>
        <div className={style['popup-footer']}>
          <Button type="reset" styles="default" value="Cancelar" onClick={onCancel} />
          <Button type="submit" styles="default" value="Confirmar" onClick={handleConfirmClick} />
        </div>
      </div>
    </div>
  )
}

export default ChangeBg
