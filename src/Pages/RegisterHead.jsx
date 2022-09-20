import React from "react";
import "./Register.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";  

export default function RegisterHead() {
     const history = useNavigate();
     function handleClose(){
            history('/');
     };

  return (
    <div className="img__confirm">
      <div className="close" onClick={handleClose}>
           <CloseIcon />
      </div>
      <div className="img">
           <img src="../images/Vector (37).png" />
      </div>
      <div className="img__content">Appointment sucessfully booked </div>
    </div>
  );
}
