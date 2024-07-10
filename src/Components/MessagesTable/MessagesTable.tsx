import { useEffect, useState } from 'react'

import { IMessageData } from '../../Store/Reducers/contacts.reducer'
import { TableBody, TableHead, MessagePopUp } from './Components'
import style from './messageTable.module.css'

const MessagesTable = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [messageToRead, setMessageToRead] = useState<IMessageData | null>(null)

  useEffect(() => {
    if (messageToRead !== null) {
      setIsOpen(true)
    }
  }, [messageToRead])

  return (
    <div className={style.container}>
      <table className={style.table}>
        <TableHead />
        <TableBody setMessageToRead={setMessageToRead} />
        {/* <TableFooter /> */}
      </table>
      <MessagePopUp isOpen={isOpen} message={messageToRead} setIsOpen={setIsOpen} setMessage={setMessageToRead} />
    </div>
  )
}

export default MessagesTable
