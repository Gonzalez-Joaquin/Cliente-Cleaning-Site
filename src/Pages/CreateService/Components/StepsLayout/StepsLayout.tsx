import style from './StepsLayout.module.css'

interface Props {
  step: number
}

const StepsLayout = ({ step }: Props) => (
  <aside className={style.aside}>
    <div className={style.container}>
      <div className={`${style.content} ${step >= 1 ? style.active : ''}`}>
        <div>
          <span>1</span>
        </div>
      </div>
      <div className={`${style.content} ${step >= 2 ? style.active : ''}`}>
        <div>
          <span>2</span>
        </div>
      </div>
      <div className={`${style.content} ${step >= 3 ? style.active : ''}`}>
        <div>
          <span>3</span>
        </div>
      </div>
      <div className={`${style.content} ${step >= 4 ? style.active : ''}`}>
        <div>
          <span>4</span>
        </div>
      </div>
    </div>
  </aside>
)

export default StepsLayout
