import React from 'react'
import './resume.scss'

const exp = [
  {
    time: '2018 - present',
    exp: 'web developer',
    place: 'envato',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo orci, maximus quis auctor ac, interdum et ante. Nunc a vulputate ipsum. '
  },
  {
    time: '2018 - present',
    exp: 'web developer',
    place: 'envato',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo orci, maximus quis auctor ac, interdum et ante. Nunc a vulputate ipsum. '
  },
  {
    time: '2018 - present',
    exp: 'web developer',
    place: 'envato',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo orci, maximus quis auctor ac, interdum et ante. Nunc a vulputate ipsum. '
  },
]
const edu = [
  {
    time: '2015',
    edu: 'engineering degree',
    place: 'oxford university',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo orci, maximus quis auctor ac, interdum et ante. Nunc a vulputate ipsum. '
  },
  {
    time: '2015',
    edu: 'engineering degree',
    place: 'oxford university',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo orci, maximus quis auctor ac, interdum et ante. Nunc a vulputate ipsum. '
  },
  {
    time: '2015',
    edu: 'engineering degree',
    place: 'oxford university',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo orci, maximus quis auctor ac, interdum et ante. Nunc a vulputate ipsum. '
  },
]

const Resume = () => {
  return (
    <>
      <h3 className="resume__heading mb-3">
        experience & education
      </h3>
      <div className="resume">
        <div className="resume__exp">
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
        <div className="resume__edu">
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
      </div>
    </>
  )
}

export default Resume