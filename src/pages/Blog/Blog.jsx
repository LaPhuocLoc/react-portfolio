import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './blog.scss'
const Blog = () => {
  window.scrollTo(0, 0)

  return (
    <>
      <div className="slide"></div>
      <div className="section blog" data-aos="fade-up">
        <PageHeader white='my' yellow='blog' titleBg='posts' />

      </div>
    </>
  )
}

export default Blog