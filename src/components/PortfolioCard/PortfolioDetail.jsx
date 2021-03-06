import React from 'react'
import Gallery from '../Gallery/Gallery'
import './portfolio-detail.scss'
const PortfolioDetail = ({ item, id }) => {

  const handleClose = (e) => {
    // document.querySelector(`#portfolio-detail-${id} iframe`).setAttribute('src', '')
    document.querySelector(`#portfolio-detail-${id}`).classList.remove('active')
    document.body.classList.remove("hide-scrolling")

  }

  return (
    <div className="portfolio-detail overlay" id={`portfolio-detail-${id}`}>
      <div className="portfolio-detail__inner">
        <div className="portfolio-detail__content">
          <div className="portfolio-detail__content-left">
            <h3><span>{item.title}</span></h3>
            {/* <div className="img mb-1">
              <div className="img-wrap" style={{ backgroundImage: `url(${item.thumb})` }}></div>
            </div> */}
            <Gallery item={item}/>

          </div>
          <div className="portfolio-detail__content-right">
            <h3><span>詳細</span></h3>
            {/* <div className="video">
              <div className="frame">
                <iframe src="" title="portfolio" allowFullScreen></iframe>
              </div>
            </div> */}
            <p>{item.description}</p>
            <ul>
              <li> Created - <span>{item.date}</span> </li>
              <li> Role - <span>{item.role}</span> </li>
              <li> Frontend - <span>{item.frontend.join(", ")}</span> </li>
              <li> Backend - <span>{item.backend}</span> </li>
              <li> Tags - <span style={{ textTransform: "lowercase" }}>{item.tags.join(' / ')}</span> </li>
              <li> Source - <a href={item.source} target="_blank">{item.source}</a> </li>
              <li> Demo - <a href={item.preview} target="_blank">{item.preview}</a> </li>
              <li> Preview video - <a href={item.video} target="_blank">{item.video}</a> </li>
            </ul>
          </div>
          <div className="close-btn" onClick={handleClose}>
            <i className='bx bx-x'></i>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PortfolioDetail