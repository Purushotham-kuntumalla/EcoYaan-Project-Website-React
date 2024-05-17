import React from 'react';
import '../components/aboutValue.css';
import Authenticity from '../components/Authenticity.svg';

const AboutValues = () => {
    // Array containing values data
    const valuesArray = [
        {
            img: 'https://plus.unsplash.com/premium_vector-1711987589291-c2ef0e4198e5?bg=FFFFFF&q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            h6: 'Trust',
            p: 'We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.'
        },
        {
            img: Authenticity, // Imported image
            h6: 'Authenticity',
            p: 'We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpz-ifcJeVfb4UYi3bOGAY57PikdmBOAOwnlripktZA&s',
            h6: 'Impact',
            p: 'We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1700877007785-e5f850249573?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            h6: 'Fun & Engaging',
            p: 'Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.'
        },
    ];

    return (
        <>
            {/* Values Section */}
            <section className='section'>
                <h3 className='section-h3'>Our Values</h3>
                <div className="div">
                    {/* Mapping through valuesArray to render each value */}
                    {valuesArray.map((card, index) => (
                        <div key={index} className="div-cards">
                            {/* Value Image */}
                            <img className='div-card-img' src={card.img} alt={card.h6} />
                            {/* Value Heading */}
                            <h6 className='div-card-h6'>{card.h6}</h6>
                            {/* Value Description */}
                            <p className='div-card-p'>{card.p}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default AboutValues;
