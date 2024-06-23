import style from './popUpInput.module.css'

interface Props {
  label: string
  placeholder?: string
  size: number
  onClick: React.MouseEventHandler<HTMLDivElement>
  onDeleteClick: React.MouseEventHandler<HTMLElement>
}

const PopUpInput = ({ label, placeholder, size, onClick, onDeleteClick }: Props) => {
  return (
    <div className={style.container} onClick={onClick}>
      <span>{label}</span>
      <div className={style.content}>
        {size > 0 ? (
          <span className={style.tag}>
            {size}
            {' Seleccionados'}
            <i className={`fi fi-br-cross ${style.cross}`} onClick={onDeleteClick} />
          </span>
        ) : (
          placeholder || 'Ninguno asignado'
        )}
        <i className={`fi fi-br-plus ${style.plus}`} />
      </div>
    </div>
  )
}

export default PopUpInput
