import React, {useState} from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";





function Header(){
     const [mobile, setMobile]= useState(false)
     function handleClicks(){
           setMobile(false)
     };
     function handleMobile(){
           setMobile(!mobile)
     }
     return (
          <header className="header">
          <nav className="nav__bar">
               <div className="nav__logo">
                     <h1>help<span>vet</span></h1>

               </div>
                <ul className={mobile ? "nav__links-mobile" : "nav__links"}  onClick={handleClicks}>
                     <li><a href="#home" className="home">Home</a></li>
                     <li><a href="#about__us">About us</a></li>
                     <li><a href="#services">Services</a></li>
                     <li><a href="#contact">Contact us</a></li>
                     <li className='active'><Link to="/register">Register</Link></li>
                     
                     
                     
                    
                    

                    

               </ul>
               
               
               
               <div className='menu__btn'  onClick={handleMobile}>
              
                    { mobile ? <CloseIcon/> : <MenuIcon/> }
               
               </div>
          </nav>
     </header>

     )
}
export default Header;