import { useNavigate } from 'react-router-dom'

import { useDashboardContext } from '../../Context/DashboardContext'
import RoutesModel from '../../Models/routes.models'
import style from './searchBar.module.css'

const SearchBar = () => {
  const { searchValue, setSearchValue, pageActive } = useDashboardContext()
  const navigate = useNavigate()

  return (
    <div className={style.searchBar}>
      <form className={style.search} onSubmit={e => e.preventDefault()}>
        <i className={`fi fi-br-search ${style.lupe}`} />
        <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          name="buscador"
          id="buscador"
          placeholder="Buscar..."
        />
        {searchValue.length > 0 ? (
          <i
            className={`fi fi-br-cross ${style.cross}`}
            onClick={e => {
              e.stopPropagation()
              setSearchValue('')
            }}
          />
        ) : (
          ''
        )}
      </form>
      {pageActive === 'services' ? (
        <button type="button" className={style.button} onClick={() => navigate(`/${RoutesModel.CREATE}`)}>
          <span>Crear Servicio</span>
          <i className="fi fi-br-plus" />
        </button>
      ) : null}
    </div>
  )
}

export default SearchBar
