import React from "react";
import "./about.scss";
import PageHeader from "./../../components/PageHeader/PageHeader";
import Separator from "../../components/Separator/Separator";
import Skills from './../../components/Skills/Skills';
import Info from "../../components/Info/Info";
import Resume from './../../components/Resume/Resume';

const About = () => {
  window.scrollTo(0, 0)

  return (
    <>
      <div className="slide"></div>
      <div className="section about" data-aos="fade-up">
        <PageHeader white="About" yellow="Me" titleBg="Resume" />
        <div className="container">
          <Info />
          <Separator />
          <Skills />
          <Separator />
          <Resume />
        </div>
      </div>
    </>
  );
};

export default About;
