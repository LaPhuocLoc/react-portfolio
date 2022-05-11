import React from 'react'
import './skills.scss'
import { html, css, sass, javascript, bootstrap, responsive, react, redux, git, axios } from '../../assets/skills/skills.js'
const skills = [
  {
    name: 'html',
    path: html
  },
  {
    name: 'css',
    path: css
  },
  {
    name: 'sass',
    path: sass
  },
  {
    name: 'javascript',
    path: javascript
  },
  {
    name: 'bootstrap',
    path: bootstrap
  },
  {
    name: 'responsive web design',
    path: responsive
  },
  {
    name: 'react',
    path: react
  },
  {
    name: 'redux',
    path: redux
  },
  {
    name: 'git',
    path: git
  },
  {
    name: 'axios',
    path: axios
  },
]

const Skills = () => {
  return (
    <>
      <h3 className="skill-heading mb-3">スキルシート</h3>
      <div className="skill">
        {skills.map((item, i) => (
          <div className="skill-item" key={i} data-aos="fade-up">
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