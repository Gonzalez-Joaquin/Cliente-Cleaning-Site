import { useDashboardContext } from '../../Context/DashboardContext'
import MessagesTable from '../MessagesTable/MessagesTable'
import ServicesTable from '../ServicesTable/ServicesTable'

const TableWizzard = () => {
  const { pageActive } = useDashboardContext()
  
  return pageActive === 'services' ? <ServicesTable /> : <MessagesTable />
}

export default TableWizzard
