import { Element } from 'react-scroll'

import style from './contact.module.css'
import { HomeModel } from '../../../../Models/routes.models'
import { Button, FormInput } from '../../../../Components'
import { useAppSelector } from '../../../../Hooks/useRedux'

const Contact = () => {
  const ContactListData = useAppSelector(store => store.social)

  return (
    <Element className={style.element} name={HomeModel.CONTACT}>
      <section className={style.section}>
        <article className={style.article}>
          <div className={style.container}>
            <h2>Contacto</h2>
            <div className={style.content}>
              <div className={style.info}>
                <h3>Redes sociales</h3>
                <ul className={style.list}>
                  {ContactListData.map(item => (
                    <li className={style.item} key={item.id}>
                      {item.link ? (
                        <a href={item.link}>
                          <i className={`fi fi-brands-${item.icon}`} />
                          <span>{item.content}</span>
                        </a>
                      ) : (
                        <span>
                          <i className={`fi fi-brands-${item.icon}`} />
                          {item.content}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.form}>
                <form onSubmit={e => e.preventDefault()}>
                  <h4>Formulario de contacto</h4>
                  <div className={style.formField}>
                    <FormInput type="text" name={'contactName'} placeholder={'Nombre'} newValue={e => console.log(e)} />
                    <FormInput
                      type="email"
                      name={'contactEmail'}
                      placeholder={'Email'}
                      newValue={e => console.log(e)}
                    />
                  </div>
                  <div className={style.formTextArea}>
                    <FormInput
                      type="textarea"
                      name={'contactMessage'}
                      placeholder={'Mensaje'}
                      newValue={e => console.log(e)}
                    />
                  </div>
                  <Button value="Enviar" type="submit" icon="paper-plane" disabled />
                </form>
              </div>
            </div>
          </div>
        </article>
      </section>
      <footer className={style.footer}>(C) Copyright 2024, Todos los derechos reservados - Vesion: 0.0.1</footer>
    </Element>
  )
}

export default Contact
