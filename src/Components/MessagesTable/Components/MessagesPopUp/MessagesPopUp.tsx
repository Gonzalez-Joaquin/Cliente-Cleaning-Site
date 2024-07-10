import { IMessageData } from '../../../../Store/Reducers/contacts.reducer'
import style from './messagesPopUp.module.css'

interface Props {
  isOpen: boolean
  message: IMessageData | null
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setMessage: React.Dispatch<React.SetStateAction<IMessageData | null>>
}

const MessagePopUp = ({ isOpen, message, setIsOpen, setMessage }: Props) => {
  return (
    <div className={`${style.container} ${style[String(isOpen)]}`}>
      <div className={style.popUp}>
        <div className={style.header}>
          <button
            onClick={() => {
              setIsOpen(false)
              setMessage(null)
            }}>
            <i className={'fi fi-br-angle-left'}></i>
            <span>Volver</span>
          </button>
        </div>
        <div className={style.body}>
          {message !== null ? (
            <div className={style.content}>
              <h3>{message.name}</h3>
              <span>{message.email}</span>
              <div className={style.messageContainer}>
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className={style.empty}>
              <i className={'fi fi-br-info'}></i>
              <h3>Ups!, ocurrió un error, pruebe reintentando.</h3>
            </div>
          )}
        </div>
        <div className={style.footer}>
          <button>
            <span>Borrar</span>
            <i className="fi fi-br-trash"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessagePopUp
