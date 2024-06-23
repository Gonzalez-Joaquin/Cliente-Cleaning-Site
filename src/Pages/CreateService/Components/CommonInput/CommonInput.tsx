import React from 'react'
import style from './commonInput.module.css'

interface Props {
  type?: 'text' | 'textarea' | 'number'
  label: string
  name: string
  placeholder: string
  value: string | number
  onChange: React.ChangeEventHandler<HTMLInputElement> | React.ChangeEventHandler<HTMLTextAreaElement>
  required?: boolean
}

const CommonInput = ({ type = 'text', name, label, value, placeholder, onChange, required = false }: Props) => {
  return (
    <label className={style.commonInput}>
      {label}
      {type === 'number' ? (
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          required={required}
          autoComplete="off"
        />
      ) : type === 'text' ? (
        <input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          required={required}
          autoComplete="off"
        />
      ) : (
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          required={required}
          autoComplete="off"
        />
      )}
    </label>
  )
}

export default CommonInput
