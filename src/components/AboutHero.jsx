import React from 'react';
import './aboutHero.css';

const AboutHero = () => {
  return (
    <>
      {/* About Hero Section */}
      <section className='section-1'>
        {/* Left Content */}
        <div className="div-1">
          <h3>About Ecoyaan</h3>
          <p>
            At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
          </p>
          <p>
            We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
          </p>
          <ul>
            <li><i className="fa-solid fa-wand-magic-sparkles"></i> Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
            <li><i className="fa-solid fa-wand-magic-sparkles"></i> Videos, posts, and quizzes on climate change and sustainability</li>
            <li><i className="fa-solid fa-wand-magic-sparkles"></i> Events and pledges that invite you to adopt a more sustainable lifestyle</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="div-2">
          <img src="https://images.unsplash.com/photo-1591617870684-6e861e6a48ad?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </section>
    </>
  );
}

export default AboutHero;
