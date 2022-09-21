import React from "react";
import './Section.css'
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Section(props){
     return(
        
               <div className="section__grid" id="home">
                     <div className="section__content">
                             <h2>Get <span className="span1">maximum</span> and <br/> <span className="span2">affordable care</span> for<br/> your pets</h2>
                              <p>Take care of your pet,never leave them sick and weak .we are here to help you treat your pets and help them grow.</p>
                              <div className="book"><Link to="/register" className="book__link">Book appointment<ArrowForwardIcon/></Link></div>
                           
                        
                     
                     
                     </div>
                     <div className="section__image">
                          <div className="div">
                                <img src={props.imgSec} alt="imgSec"/>
                         
                         
                          </div>
                     
                     
                     </div>
               
               
               </div>
     )
}
export default Section;