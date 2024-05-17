import React from 'react';
import '../components/ourstory.css'; // Importing ourstory.css file
const OurStory = () => {
    const valuesArray = [
        {
            img: 'https://ecoyaan.com/images/about-us-founding-team-01.png',
            p1: 'We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.',
            p2: 'Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.',
            
            connectText: 'Connect with Abhishek founder on LinkedIn here',
            connect: 'https://www.linkedin.com/in/abhishek-rao-k'
        },
        {
            img:'https://ecoyaan.com/images/about-us-founding-team-02.png',
            p1: 'We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.',
            p2: "As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.",
            connectText: 'Connect with Sarwan founder on LinkedIn here',
            connect:'https://www.linkedin.com/in/sarwanjeetsingh/'
        }
    ]
  return (
    <>
       <section className='story-section'>
              <h3 className='section-h3'>
              Our Story
              </h3>
              <div className="story-div">
                  {
                      valuesArray.map((card, index) => (
                          <>
                              <img key={index} className='div-card-image' src={card.img} alt='no image' />
                              <div key={index} className="div-card">
                                  <li className='div-card-p1'>
                                      {card.p1}
                                  </li>
                                  <li className='div-card-p2'>{card.p2}</li>
                                  <a href={card.connect}>{card.connectText}</a>
                              </div>
                          </>
                      ))
                  }
              </div>
      </section>
    </>
  )
}

export default OurStory;
