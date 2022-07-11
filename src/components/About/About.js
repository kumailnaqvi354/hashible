import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section id="about" className="light-bg full-width-effct  about-us ">
            <div className="about-content">
                <h2>
                    About
                    <br />
                    Hashible
                </h2>

                <p className="about-us-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </p>

                <a href="#" className="hero-cta">
                    <div>BUY NOW</div>
                </a>
            </div>


            <div className="about-nft" data-aos="fade-left" data-aos-duration="200" data-aos-easing="ease-in-sine"
                data-aos-delay="100">
                <img src={require('../../assets/images/about-nft.png')} alt="about" />
            </div>
        </section>
    )
}

export default About