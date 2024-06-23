import React, { useEffect } from 'react'
import styles from './toast.module.css'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'warning'
  onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>
}

export default Toast
