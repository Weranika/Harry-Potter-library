import React from 'react';
import aboutImg1 from '../../assets/img/aboutUs-1.png';
import aboutImg2 from '../../assets/img/aboutUs-2.png';
import aboutImg3 from '../../assets/img/aboutUs-3.png';
import './aboutUs.scss';

function AboutUs() {
  return (
    <section className="about-us">
      <h1 className="page__title">About us</h1>
      <div className="about-us__conteiner">
        <div className="about-us__img-container">
          <img className="about-us__img img-1" src={aboutImg1} alt="aboutImg1" />
          <img className="about-us__img img-2" src={aboutImg2} alt="aboutImg2" />
          <img className="about-us__img img-3" src={aboutImg3} alt="aboutImg3" />
        </div>
        <article className="about-us__content">
          <div className="about-gryffindor">
            <p>You might belong in Gryffindor,</p>
            <p>Where dwell the brave at heart,</p>
            <p>Their daring, nerve and chivalry</p>
            <p>Set Gryffindors apart;</p>
          </div>
          <div className="about-hufflepuff">
            <p>You might belong in Hufflepuff,</p>
            <p>Where they are just and loyal,</p>
            <p>Those patient Hufflepuffs are true</p>
            <p>And unafraid of toil;</p>
          </div>
          <div className="about-ravenclaw">
            <p>Or yet in wise old Ravenclaw,</p>
            <p>If you&apos;ve a ready mind,</p>
            <p>Where those of wit and learning,</p>
            <p>Will always find their kind;</p>
          </div>
          <div className="about-slytherin">
            <p>Or perhaps in Slytherin</p>
            <p>You&apos;ll make your real friends,</p>
            <p>Those cunning folk use any means</p>
            <p>To achieve their ends.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutUs;
