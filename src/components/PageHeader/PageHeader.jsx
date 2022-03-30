import React from 'react'
import './page-header.scss'
const PageHeader = ({ white, yellow, titleBg }) => {
  return (
    <div className="page-header">
      <h1><span>{white}</span> {yellow}</h1>
      <span>{titleBg}</span>
    </div>
  )
}

export default PageHeader