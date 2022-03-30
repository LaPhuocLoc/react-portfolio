import React, { useState, useEffect } from 'react'
import './toggletheme.scss'
const ToggleTheme = () => {

  const [theme, setTheme] = useState('dark')
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const handleTheme = () => {
    setTheme(nextTheme)
    document.querySelector('.toggle-theme').classList.toggle('active')
  }
  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <button className="toggle-theme " onClick={handleTheme}>
      <i className='bx bxs-moon'></i>
      <i className='bx bx-bulb'></i>
    </button>
  )
}

export default ToggleTheme