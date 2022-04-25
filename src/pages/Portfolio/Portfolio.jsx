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
    title: 'react landing page',
    description: 'A react game landing page using sass, vitejs,...',
    source: 'https://github.com/LaPhuocLoc',
    preview: 'https://react-game-landing-page.netlify.app/',
    video: 'https://www.youtube.com/watch?v=Agv30p2llrU',
    tags: ['ui/ux', 'reactjs', 'vitejs', 'sass']
  },
  {
    id: 2,
    thumb: thumb2,
    ytb: 'Agv30p2llrU',
    title: 'react landing page',
    description: 'A responsive react movie app using sass, axios,...',
    source: 'https://github.com/LaPhuocLoc',
    preview: 'https://react-tmdb-movie-app.netlify.app/',
    video: 'https://www.youtube.com/watch?v=Agv30p2llrU',
    tags: ['ui/ux', 'sass']
  },
  {
    id: 3,
    thumb: thumb3,
    ytb: 'Agv30p2llrU',
    title: 'react landing page',
    description: 'A react game landing page using sass, vitejs,...',
    source: 'https://github.com/LaPhuocLoc',
    preview: 'https://react-game-landing-page.netlify.app/',
    video: 'https://www.youtube.com/watch?v=Agv30p2llrU',
    tags: ['ui/ux', 'reactjs', 'vitejs', 'sass']
  },
  {
    id: 4,
    thumb: thumb4,
    ytb: 'Agv30p2llrU',
    title: 'react landing page',
    description: 'A responsive react movie app using sass, axios,...',
    source: 'https://github.com/LaPhuocLoc',
    preview: 'https://react-tmdb-movie-app.netlify.app/',
    video: 'https://www.youtube.com/watch?v=Agv30p2llrU',
    tags: ['reactjs', 'sass']
  },
  {
    id: 5,
    thumb: thumb5,
    ytb: 'Agv30p2llrU',
    title: 'react landing page',
    description: 'A react game landing page using sass, vitejs,...',
    source: 'https://github.com/LaPhuocLoc',
    preview: 'https://react-game-landing-page.netlify.app/',
    video: 'https://www.youtube.com/watch?v=Agv30p2llrU',
    tags: ['ui/ux', 'reactjs', 'vitejs', 'sass']
  },
  {
    id: 6,
    thumb: thumb6,
    ytb: 'Agv30p2llrU',
    title: 'react web app',
    description: 'A responsive react movie app using sass, axios,...',
    source: 'https://github.com/LaPhuocLoc',
    preview: 'https://react-tmdb-movie-app.netlify.app/',
    video: 'https://www.youtube.com/watch?v=Agv30p2llrU',
    tags: ['reactjs', 'sass', 'web app']
  },
  {
    id: 7,
    thumb: thumb7,
    ytb: 'Agv30p2llrU',
    title: 'react web app',
    description: 'A react game landing page using sass, vitejs,...',
    source: 'https://github.com/LaPhuocLoc',
    preview: 'https://react-game-landing-page.netlify.app/',
    video: 'https://www.youtube.com/watch?v=Agv30p2llrU',
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
          <Tabs className="tab">
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