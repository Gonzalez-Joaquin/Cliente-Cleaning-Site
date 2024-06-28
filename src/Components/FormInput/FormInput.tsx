import styles from './input.module.css'

interface Props {
  type?: 'text' | 'password' | 'email' | 'textarea'
  name: string
  placeholder: string
  value: string
  newValue: (value: string) => void
}

const FormInput = ({ name, placeholder, value,type, newValue }: Props) => {
  return (
    <div className={`${styles.container} ${type === 'textarea' ? styles.textareaContainer : ''}`}>
      <label htmlFor={name} className={styles.label}>
        {placeholder}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          autoComplete="off"
          className={styles.textarea}
          onChange={e => newValue(e.target.value)}
        />
      ) : (
        <input
          type={type || 'text'}
          id={name}
          name={name}
          value={value}
          autoComplete="off"
          className={styles.input}
          onChange={e => newValue(e.target.value)}
        />
      )}
    </div>
  )
}

export default FormInput
