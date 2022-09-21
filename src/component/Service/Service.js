import React from "react";
import './Service.css'

function Service(props){
     return(
           <div className="serviceCard" id="services">
                    
           <div className="service">
               <div className="img__n">
                     <div className="service__img">
                           <img src={props.serviceImage} alt="serviceImg"/>
                     </div>
               </div>
               
              
             
               <div className="service__descrip">{props.serviceDesc}</div>
               <div className="service__content">
               {props.serviceContent}
               </div>
          </div>

    
      </div>

     )
}
export default Service;