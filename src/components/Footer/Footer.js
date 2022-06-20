import React, { useEffect, useState } from 'react'
import { ReactComponent as DiscordSocial } from '../../assets/images/discordsocial.svg';
import { ReactComponent as TelegramSocial } from '../../assets/images/telegramsocial.svg';
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
   <div className="footer-container">
    <div className="footer-logo-col">
     <WhiteLogo />
     <a href="#" className="footer-cta">
      <div>JOIN OUR DISCORD</div>
     </a>
    </div>

    <div className="footer-center-column">
     <img src={require('../../assets/images/footer-center.png')} alt="" />
    </div>

    <div className="footer-right-col">
     <img src={require('../../assets/images/footer-right.png')} alt="" />
    </div>
   </div>



   <div className="footer-socials-copyright">

    <div>
     © 2022 Company name. All rights reserved
    </div>

    <div className="footer-social">
        <DiscordSocial />
        <TelegramSocial />
    </div>
   </div>
  </footer>
  {show && <Link to="home" spy={true} smooth={true} offset={-100} duration={1000}
  data-aos="fade" data-aos-duration="1500" className="top">↑</Link>}
  </>
}

export default Footer