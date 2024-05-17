import React from 'react'
import '../components/meetTeam.css';

const MeetTeam = () => {
    const teamArray = [
        {
            img: 'https://ecoyaan.com/images/about-us-social-media-team-01.png',
            name: 'SHRUTHI',
            team: 'SOCIAL MEDIA',
            p: 'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business.',
            connect: 'https://www.instagram.com/soulfullymade_crafts/',
            connectHere: 'Connect Here'
        },
        {
            img: 'https://ecoyaan.com/images/about-us-social-media-team-02.png',
            name: 'URMIL',
            team: 'SOCIAL MEDIA',
            p: 'Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business.',
            connect: 'https://www.instagram.com/ferozi.conscious/',
            connectHere: 'Connect Here'
        },
        {
            img: 'https://ecoyaan.com/images/about-us-product-team-01.png',
            name: 'DIVYA',
            team: 'UX DESIGN',
            p: 'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business.',
            connect: 'https://www.instagram.com/soulfullymade_crafts/',
            connectHere: 'Connect Here'
        },
        {
            img: 'https://ecoyaan.com/images/about-us-product-team-02.png',
            name: 'PRASHANITH',
            team: 'ENGINEERING',
            p: 'Prashanith is our front-end engineer, who brings the UX designs to life.'
            
        }
        ,
        {
            img: 'https://ecoyaan.com/images/about-us-product-team-03.png',
            name: 'SAI ABHILASH',
            team: 'ENGINEERING',
            p: 'Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform.'
            
        },
        {
            img: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png',
            name: '???',
            team: 'TEAM ECOYAAN',
            p: 'This spot awaits you Check out our open positions.',
            connect: 'https://ecoyaan.com/careers',
            connectHere: 'Click Here'
            
        }
    ]
  return (
      <>
          <h1 className='team-section-head'>Meet the Team</h1>
          <section className='team-section' id=''>
          
              {
                  teamArray.map((member, index) => (
                      <div className="memberCard">
                          <div className="memberImage">
                          <img className="memberCard-profile" src={member.img} alt={member.name} />
                          </div>
                          
                          <div className="memberInfo">
                          <h3 className="memberCard-name">{member.name}</h3>
                          <p className="memberCard-team">
                              {
                                  member.team
                              }
                          </p>
                          <p className="memberCard-info">
                              {
                                  member.p
                              }
                              </p>
                              <div className="link-btn">
                              <a className="memberCard-link" href={member.connect}>
                              {
                                  member.connectHere
                              }
                          </a>
                              </div>
                          
                          </div>
                          
                      </div>
                  ))
              }
          </section>
          <footer>
          <div className="footer">
              
              <div className="footer-divs">
                  <div className="footer-div1">
                      <h3 className='footer-div1-h3'>
                      Company
                      </h3>
                      <p className='footer-div1-p'> <a href="#"> About Us </a> </p>
                      <p className='footer-div1-p'> <a href="#"> Sell on Ecoyaan </a> </p>
                      <p className='footer-div1-p'> <a href="#"> Careers </a> </p>
                  </div>

                  <div className="footer-div2">
                       <h3 className='footer-div1-h3'>
                       Links
                 </h3>
                      
                      <p className='footer-div1-p'><a href="#">Privacy Policy</a></p>
                      
                      
                      <p className='footer-div1-p'>
                          <a href="#">Terms of use</a>
                      </p>
                  </div>

                  <div className="footer-div3">
                      <h3 className='footer-div1-h3'>
                          Follow Us
                      </h3>
                      <div className="footer-icons">
                      <i className="fa-brands fa-instagram icons"></i>
                      <i class="fa-brands fa-linkedin icons"></i>
                      <i class="fa-brands fa-facebook icons"></i>
                      </div>
                      
                  </div>

                  <div className="footer-div4">
                      <h5>
                      Subscribe to receive updates on blogs, future launches and more !
                      </h5>
                      <input type="email" name="email" placeholder='Your Email Address' />
                      <p>
                      By subscribing, you agree to receive notifications
                      </p>
                      <p><a href="#">Privacy Policy</a></p>
                      <button>Subscribe</button>
                  </div>

                  <div className='footer-divs-2'>
                      <div className="footer-div2-1">
                      <h3>Registered Address:</h3>
        <p>1-N-12T-781/1, Sri Krishna Vilasa,</p>
        <p>Urvastores, Ashoknagar(MR),</p>
        <p>Mangalore, Dakshina Kannada- 575006, Karnataka, India</p>
                      </div>
        
                  </div>
                  
      <div className="footer-div2-2">
        <h3>Legal Business Name:</h3>
        <p>Kindkarma E-Retail Private Limited</p>
        <p>CIN: U47912KA2023PTC182592</p>
        <p>Telephone: <a href="tel:+919980490777">+91 9980490777</a></p>
      </div>

              </div>
              <div className="copyrights">
              © 2023 - 2024, Ecoyaan TM
              </div>
      </div>
      </footer>
    </>
  )
}

export default MeetTeam
