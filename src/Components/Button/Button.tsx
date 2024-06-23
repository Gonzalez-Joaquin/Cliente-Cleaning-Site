import style from './button.module.css'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  styles?: 'default' | 'outlined' | 'filled' | 'elevated' | 'tonal'
  value?: string
  icon?: string
  iconClassName?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  value,
  icon,
  iconClassName,
  styles = 'filled',
  disabled = false,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <button type={type} className={`${style.button} ${style[styles]}`} onClick={onClick} disabled={disabled}>
      {icon ? <i className={`fi fi-br-${icon} ${iconClassName || ''}`}></i> : null}
      {value || null}
    </button>
  )
}

export default Button
