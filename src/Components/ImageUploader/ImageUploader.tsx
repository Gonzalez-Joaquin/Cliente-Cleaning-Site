import React, { useEffect, useState } from 'react'
import style from './imageUploader.module.css'

interface ImageUploaderProps {
  image: string
  label: string
  name: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ image, label, name, handleChange }) => {
  const [imagePreview, setImagePreview] = useState<string>(image)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setImagePreview(result)
        handleChange({
          target: {
            name: name,
            value: result,
          },
        } as React.ChangeEvent<HTMLInputElement>)
      }
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    setImagePreview(image)
  }, [image])

  return (
    <label className={style.container}>
      {label}
      <div className={style.imageUploader}>
        {imagePreview ? (
          <img src={imagePreview} alt="Previsualización" className={style.preview} />
        ) : (
          <div className={style.div}></div>
        )}
        <input type="file" id="fileUpload" accept="image/*" onChange={handleFileChange} className={style.fileInput} />
        <label htmlFor="fileUpload" className={style.uploadButton}>
          Seleccionar archivo
        </label>
      </div>
    </label>
  )
}

export default ImageUploader
