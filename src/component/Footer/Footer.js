import React from "react";
import './Footer.css'
function Footer(){
     return(
          <footer>
              <div className="footer" id="contact">
                     <div className="footer__icons">

                         <div className="top__header">
                                <h1>help<span>vet</span></h1>
                         
                         </div>
                     
                         <a href="#">
                               <img src="../images/Vector (42).png"/>
                            
                         </a>
                         <a href="#">
                               <img src="../images/Vector (45).png"/>
                             
                         </a>
                         <a href="#">
                               <img src="../images/Vector (44).png"/>
                            
                         </a>
                         <a href="#">
                               <img src="../images/Vector (43).png"/>
                            
                         </a>
                     
                     </div>
                     <ul className="footer__links">
                         <div className="top__header">services</div>
                          <li><a href="#">home</a></li>
                          <li><a href="#">about us</a></li>
                          <li><a href="#">services</a></li>
                     
                     
                     </ul>
                     <ul className="footer__links">
                         <div className="top__header">information</div>
                          <li><a href="#">appointment</a></li>
                          <li><a href="#">sign up</a></li>
                          <li><a href="#">join community</a></li>
                     
                     
                     </ul>
                     <ul className="footer__links">
                          <div className="top__header">partnership</div>
                          <li><a href="#">about company</a></li>
                          <li><a href="#">social media</a></li>
                          <li><a href="#">contact</a></li>
                     
                     
                     </ul>


              
              </div>
              <div className="footer__copy">Copyrignt @2022</div>
          
          
          </footer>
     )
}
export default Footer;