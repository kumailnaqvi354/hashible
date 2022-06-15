import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const GetStarted = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section id="home" className="hero-section">
            <div className="left-hero-section">
                <div className="thanks-support" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-sine"
                    data-aos-delay="200">Thank you for your support!</div>
                <h1 className="main-title" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-sine"
                    data-aos-delay="300">Now
                    <br />
                    Available
                </h1>
                <a href="#" className="hero-cta" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-sine"
                    data-aos-delay="400">
                    <div>GET STARTED</div>
                </a>
            </div>


            <div className="right-hero-section">
                <img src={require('../../assets/images/hero-nft.png')} className="hero-image" />
            </div>
        </section>
    )
}

export default GetStarted