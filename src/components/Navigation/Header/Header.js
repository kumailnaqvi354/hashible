import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/images/logo.svg';
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
  }, [distanceY])

  const resizeHeaderOnScroll = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setShrink(window.pageYOffset > 300)
      );
    }
  }
  

  return (
    <header className={`header ${
      shrink ? "shrink" : ""
    }`}>

    <div className="header-row">
     <div className="desktop-logo">
      <img src={Logo} alt="Logo" />
     </div>
     <div className="hide-on-mobile">
      <ul className="desktop-menu">
       <li><a href="#home" className="menu-active">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#roadmap">Roadmap</a></li>
       <li><a href="#gallery">Gallery</a></li>
       <li><a href="#team">Team</a></li>
       <li><a href="#faq">FAQ</a></li>
       <li><a  onClick={web3init} className="wallet-connect">Connect</a></li>
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