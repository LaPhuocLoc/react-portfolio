import React from 'react'
import './resume.scss'

const edu = [
  {
    time: '2018年7月　卒業',
    place: 'Ly Thuong Kiet High School',
    edu: '高等学校',
    description: '高校時代に学んでいたプログラミングで課題を解決した際に楽しみを感じたのきっかけで、IT業界に興味を持ちました。プログラミングを学ぶため、日本に来ました。 '
  },
  {
    time: '2019年4月ー2021月3月卒業',
    place: '神戸住吉国際日本語学校',
    edu: '日本語',
    description: '2019年4月から2021年3月まで神戸住吉国際日本語学校で日本語を勉強しました。'
  },
  {
    time: '2021年4月ー2023月3月卒業見込',
    place: '中央情報専門学校',
    edu: 'IT・Web学科',
    description: '学校で、Java言語やICT基礎などを学ぶ傍ら、授業以外でも独学でIT技術の学習を続けています。	'
  },
]
const exp = [
  {
    time: '2022年2月26日',
    place: 'プレゼンテーショングランプリ大会',
    exp: 'WEBサイト開発',
    description: '学校のプレゼンテーション大会に参加し、４人のチームでウェブサイトを作り、１年の技術部の2位を受賞することができました。'
  },
]

const Resume = () => {
  return (
    <>
      <h3 className="resume__heading mb-3">
        学歴 & 経験
      </h3>
      <div className="resume">

        <div className="resume__edu" data-aos="fade-right">
          {edu.map((item, i) => (
            <div className="resume__edu__item mb-3" key={i}>
              <div className="icon">
                <i className='bx bxs-briefcase' ></i>
              </div>
              <span className="time">{item.time}</span>
              <h3>{item.place} <span className="place">{item.edu}</span> </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="resume__exp" data-aos="fade-left">
          {exp.map((item, i) => (
            <div className="resume__exp__item mb-3" key={i}>
              <div className="icon">
                <i className='bx bxs-briefcase' ></i>
              </div>
              <span className="time">{item.time}</span>
              <h3>{item.place} <span className="place">{item.exp}</span> </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Resume