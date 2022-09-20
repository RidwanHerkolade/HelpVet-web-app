import React  from "react";
import CloseIcon from '@mui/icons-material/Close';
import './Register.css';
import { useNavigate } from "react-router-dom";  
import { useLocation } from "react-router-dom";  

export default function Confirm(){
      const {state} = useLocation();
   
      const history = useNavigate();
      function handleClose(){
             history('/register');
      };
      
      function handleConfirm(){
          
            history('/registerhead');
          
      };
     return(
          <div className="confirm">
                <div className="close" onClick={handleClose}>
                          <CloseIcon/>
    
                </div>
               <div className="confirm__item">
                     <div className="booking">Confirm booking:</div>
                     <ul className="booking__list">
                          <li>{state.register.fullName}</li>
                          <li>{state.register.deptName}</li>
                          <li>for {state.register.petName}</li>
                          <li>on {state.register.dateNum}</li>
                          <li>{state.register.textArea}</li>

                          <li className="confirmation" onClick={handleConfirm}>Confirm booking</li>
                          
                
                
                      </ul>
               
               </div>
                
          
          </div>

     )
}

