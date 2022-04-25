import React from 'react'
import './info.scss'
import Button from './../Button/Button';

const info = {
  firstName: "La (ら)",
  lastName: "Phuoc Loc (ふぉっくろっく)",
  age: "22",
  sex: "男",
  nation: "ベトナム",
  address: "埼玉県草加市稲荷4-19-11",
  phone: "07089592557",
  email: "c210150@ccg.ac.jp",
  facebook: "facebook.com/loc.la.9693",
  git: "https://github.com/LaPhuocLoc",
  language: "ベトナム語、日本語",
}
const card = [
  {
    title: '7',
    text: 'personal',
    span: 'projects'
  },
  {
    title: '1',
    text: 'years of',
    span: 'programming'
  },
  {
    title: '3',
    text: 'happy',
    span: 'customers'
  },
  {
    title: '1',
    text: 'awards',
    span: 'won'
  },
]
const Info = () => {
  return (
    <div className="info">
      <div className="info__basic">
        <h3>personal infos</h3>
        <ul className="info-list">
          <li><span>姓: </span>{info.firstName}</li>
          <li><span>名: </span>{info.lastName}</li>
          <li><span>年齢: </span>{info.age} Years</li>
          <li><span>性別: </span>{info.sex}</li>
          <li><span>国籍: </span>{info.nation}</li>
          <li><span>住所: </span>{info.address}</li>
          <li><span>電話番号: </span>{info.phone}</li>
          <li><span>Facebook: </span>{info.facebook}</li>
          <li><span>言語: </span>{info.language}</li>
          <li><span>Email: </span>{info.email}</li>
        </ul>
        <Button>
          <span className="btn-text">download cv</span>
          <span className="btn-icon">
            <i className='bx bxs-download'></i>
          </span>
        </Button>
      </div>
      <div className="info__more">
        {card.map((item, i) => (
          <div className="info__more__card" key={i}>
            <h3>{item.title}
              <i className='bx bx-plus bx-rotate-90' ></i>
            </h3>
            <p>{item.text} <span>{item.span}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Info