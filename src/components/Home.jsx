import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tilt } from 'react-tilt';
import logo from '../components/art-1.svg';
import business_deal from '../components/business_deal.svg';
import Footer from './Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // adjust as needed
  };
  
  // Image URLs for the slider
  const images = [
    'https://images7.alphacoders.com/573/thumb-1920-573634.jpg',
    'https://plus.unsplash.com/premium_photo-1681131451273-c7605c51e06e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  // Information for cards
  const cardinformation = [
    {
      head: 'Buy Less, Buy Better!',
      description: 'Authentic source of truth for your sustainability needs.',
      button: 'About Us'
    },
    {
      head: 'Follow us on Instagram',
      description: 'For climate news, lifestyle tips, & updates',
      button: 'Follow Us'
    },
    {
      head: 'Are you a business that truly cares about sustainability?',
      description: ' We would love to work with you',
      button: 'Get in Touch'
    }
  ]

  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/">Ecoyaan</Link>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav m-0" >
                <li className="nav-item">
                  <Link className="nav-link" to="#home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sell">Sell on Ecoyaan</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/careers">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Slider Section */}
      <section className='slider-section' id='home'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className='imag-div' key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        <div className="ecoyaan-head">
          <h3 className='ecoyaan-head-h3'>
            Ecoyaan
          </h3>
          <p className='ecoyaan-head-p1'>Sustainable lifestyle partner | Eco-friendly shopping</p>
        </div>
      </section>

      {/* Section 2 */}
      <section className='section-2'>
        <h2>
          Connect With Us On Social Network
        </h2>
        <div className="slider-hero-info">
          {cardinformation.map((card, index) => (
            <Tilt className="Tilt" options={{ max : 20, scale: 1 }} key={index}>
              <div className="card-information">
                <h5>{card.head}</h5>
                <p>{card.description}</p>
                <button className='card-btn'>{card.button }</button>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className='section-3'>
        <div className="join-our-community">
          <div className="join-community-info">
            <h3 className='join-community-headding'>
              Join our community in creating a more sustainable future for everyone
            </h3>
            <p className='join-community-p1'>
              At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
            </p>
            <p className='join-community-p2'>
              Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.
            </p>
          </div>
          <div className="community-image">
            <img src={logo} alt="community-image" />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className='section-4'>
        <div className="eco-friendly-products">
          <div className="eco-friendly-products-image">
            <img src='https://img.freepik.com/premium-photo/eco-friendly-cosmetics-decorated-with-green-leaves-organic-facial-skincare-makeup-skin-care_825385-1175.jpg' alt="eco-friendly-products-image" />
          </div>
          <div className="eco-friendly-products-info">
            <h3 className='eco-friendly-products-headding'>
              Carefully curated Eco-friendly products
            </h3>
            <p className='eco-friendly-products-p1'>
              We believe that every purchase you make can have a positive impact on the planet and the future.
            </p>
            <p className='eco-friendly-products-p2'>
              Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className='section-5'>
        <div className="businesses">
          <div className="businesses-info">
            <h3 className='businesses-headding'>
              For businesses that care deeply about sustainability
            </h3>
            <p className='businesses-p1'>
              Do you run a business that is committed to sustainability in every aspect of your work?
            </p>
            <p className='businesses-p2'>
              Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?
            </p>
            <p className='businesses-p3'>
              If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:
            </p>
            <button className='Contact-btn'>Contact Us</button>
          </div>
          <div className="businesses-image">
            <img src={business_deal} alt="businesses-image" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
