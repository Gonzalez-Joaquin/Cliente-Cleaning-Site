import React, { useEffect, useState } from 'react'
import { Button } from '../../../../Components'
import { useCreateService } from '../../CreateService'
import style from './pricesForm.module.css'
import { CreatePice, PriceTable } from './Components'
import { useToast } from '../../../../Context/ToastContext'

const PricesForm = () => {
  const { serviceData, setPrices, handleGoBack } = useCreateService()
  const { showToast } = useToast()

  const [priceList, setPriceList] = useState<Array<{ name: string; price: number }>>([])
  const [currentPrice, setCurrentPrice] = useState<{ name: string; price: number }>({ name: '', price: 0 })
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (serviceData && serviceData.prices) {
      setPriceList(serviceData.prices)
    }
  }, [serviceData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCurrentPrice(prevPrice => ({ ...prevPrice, [name]: value }))
  }

  const handleAdd = () => {
    if (editIndex !== null) {
      const updatedList = [...priceList]
      updatedList[editIndex] = currentPrice
      setPriceList(updatedList)
      setEditIndex(null)
    } else {
      setPriceList([...priceList, currentPrice])
    }
    setCurrentPrice({ name: '', price: 0 })
  }

  const handleEdit = (index: number) => {
    setCurrentPrice(priceList[index])
    setEditIndex(index)
  }

  const handleRemove = (index: number) => {
    const updatedList = priceList.filter((_, i) => i !== index)
    setPriceList(updatedList)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (priceList.length > 0) {
      setPrices(priceList)
    } else {
      showToast('Debe existir al menos un precio para continuar.', 'error')
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.header}>
        <h2>Precios</h2>
        <button className={style.button} type="button" onClick={() => setIsOpen(true)}>
          <i className="fi fi-br-plus" />
        </button>
      </div>
      <div className={style.container}>
        {priceList.length > 0 ? (
          <div className={style.tableContainer}>
            <PriceTable priceList={priceList} handleEdit={handleEdit} handleRemove={handleRemove} />
          </div>
        ) : (
          <div className={style.empty}>
            <i className="fi fi-br-info" />
            <div className={style.emptyText}>
              <span>No se encontró información de precios relacionados a este servicio,</span>
              <span>comience creando uno para continuar.</span>
            </div>
          </div>
        )}
      </div>
      <CreatePice
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentPrice={currentPrice}
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

export default PricesForm
