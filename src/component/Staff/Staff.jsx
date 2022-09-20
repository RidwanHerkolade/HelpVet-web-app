import React from "react";
import './Staff.css'

function Staff(props){

    
     return(
         
           <div className="staff__div">
                
               <div className="staff__img">
                    <img src={props.staffImg}/>
           
               </div>
                <div className="staff__divs">
                      <h6 className="h6">{props.staffName}</h6>
                      <p className="job__title">{props.staffPosition}</p>
                      <div className="profile">{props.staffView}</div>
                    

               </div>
              
          </div>
          

     )
}
export default Staff;