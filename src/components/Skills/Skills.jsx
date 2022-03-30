import React from 'react'
import './skills.scss'
import { figma, flutter, git, css3, nodejs, react } from '../../assets/skills/skills.js'
const skills = [
  {
    name: 'css3',
    path: css3
  },
  {
    name: 'git',
    path: git
  },
  {
    name: 'nodejs',
    path: nodejs
  },
  {
    name: 'flutter',
    path: flutter
  },
  {
    name: 'react',
    path: react
  },
  {
    name: 'figma',
    path: figma
  },
]

const Skills = () => {
  return (
    <>
      <h3 className="skill-heading mb-3">My Skills</h3>
      <div className="skill">
        {skills.map((item, i) => (
          <div className="skill-item" key={i}>
            <div className="skill-item__img mb-1">
              <div className="skill-item__img-wrap" style={{ backgroundImage: `url(${item.path})` }}></div>
            </div>
            <div className="skill-item__name">
              <h6>{item.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills