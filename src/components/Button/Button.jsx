import React, { useRef } from 'react'
import './button.scss'

const Button = props => {

  const btnRef = useRef(null)

  const handleHoverIn = () => {
    btnRef.current.classList.add('is-hover')
  }
  const handleHoverOut = () => {
    btnRef.current.classList.remove('is-hover')
  }
  return (
    <button
      className={`btn ${props.className}`}
      type={props.type}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      ref={btnRef}
    >
      {props.children}
    </button>
  )
}

export default Button