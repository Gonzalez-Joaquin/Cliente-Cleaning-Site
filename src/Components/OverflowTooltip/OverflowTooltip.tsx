import { useRef, useState, useEffect } from 'react'
import style from './overflowTooltip.module.css'

interface OverflowTooltipProps {
  children: React.ReactNode
}

const OverflowTooltip = ({ children }: OverflowTooltipProps) => {
  const [isOverflow, setIsOverflow] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const checkOverflow = () => {
      if (elementRef.current) {
        if (elementRef.current.parentElement) {
          const hasOverflow = elementRef.current.scrollWidth > elementRef.current.parentElement.clientWidth - 34
          setIsOverflow(hasOverflow)
        }
      }
    }

    setTimeout(checkOverflow, 0)

    // TODO cambiar
    window.addEventListener('resize', checkOverflow)

    return () => {
      window.removeEventListener('resize', checkOverflow)
    }
  }, [children])

  return (
    <span className={style.container} ref={elementRef}>
      <p className={style.content}>{children}</p>
      {isOverflow && <span className={style.tooltip}>{children}</span>}
    </span>
  )
}

export default OverflowTooltip
