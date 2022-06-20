import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/images/logo.svg';
import { Link } from 'react-scroll';
import './Header.css';
import { ethers } from "ethers";


const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [account, setAccount] = useState(null);
  
  const web3init = async() =>{
    console.log("here");
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    const address = await signer.getAddress();
    setAccount(address);
    console.log("signers =>", address )
    console.log("here at end")

  }

  let distanceY = 0;

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
    return () => {
      window.removeEventListener("scroll", resizeHeaderOnScroll);
    }
  }, [])

  const resizeHeaderOnScroll = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setShrink(window.pageYOffset > 300)
      );
    }
  }


  return (
    <header className={`header ${shrink ? "shrink" : ""
      }`}>

      <div className="header-row">
        <div className="desktop-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hide-on-mobile">
          <ul className="desktop-menu">
            <li><Link to="home" spy={true} smooth={true} offset={-100} duration={1000} className="menu-active">Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>About</Link></li>
            <li><Link to="roadmap" spy={true} smooth={true} offset={-100} duration={1000} >Roadmap</Link></li>
            <li><Link to="gallery" spy={true} smooth={true} offset={-100} duration={1000} >Gallery</Link></li>
            <li><Link to="team" spy={true} smooth={true} offset={-100} duration={1000} >Team</Link></li>
            <li><Link to="faq" spy={true} smooth={true} offset={-100} duration={1000} >FAQ</Link></li>
            <li><a href="#" className="wallet-connect">Connect</a></li>
          </ul>
        </div>

        <a href="#mobile_menu" id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </header>
  )
}

export default Header