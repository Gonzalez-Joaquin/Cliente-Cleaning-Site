import { useWindowSize } from '../../../../Hooks/useWindowSize'
import { CommonInput } from '../../../CreateService/Components'
import { useAppSelector } from '../../../../Hooks/useRedux'
import PriceTableRow from './Components/PriceTableRow'
import useManagePrice from './Hooks/useManagePrice'
import { Button, ConfirmationPopUp } from '../../../../Components'
import style from './prices.module.css'

interface Props {
  title: string
  prices: Array<{
    name: string
    price: number
  }>
  onEditPrice: (
    prices: Array<{
      name: string
      price: number
    }>
  ) => void
}

const Prices = ({ prices, title, onEditPrice }: Props) => {
  const {
    form,
    popUpOpen,
    priceToDelete,
    allPrices,
    validForm,
    togglePopUp,
    handleEdit,
    confirmDelete,
    handleDelete,
    handleChange,
    handleSubmit,
    setPriceToDelete,
  } = useManagePrice(prices, onEditPrice)
  const loading = useAppSelector(state => state.services.loadingService)
  const user = useAppSelector(state => state.user)
  const [width] = useWindowSize()

  return (
    <article className={style.prices}>
      <div className={style.headerContainer}>
        <h2>{title}</h2>
        {user.name !== '' ? (
          <div className={style.headerContentContainer}>
            <div className={`${style.loadingItem} ${loading ? style.loading : ''}`}>
              <i className="fi fi-br-spinner" />
            </div>
            <Button icon="plus" type="button" styles="default" onClick={() => togglePopUp()} />
          </div>
        ) : null}
      </div>
      <table className={style.table}>
        {width > 1025 ? (
          <thead>
            <tr>
              <th className={style.services}>Servicio</th>
              <th className={style.price}>Precio</th>
              {user.name !== '' ? <th className={style.actions}>Acciones</th> : null}
            </tr>
          </thead>
        ) : null}
        <tbody className={style.tbody}>
          {allPrices.map(item => (
            <PriceTableRow key={item.id} item={item} handleEdit={handleEdit} handleDelete={confirmDelete} />
          ))}
        </tbody>
      </table>

      <div className={`${style['bg-popUp']} ${style[String(popUpOpen)]}`}>
        <div className={style.popUp}>
          <div className={style['popup-header']}>
            <Button icon="angle-left" styles="default" type="reset" onClick={() => togglePopUp()} />
            <h2>{form.original ? 'Editando' : 'Creando'}</h2>
          </div>
          <div className={style['popup-body']}>
            <form onSubmit={handleSubmit}>
              <CommonInput
                label="Titulo"
                name="name"
                value={form.value.name}
                onChange={handleChange}
                placeholder="Ingrese titulo"
              />
              <CommonInput
                label="Precio"
                name="price"
                value={form.value.price}
                onChange={handleChange}
                placeholder="Ingrese precio"
              />
            </form>
          </div>
          <div className={style['popup-footer']}>
            <Button type="reset" styles="default" value="cancelar" onClick={() => togglePopUp()} />
            <Button
              type="submit"
              styles="default"
              value={form.original ? 'Confirmar' : 'Asignar'}
              disabled={!validForm}
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      </div>

      <ConfirmationPopUp
        title="Confirmar Eliminación"
        description={`¿Estás seguro de que quieres eliminar el precio de "${priceToDelete?.name}"?`}
        isOpen={priceToDelete ? true : false}
        onConfirm={handleDelete}
        onCancel={() => setPriceToDelete(null)}
      />
    </article>
  )
}

export default Prices
