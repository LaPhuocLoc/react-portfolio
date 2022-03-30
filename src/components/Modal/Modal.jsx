import React, { useState, useEffect, useRef } from 'react'

import './modal.scss'

const Modal = props => {

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active)
  }, [props.active]);

  return (
    <div
      id={props.id}
      className={`modal ${active ? 'active' : ''}`}
    >
      {props.children}
    </div>
  )
}



export const ModalContent = props => {

  return (
    <div
      className={`modal__content ${props.className}`}
    >
      {props.children}
    </div>
  )
}


export default Modal