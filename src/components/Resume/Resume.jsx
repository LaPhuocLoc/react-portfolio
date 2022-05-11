import React from 'react'
import './resume.scss'

const edu = [
  {
    time: '2018年7月',
    edu: '高等学校',
    place: 'Ly Thuong Kiet High School',
    description: '高校卒業すぐに日本へ留学使用と思ってたので、日本語の勉強を始めました。 '
  },
  {
    time: '2021年4月ー2023月3月卒業見込',
    edu: 'IT・Web学科',
    place: '中央情報専門学校',
    description: '2019年4月から2021年3月まで神戸住吉国際日本語学校で日本語を勉強しました。卒業後、埼玉県に引っ越し、中央情報専門学校に入学しました。 '
  },
]
const exp = [
  {
    time: '2022年2月26日',
    exp: 'WEBサイト開発',
    place: 'プレゼンテーショングランプリ大会',
    description: '4人のチームで「My Foodie」のレシピのページを開発し、学校のプレゼンテーショングランプリ大会で1年生の制作部門(技術)の２位を取りました。'
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
              <h3>{item.edu} <span className="place">{item.place}</span> </h3>
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
              <h3>{item.exp} <span className="place">{item.place}</span> </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Resume