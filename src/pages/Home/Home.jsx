import React from 'react'
import Button from '../../components/Button/Button'
import './home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  window.scrollTo(0, 0)

  return (
    <>
      <div className="slide"></div>
      <div className="section home" data-aos="fade-up">
        <div className="color-block"></div>
        <div className="home__img">
          <div className="home__img-wrap"></div>
        </div>
        <div className="home__text">
          <div className="home__text-wrap">
            <h1>I'm La Phuoc Loc.
              <span>web developer</span>
            </h1>
            <p>ベトナム出身のエンジニア。HTML, CSS, Javascriptを中心に様々なウェブサイト開発を経験してきました。
              現在、JavascriptやPython, React を習得しています。特にReactでのWEBサイト構築に自信があり、このサイトや、ゲームランディングページ,Netflixのような動画配信サイトなどを作成しました。
              

            </p>
            <Button
              className="portfolio-btn"
            >
              <Link to="/portfolio">
                <span className="btn-text">My works</span>
                <span className="btn-icon">
                  <i className='bx bx-right-arrow-alt'></i>
                </span>
              </Link>
            </Button>
            <Button
              className="about-btn"
            >
              <Link to="/about">
                <span className="btn-text">more about me</span>
                <span className="btn-icon">
                  <i className='bx bx-right-arrow-alt'></i>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home