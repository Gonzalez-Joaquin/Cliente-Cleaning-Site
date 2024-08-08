import { Button } from '..'
import styles from './ConfirmationPopup.module.css'

interface ConfirmationPopupProps {
  title: string
  description: string
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmationPopup = ({ title, description, isOpen, onConfirm, onCancel }: ConfirmationPopupProps) => {
  return (
    <div className={`${styles.bgPopUp} ${styles[String(isOpen)]}`}>
      <div className={styles.popUp}>
        <div className={styles.popupBody}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.popupFooter}>
          <Button styles="default" onClick={onCancel} value={'Cancelar'} />
          <Button styles="default" onClick={onConfirm} value={'Confirmar'} />
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPopup
