import React, { useEffect, useState } from 'react'
import { ReactComponent as WhiteLogo } from '../../assets/images/logo-white.svg';
import { Link } from 'react-scroll/modules';
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    Aos.init();
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", showHideAnchor);
    return () => {
      window.removeEventListener("scroll", showHideAnchor);
    }
  }, [])

  const showHideAnchor = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setShow(window.pageYOffset > 600)
      );
    }
  }

  return <>
    <footer>
      <div class="footer-container">
        <div class="footer-column">
          <WhiteLogo />
        </div>
        <div class="footer-column">
          <h3>MENU</h3>
          <div class="footer-menu">
            <ul>
              <li><Link to="home" spy={true} smooth={true} offset={-100} duration={1000}>Home</Link></li>
              <li><Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>About</Link></li>
              <li><Link to="roadmap" spy={true} smooth={true} offset={-100} duration={1000} >Roadmap</Link></li>
              <li><Link to="gallery" spy={true} smooth={true} offset={-100} duration={1000} >Gallery</Link></li>
              <li><Link to="team" spy={true} smooth={true} offset={-100} duration={1000} >Team</Link></li>
              <li><Link to="faq" spy={true} smooth={true} offset={-100} duration={1000} >FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div class="footer-column">
          <h3>FIND US</h3>
          <div class="market-place">
            <div>
              <img src={require('../../assets/images/opensea.svg').default} alt='Opensea' />
            </div>
            <div><img src={require('../../assets/images/looksrare.svg').default} alt='Looksrare' />
            </div>
            <div><img src={require('../../assets/images/etherscan-logo-light-circle.svg').default} alt='Etherscan' />
            </div>
          </div>
        </div>
        <div class="footer-column">
          <h3>FOLLOW US</h3>
          <div class="footer-social">
            <div>
              <img src={require('../../assets/images/discordsocial.svg').default} alt='Discord' />
            </div>
            <div>
              <img src={require('../../assets/images/telegramsocial.svg').default} alt='Telegram' />
            </div>
            <div>
              <img src={require('../../assets/images/instagram.svg').default} alt='Instagram' />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-socials-copyright">
        <div>
          © 2022 Company name. All rights reserved
        </div>
      </div>
    </footer>

    {show && <Link to="home" spy={true} smooth={true} offset={-100} duration={1000}
      data-aos="fade" data-aos-duration="1500" className="top"><img src={require('../../assets/images/up-arrow.svg').default} alt='arrow' /></Link>}
  </>
}

export default Footer