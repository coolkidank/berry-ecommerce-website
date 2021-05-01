import React from "react";
import "./footer.css";

const Footer = ()=>{
    return(
        <div>
          
          <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">BERRY</h1>
        
    <h2>Contact</h2>
    
    <address>
      1/50 Nagpur Maharashtra
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
      
            
        <li className="lii">
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li className="lii">
          <a href="#">Hardware Design</a>
        </li>
        
        <li className="lii">
          <a href="#">Software Design</a>
        </li>
        
        
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li className="lii">
          <a href="#">Privacy Policy</a>
        </li>
         <li className="lii">
          <a href="#">Terms of Use</a>
        </li>
        
      
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2020. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> from India</span>
    </div>
  </div>
</footer>
        </div>
    )
}

export default Footer;