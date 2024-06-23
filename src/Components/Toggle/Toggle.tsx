import './toggle.css'

interface Props {
  id: number
  value: boolean
  onChange: (value: boolean) => void
}

const Toggle = ({ id, value, onChange }: Props) => {
  return (
    <div className="checkbox-wrapper-3">
      <input type="checkbox" id={`cbx-${id}`} checked={value} onChange={e => onChange(e.target.checked)} />
      <label htmlFor={`cbx-${id}`} className="toggle">
        <span></span>
      </label>
    </div>
  )
}

export default Toggle
