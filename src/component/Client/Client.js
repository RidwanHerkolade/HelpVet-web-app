import React from "react";
import './Client.css'

function Client(props){
     return(
          <div className="client__grid">
                <div className="client__image">
                     <img src={props.clientImg}/>
                
                </div>
                <div className="client__content">
                    <div className="head__img">
                          <img src={props.headImg}/>

                    </div>
                    <p className="client__para">
                       {props.content}
                       <br></br>
                       <br></br>
                       <span>{props.contentEx}</span>

                    </p>
                    <div className="head__img">
                          <img src={props.bottomImg}/>

                     </div>
                
                </div>
          
          
          </div>
     )
}
export default Client;