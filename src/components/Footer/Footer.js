import React from 'react'
import { ReactComponent as DiscordSocial } from '../../assets/images/discordsocial.svg';
import { ReactComponent as TelegramSocial } from '../../assets/images/telegramsocial.svg';
import { ReactComponent as WhiteLogo } from '../../assets/images/logo-white.svg';

const Footer = () => {
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
  </>
}

export default Footer