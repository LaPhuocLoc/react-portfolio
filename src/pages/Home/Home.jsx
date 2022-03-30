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
              <span>frontend developer</span>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo orci, maximus quis auctor ac, interdum et ante. Nunc a vulputate ipsum. Proin efficitur dapibus dolor at elementum.</p>
            <Button
              className=""
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