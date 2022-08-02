import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={()=>{window.location.href="https://instgram.com"}} />
        <TwitterIcon onClick={()=>{window.location.href="https://twitter.com"}} />
        <FacebookIcon onClick={()=>{window.location.href="https://facebook.com"}} />
        <LinkedInIcon onClick={()=>{window.location.href="https://www.linkedin.com/in/haoyang-hu-neu/"}} />
      </div>
      <p> &copy; haoyanghu.github.io/portfolio/</p>
    </div>
  );
}

export default Footer;
