import React from 'react'
import './portfolio-card.scss'
const PortfolioCard = ({ item, id }) => {

  const handleClick = () => {
    // const videoUrl = `https://youtube.com/embed/${item.ytb}`
    // document.querySelector(`#portfolio-detail-${id} iframe`).setAttribute('src', videoUrl)
    document.querySelector(`#portfolio-detail-${id}`).classList.add('active')
    document.body.classList.add("hide-scrolling")
  }

  return (
    <div className="portfolio-card" onClick={handleClick}>
      <div className="bg-wrap" style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}></div>
      <h3>{item.title}</h3>
    </div>
  )
}

export default PortfolioCard