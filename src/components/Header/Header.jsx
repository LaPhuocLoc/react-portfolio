import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'

const nav = [
  {
    name: 'Home',
    icon: 'bx bxs-home',
    path: '/'
  },
  {
    name: 'Portfolio',
    icon: 'bx bxs-briefcase',
    path: '/portfolio'
  },
  {
    name: 'About',
    icon: 'bx bxs-user',
    path: '/about'
  },
  {
    name: 'Contact',
    icon: 'bx bxs-envelope-open',
    path: '/contact'
  },
  // {
  //   name: 'Blog',
  //   icon: 'bx bxl-blogger',
  //   path: '/blog'
  // },
]

const Header = () => {
  const { pathname } = useLocation()

  const active = nav.findIndex((e) => e.path === pathname)
  console.log(active);

  return (
    <ul className="nav-list">
      {nav.map((item, i) => (
        <li
          key={i}
          className="nav-item"
        >
          <Link to={item.path} className={i === active ? 'active' : null}>
            <h2>{item.name}</h2>
            <i className={item.icon}></i>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Header