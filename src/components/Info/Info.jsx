import React from 'react'
import './info.scss'
import Button from './../Button/Button';

const info = {
  firstName: "La",
  lastName: "Phuoc Loc",
  age: "21",
  sex: "Male",
  nation: "Vietnam",
  address: "Saitama",
  phone: "07089592557",
  email: "laphuocloc1701@gmail.com",
  facebook: "facebook.com/loc.la.9693",
  git: "https://github.com/LaPhuocLoc",
  language: "Japanese, Vietnamese",
}
const card = [
  {
    title: '12',
    text: 'years of',
    span: 'experience'
  },
  {
    title: '97',
    text: 'completed',
    span: 'projects'
  },
  {
    title: '81',
    text: 'happy',
    span: 'customers'
  },
  {
    title: '53',
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
          <li><span>First Name: </span>{info.firstName}</li>
          <li><span>Last Name: </span>{info.lastName}</li>
          <li><span>Age: </span>{info.age} Years</li>
          <li><span>Sex: </span>{info.sex}</li>
          <li><span>Nationality: </span>{info.nation}</li>
          <li><span>Address: </span>{info.address}</li>
          <li><span>Phone: </span>{info.phone}</li>
          <li><span>Facebook: </span>{info.facebook}</li>
          <li><span>Language: </span>{info.language}</li>
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