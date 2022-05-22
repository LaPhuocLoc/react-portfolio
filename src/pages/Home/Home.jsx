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
            <h1>Hello, I'm
              <span>La Phuoc Loc</span>
            </h1>
            <p>
              初めまして！中央情報専門学校IT・WEB学科のロックと申します。ベトナムのホーチミン市の出身です。趣味はギター弾き語りで日本の歌を歌うことです。よろしくお願いいたします！
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