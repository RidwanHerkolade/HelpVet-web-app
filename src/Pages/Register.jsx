import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formErrors, setFormErrors] = useState([]);
  const [register, setRegister] = useState({
     fullName: "",
     petName: "",
     phoneNum: "",
     dateNum: "",
     docName: "",
     deptName: "",
     textArea: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setRegister((prevRegister) => {
      return {
        ...prevRegister,
          [name]: value,
      };
    });
  };
  
  function handleValidate(formValue) {
    const errors = {};
    if (!formValue.fullName) {
      errors.fullName = "Fullname is required";
    }
    if (!formValue.petName) {
      errors.petName = "Petname is required";
    }
    if (!formValue.phoneNum) {
      errors.phoneNum = "Phone number is required";
    }
    if (!formValue.dateNum) {
      errors.dateNum = "Date is required";
    }
    if (!formValue.docName) {
      errors.docName = "Doctor name is required";
    }
    if (!formValue.deptName) {
      errors.deptName = "Department name is required";
    }
    if (!formValue.textArea) {
      errors.textArea = "Fill in your text area";
    }
    setFormErrors(errors);
    return errors;
  }


   const history = useNavigate();

   function handleSubmit(event) {
       event.preventDefault();
       const validation = handleValidate(register);
       if(Object.keys(validation).length !== 0 ) {
           return;
        }
          history("/confirm",  { state: {register}}); 
  };

  function handleClose() {
    history("/");
  }
  

  return (
    <div className="reg__page"> 
      <div className="close" onClick={handleClose}>
        <CloseIcon />
      </div>

      <div className="reg">
        <h5 className="h5">Book an appointment</h5>
        <p className="pap">
          Take care of your pet,never leave them sick and weak .we are here to
          help
        </p>
      </div>

      <form className="form__register" onSubmit={handleSubmit}>
        <div className="full__name">
          <div className="input">
            <label htmlFor="full name">Full name</label>
            <input
              type="text"
              value={register.fullName}
              placeholder="Full name"
              name="fullName"
              onChange={handleChange}
            />

            <p className="errors">{formErrors.fullName}</p>
          </div>
          <div className="input">
            <label htmlFor="pet name">Pet name</label>

            <input
              type="text"
              value={register.petName}
              placeholder="Pet name"
              name="petName"
              onChange={handleChange}
            />
            <p className="errors">{formErrors.petName}</p>
          </div>
        </div>
        <div className="number">
          <div className="input">
            <label htmlFor="phone">Phone </label>
            <input
              type="number"
              value={register.phoneNum}
              placeholder="Phone num"
              name="phoneNum"
              onChange={handleChange}
            />
            <p className="errors">{formErrors.phoneNum}</p>
          </div>
          <div className="input">
            <label htmlFor="date">Booking date</label>

            <input
              type="date"
              className="date"
              value={register.dateNum}
              placeholder="date"
              name="dateNum"
              onChange={handleChange}
            />
            <p className="errors">{formErrors.dateNum}</p>
          </div>
        </div>
        <div className="occupation">
          <div className="input">
            <label htmlFor="Doctor">Doctor</label>
            <input
              type="text"
              value={register.docName}
              placeholder="full name"
              name="docName"
              onChange={handleChange}
            />
            <p className="errors">{formErrors.docName}</p>
          </div>
          <div className="input">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              value={register.deptName}
              placeholder="Department"
              name="deptName"
              onChange={handleChange}
            />
            <p className="errors">{formErrors.deptName}</p>
          </div>
        </div>
        <textarea
          type="text"
          value={register.textArea}
          placeholder="Type your text here....."
          name="textArea"
          onChange={handleChange}
        ></textarea>
        <p className="errors">{formErrors.textArea}</p>
        <div className="sub">
          <button type="submit" className="submit">send message</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
