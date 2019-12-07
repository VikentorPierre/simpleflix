import React from 'react';
import '../css/home.css';
import me from '../img/me.jpg';
import '../css/about.css';
const About = () => {
  return (
    <main className='main-content-container'>
      <section className='about-sec'>
        <div className='about-img-wrap'>
          <img className='about-img' src={me} alt=' pick of me ' />
        </div>
        <article className='about-info'>
          <h1 className='about-text'>About Ngor</h1>
          <p className='about-text'>
            My name is Ngor Adub, and I was born to create. Raised in the North
            Florida area I've been editing and making videos for almost 4 years
            now. From electronics to energy drinks, our team has worked with
            major brands such as Zungle Viper, and Bang Energy to name a few.
            Alongside countless up and coming music artists and local gigs, our
            creativity and talent has allowed us a wide range of clientele. As
            founder and CEO of SimpleFlix Productions we strive to be
            innovative, spontaneous, and out of the box with our approach. When
            I first picked up a camera toward this dream I never thought it
            would get to this point. Fast forward and here I am doing what I
            know best, serving others, creatively. I didn't choose this passion,
            this passion chose me.
          </p>
        </article>
      </section>
    </main>
  );
};

export default About;
