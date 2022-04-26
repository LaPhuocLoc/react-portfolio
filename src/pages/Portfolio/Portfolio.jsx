import React from 'react'
import './portfolio.scss'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import PageHeader from './../../components/PageHeader/PageHeader';
import { thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb9 } from '../../assets/portfolio/portfolio'
import PortfolioDetail from '../../components/PortfolioCard/PortfolioDetail';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

const portfolio = [
  {
    id: 1,
    thumb: thumb1,
    ytb: 'Agv30p2llrU',
    title: 'E-Commerce Store',
    description: 'A react game landing page using sass, vitejs,...',
    source: 'https://github.com/LaPhuocLoc/commerce-app',
    preview: 'https://rokku-commerce.netlify.app/',
    video: 'https://youtu.be/fJ6J75EB3dw',
    tags: ['ui/ux', 'reactjs', 'vitejs', 'sass']
  },
  {
    id: 2,
    thumb: thumb2,
    ytb: 'Agv30p2llrU',
    title: 'Game Landing Page',
    description: 'A responsive react movie app using sass, axios,...',
    source: 'https://github.com/LaPhuocLoc/landing-page',
    preview: 'https://rokku-game.netlify.app/',
    video: 'https://youtu.be/Agv30p2llrU',
    tags: ['ui/ux', 'sass']
  },
  {
    id: 3,
    thumb: thumb3,
    ytb: 'Agv30p2llrU',
    title: 'Movie App',
    description: 'A react game landing page using sass, vitejs,...',
    source: 'https://github.com/LaPhuocLoc/movie-app',
    preview: 'https://rokku-movie.netlify.app/',
    video: 'https://youtu.be/EwX2gFZFobA',
    tags: ['ui/ux', 'reactjs', 'vitejs', 'sass']
  },
  {
    id: 4,
    thumb: thumb4,
    ytb: 'Agv30p2llrU',
    title: 'My Portfolio',
    description: 'このWebページです。HTMLとCSS(SASS),ReactJSを使用し、シングルページアプリケーションに仕上げました。',
    source: 'https://github.com/LaPhuocLoc/react-portfolio',
    preview: 'https://rokku.netlify.app/',
    video: 'なし',
    tags: ['reactjs', 'sass']
  },
  {
    id: 5,
    thumb: thumb5,
    ytb: 'Agv30p2llrU',
    title: 'Music Player',
    description: 'A react game landing page using sass, vitejs,...',
    source: 'https://github.com/LaPhuocLoc/Mp3Player',
    preview: 'https://rokku-music.netlify.app/',
    video: 'https://youtu.be/kvvyQNWTAMQ',
    tags: ['ui/ux', 'reactjs', 'vitejs', 'sass']
  },
  {
    id: 6,
    thumb: thumb6,
    ytb: 'Agv30p2llrU',
    title: 'Theater Homepage',
    description: 'A responsive react movie app using sass, axios,...',
    source: 'https://github.com/LaPhuocLoc/Movie-Theater',
    preview: 'https://rokku-theater.netlify.app/',
    video: 'https://youtu.be/2MY77Glw-3Q',
    tags: ['reactjs', 'sass', 'web app']
  },
  {
    id: 7,
    thumb: thumb7,
    ytb: 'Agv30p2llrU',
    title: 'MyFoodie',
    description: 'A react game landing page using sass, vitejs,...',
    source: 'https://github.com/LaPhuocLoc/HelloWorldGroup',
    preview: '',
    video: '',
    tags: ['ui/ux', 'vitejs', 'sass', 'web app']
  },
]

const Portfolio = () => {
  window.scrollTo(0, 0)

  return (
    <>
      <div className="slide"></div>
      <div className="section portfolio mb-3" data-aos="fade-up">
        <PageHeader white='my' yellow='portfolio' titleBg='works' />
        <div className="container">
          <Tabs className="tab" defaultIndex={2}>
            <TabList className="tab__nav">
              <Tab className="tab__nav-item">All</Tab>
              <Tab className="tab__nav-item">UI/UX</Tab>
              <Tab className="tab__nav-item">Reactjs</Tab>
              <Tab className="tab__nav-item">Web app</Tab>
            </TabList>

            <TabPanel className="tab__panel">
              {portfolio.map((item, i) => (
                <PortfolioCard item={item} id={item.id} key={i} />
              ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('ui/ux')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('reactjs')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('web app')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {portfolio.map((item, i) => (
        <PortfolioDetail item={item} id={item.id} key={i} />
      ))}
    </>
  )
}

export default Portfolio