import { useEffect, useMemo, useState } from 'react'
import { useToast } from '../../../../../Context/ToastContext'

interface IPrice {
  id: number
  name: string
  price: number
}

const useManagePrice = (
  prices: Array<Omit<IPrice, 'id'>>,
  onEditPrice: (
    prices: Array<{
      name: string
      price: number
    }>
  ) => void
) => {
  const [isPriceValid, setIsPriceValid] = useState<boolean>(true)
  const [allPrices, setAllPrices] = useState<Array<IPrice>>([])
  const [popUpOpen, setPopUpOpen] = useState<boolean>(false)
  const [priceToDelete, setPriceToDelete] = useState<IPrice | null>(null)
  const { showToast } = useToast()

  const [form, setForm] = useState<{ original: IPrice | undefined; value: IPrice }>({
    original: undefined,
    value: {
      id: 0,
      name: '',
      price: 0,
    },
  })

  const togglePopUp = () => setPopUpOpen(!popUpOpen)

  const validForm = useMemo(() => {
    const nameExists = allPrices.some(item => item.name.toLowerCase() === form.value.name.toLowerCase())
    return form.value.name.trim() !== '' && isPriceValid && (!nameExists || form.original !== undefined)
  }, [form, allPrices, isPriceValid])

  const handleEdit = (param: number) => {
    const response = allPrices.find(item => item.id === param)
    if (response) {
      togglePopUp()
      setForm({
        original: response,
        value: { ...response },
      })
    }
  }

  const confirmDelete = (param: number) => {
    const response = allPrices.find(item => item.id === param)
    if (response) {
      setPriceToDelete(response)
    }
  }

  const handleDelete = () => {
    if (priceToDelete) {
      setAllPrices(allPrices.filter(item => item.id !== priceToDelete.id))
      onEditPrice(
        allPrices
          .filter(item => item.id !== priceToDelete.id)
          .map(item => {
            return { name: item.name, price: item.price }
          })
      )
      setPriceToDelete(null)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prevData => ({
      ...prevData,
      value: {
        ...prevData.value,
        [name]: name === 'price' ? parseFloat(value) || 0 : value,
      },
    }))
  }

  const cleanForm = () => {
    setForm({
      original: undefined,
      value: {
        id: 0,
        name: '',
        price: 0,
      },
    })
  }

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    if (validForm) {
      setAllPrices(prevPrices => {
        const updatedPrices = form.original
          ? prevPrices.map(item => (item.id === form.original?.id ? form.value : item))
          : [...prevPrices, { ...form.value, id: prevPrices.length }]

        onEditPrice(
          updatedPrices.map(item => ({
            name: item.name,
            price: item.price,
          }))
        )

        return updatedPrices
      })

      togglePopUp()
    } else {
      showToast('Formulario inválido', 'error')
    }
  }

  useEffect(() => {
    setAllPrices(
      prices.map((item, key) => {
        return { ...item, id: key }
      })
    )
  }, [prices])

  useEffect(() => {
    const timer = setTimeout(() => {
      const isValid = !isNaN(form.value.price) && form.value.price > 0
      setIsPriceValid(isValid)
    }, 350)

    return () => clearTimeout(timer)
  }, [form.value.price])

  useEffect(() => {
    if (popUpOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      cleanForm()
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [popUpOpen])

  useEffect(() => {
    if (priceToDelete) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [priceToDelete])

  return {
    form,
    validForm,
    allPrices,
    popUpOpen,
    priceToDelete,
    handleEdit,
    confirmDelete,
    handleDelete,
    togglePopUp,
    handleSubmit,
    handleChange,
    setPriceToDelete,
  }
}

export default useManagePrice
