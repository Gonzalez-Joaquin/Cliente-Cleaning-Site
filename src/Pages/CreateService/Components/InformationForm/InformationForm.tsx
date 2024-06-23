import React, { useEffect, useState } from 'react'
import { useToast } from '../../../../Context/ToastContext'
import { useCreateService } from '../../CreateService'
import style from './informationForm.module.css'
import { Button } from '../../../../Components'
import { InfoCreator, InfoTable } from './Components'

const InformationForm = () => {
  const { serviceData, setInformation, handleGoBack } = useCreateService()
  const { showToast } = useToast()

  const [informationList, setInformationList] = useState<Array<{ img: string; title: string; text: string }>>([])
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentInfo, setCurrentInfo] = useState<{ img: string; title: string; text: string }>({
    img: '',
    title: '',
    text: '',
  })

  useEffect(() => {
    if (serviceData && serviceData.information) {
      setInformationList(serviceData.information)
    }
  }, [serviceData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCurrentInfo(prevInfo => ({ ...prevInfo, [name]: value }))
  }

  const handleAdd = () => {
    if (editIndex !== null) {
      const updatedList = [...informationList]
      updatedList[editIndex] = currentInfo
      setInformationList(updatedList)
      setEditIndex(null)
    } else {
      setInformationList([...informationList, currentInfo])
    }
    setCurrentInfo({ img: '', title: '', text: '' })
    setIsOpen(false)
  }

  const handleEdit = (index: number) => {
    setCurrentInfo(informationList[index])
    setEditIndex(index)
    setIsOpen(true)
  }

  const handleRemove = (index: number) => {
    const updatedList = informationList.filter((_, i) => i !== index)
    setInformationList(updatedList)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (informationList.length > 0) {
      setInformation(informationList)
    } else {
      showToast('Debe haber al menos una información antes de continuar.', 'error')
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.header}>
        <h2>Información</h2>
        <button className={style.button} type="button" onClick={() => setIsOpen(true)}>
          <i className="fi fi-br-plus" />
        </button>
      </div>
      <div className={style.container}>
        {informationList.length > 0 ? (
          <div className={style.tableContainer}>
            <InfoTable informationList={informationList} handleEdit={handleEdit} handleRemove={handleRemove} />
          </div>
        ) : (
          <div className={style.empty}>
            <i className="fi fi-br-info" />
            <div className={style.emptyText}>
              <span>No se encontró imágenes o información relacionadas a este servicio,</span>
              <span>comience creando una para continuar.</span>
            </div>
          </div>
        )}
      </div>
      <InfoCreator
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentInfo={currentInfo}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <div className={style.footer}>
        <Button type="button" value="Volver" styles="default" onClick={handleGoBack} />
        <Button type="submit" value="Siguiente" />
      </div>
    </form>
  )
}

export default InformationForm
