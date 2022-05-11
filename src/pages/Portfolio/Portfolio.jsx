import React from 'react'
import './portfolio.scss'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import PageHeader from './../../components/PageHeader/PageHeader';
import { thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7 } from '../../assets/portfolio/portfolio'
import PortfolioDetail from '../../components/PortfolioCard/PortfolioDetail';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

const portfolio = [
  {
    id: 1,
    thumb: thumb1,
    date: '2021年10月15日ー2021年11月23日',
    title: 'MyFoodie',
    description: '中央情報専門学校のプレゼンテーショングランプリ大会で1年生の制作部門(技術)「2位」を取りました作品です。４人のチームでWEBサイトを開発し、中国、ベトナム、日本の料理や観光地などを皆さんに紹介しようとした気持ちで、このウェブサイトを一緒に作成しました。フロントエンドはJavascript,CSSとBootstrapを利用して、Homeページ,ExplorerページとContactページ制作しました。バックエンドはString BootやMavenなどでWebAPIを作って,Recipeページを制作しました。ミニゲーム「Catch Food」は、キャラクターを操作しながら、空から落ちるフードをキャッチして、２０ポイントに取れたら勝利、非常に面白いゲームです。',
    role: 'フロントエンド',
    frontend: ['CSS', 'Bootstrap', 'Javascript'],
    backend: 'Java, Spring Boot',
    source: 'https://github.com/LaPhuocLoc/MyFoodie2',
    preview: 'https://rokku-food.netlify.app/',
    video: 'https://www.youtube.com/watch?v=rx-fLzNr1eM',
    tags: ['git', 'ui / ux', 'css', 'bootstrap', 'responsive', 'javascript', 'web api', 'web app', 'food', 'travel']
  },
  {
    id: 2,
    thumb: thumb2,
    date: '2022年3月4日ー2022年3月14日',
    title: 'Movie App',
    description: 'フロントエンドはSCSSとReact,バックエンドはTMDB APIを利用して、動画配信サービスのネットフリックスのようなWEBサイトを作成しました。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'React'],
    backend: 'The Movie Database (TMDB) API',
    source: 'https://github.com/LaPhuocLoc/movie-app',
    preview: 'https://rokku-movie.netlify.app/',
    video: 'https://youtu.be/EwX2gFZFobA',
    tags: ['react', 'scss', 'responsive', 'web api', 'axios', 'movie', 'web app']
  },
  {
    id: 3,
    thumb: thumb3,
    date: '2022年2月2日ー2022年2月16日',
    title: 'Game Landing Page',
    description: 'SCSSやReactJSを利用し、レスポンシブのゲームランディングページを作成しました。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'React'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/landing-page',
    preview: 'https://rokku-game.netlify.app/',
    video: 'https://youtu.be/Agv30p2llrU',
    tags: ['react', 'scss', 'vitejs', 'animation', 'game landing page', 'web design']
  },
  {
    id: 4,
    thumb: thumb4,
    date: '2022月3月25日2022月4月1日',
    title: 'My Portfolio',
    description: 'このWebページです。HTMLとCSS(SASS),ReactJSを使用し、シングルページアプリケーションに仕上げました。これまでに手がけた制作物、身につけたスキルをまとめています。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'React'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/react-portfolio',
    preview: 'https://rokku.netlify.app/',
    video: 'なし',
    tags: ['react', 'scss', 'ui/ux', 'responsive', 'animation', 'portfolio', 'web design']
  },
  {
    id: 5,
    thumb: thumb5,
    date: '2022年4月ー未定',
    title: 'E-Commerce Store(未完成)',
    description: 'SCSSやReactJSを利用し、レスポンシブのWEBデザインのECサイトを作成しています。未完成なので、バックエンドはまだ何もありません。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'Ant Design', 'React'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/commerce-app',
    preview: 'https://rokku-commerce.netlify.app/',
    video: 'https://youtu.be/fJ6J75EB3dw',
    tags: ['react', 'scss', 'responsive', 'ant design', 'ecommerce', 'web app']
  },
  {
    id: 6,
    thumb: thumb6,
    date: '2022年1月11日ー2022年1月17日',
    title: 'Music Player',
    description: 'CSSとJavascriptを用いてミュージックプレイヤーアプリを作成しました。',
    role: 'フロントエンド',
    frontend: ['CSS', 'Javascript'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/Mp3Player',
    preview: 'https://rokku-music.netlify.app/',
    video: 'https://youtu.be/kvvyQNWTAMQ',
    tags: ['javascript', 'css', 'ui/ux', 'music app']
  },
  {
    id: 7,
    thumb: thumb7,
    date: '2022年1月17日ー2022年1月19日',
    title: 'Theater Homepage',
    description: 'CSSやJavascript,Bootstrapを用いて映画館情報のレスポンシブのWEBサイトを作成しました。',
    role: 'フロントエンド',
    frontend: ['CSS', 'Bootstrap', 'Javascript'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/Movie-Theater',
    preview: 'https://rokku-theater.netlify.app/',
    video: 'https://youtu.be/2MY77Glw-3Q',
    tags: ['css', 'javascript', 'responsive', 'bootstrap', 'movie', 'web design']
  },

]

const Portfolio = () => {
  return (
    <>
      <div className="slide"></div>
      <div className="section portfolio mb-3" data-aos="fade-up">
        <PageHeader white='my' yellow='portfolio' titleBg='works' />
        <div className="container">
          <Tabs className="tab" defaultIndex={3}>
            <TabList className="tab__nav">
              <Tab className="tab__nav-item">CSS/JAVASCRIPT</Tab>
              <Tab className="tab__nav-item">SCSS/REACT</Tab>
              <Tab className="tab__nav-item">API使用</Tab>
              <Tab className="tab__nav-item">ALL</Tab>
            </TabList>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('javascript')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('react')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('web api')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio.map((item, i) => (
                <PortfolioCard item={item} id={item.id} key={i} />
              ))}
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