
import React,{useState} from "react";
import {useParams, useNavigate} from "react-router-dom"
import details from "./details";

function Profile(){
     const { staffId } = useParams();
     const myData = details.find(detail=> detail.id === staffId )

     // THE USESTATE HOOK FOR PICKING EACH OF THE INPUT VALUE
     const [proDetails, setProDetails] = useState({
           fullName: "",
           email: "",
           designation: "",
           staffId: "",
           phoneNumber: "",
           dateJoin: "",
           dateBirth: "",
           docName: "",
           nationName:"",
           stateName:"",
           textArea: ""
     });

     // THE EVENT TARGET FOR THE INPUT VALUE
     function handleDetails(event) {
          const {name, value } = event.target
          setProDetails(prevProDetails => {
               return {
                    ...prevProDetails,
                    [name]:value
               }
          })
     };

     // THE SUBMIT EVENT IS TAKING PLACE HERE
     function handleSubmit(event){
          event.preventDefault()
     };

     // FUNCTION FOR REDIRECTION
     const history = useNavigate()
     function handleRedirection(){
          history('/')

     }
     
     

     return(
          <div className="detail">
                <div className="detail__div">
                    <div className="detail__profile">
                          <div className="detail__img">
                               <img src={myData.staffImg} alt="myData"/>
                          </div>
                          <div className="nameDta">
                                <h3>{myData.staffName}</h3>
                               <small>{myData.staffPosition}</small>
                          
                          </div>
                         
                                             
                    </div>
                    <form className="form__details">

                               <div className="fullName">
                                    <div className="detail__input">
                                         <label htmlFor="fullName" className="label">Full name</label>
                                         <input
                                              type="text"
                                              placeholder="Full name"
                                              name="fullName"
                                              onChange={handleDetails}
                                              value={myData.staffName}
                                         />
                
                                   </div>
                                   <div className="detail__input">
                                         <label htmlFor="email" className="label">Email</label>
               
                                        <input
                                              type="text"
                                               placeholder="Email"
                                               name="email"
                                               onChange={handleDetails}
                                               value={myData.email}
                                        />
                                    </div>
                               </div>
                          
                         
                          <div className="position">
                               <div className="detail__input">
                                    <label htmlFor="designation" className="label">Designation</label>
                                    <input
                                         type="text"
                                         placeholder="Designation"
                                         name="designation"
                                         value={myData.staffPosition}
                                         onChange={handleDetails}
                            
                                    />

                              </div>
                              <div className="detail__input">
                                     <label htmlFor="staffId" className="label">Staff Id</label>
                
                                   <input
                                         type="text"
                                         placeholder="staff id"
                                         name="staffId"
                                         onChange={handleDetails}
                                         value={myData.staff}
                           
                                    />
                          
                              </div>
                              <div className="detail__input">
                              <label htmlFor="phone" className="label" id="labels">Phone Number</label>
                              <label htmlFor="phone" className="label" id="label">Phone</label>
         
                            <input
                                  type="text"
                                  placeholder=""
                                  name="phoneNumber"
                                  onChange={handleDetails}
                                  value={myData.number}
                    
                             />
                   
                       </div>
                        </div>
                        <div className="duration">
                               <div className="detail__input">
                                    <label htmlFor="date" className="label">Date Of Joining</label>
                                    <input
                                         type="text"
                                         placeholder="Date Of Joinig"
                                         name="dateJoin"
                                         onChange={handleDetails}
                                         value={myData.djoin}
                         
                                    />

                              </div>
                               <div className="detail__input">
                                      <label htmlFor="date" className="label">Date Of Birth</label>
                                      <input
                                               type="text"
                                               placeholder="Date Of Birth"
                                               name="dateBirth"
                                               onChange={handleDetails}
                                               value={myData.dob}

                                       />

                              </div>
                       </div>
                      <div className="address">
                               <div className="detail__input">
                                    <label htmlFor="Doctor" className="label">Doctor</label>
                                    <input
                                         type="text"
                                         placeholder="full name"
                                         name="docName"
                                         value={myData.staffName}
                                         onChange={handleDetails}
                         
                                    />

                              </div>
                               <div className="detail__input">
                                      <label htmlFor="department" className="label">Department</label>
                                      <input
                                              type="text"
                                              placeholder="Department"
                                               name="deptName"
                                               value={myData.staffPosition}
                                               onChange={handleDetails}

                                       />

                              </div>
                              <div className="detail__input">
                                    <label htmlFor="nation" className="label">Nationality</label>
                                   <input
                                         type="text"
                                         placeholder="Nationality"
                                         name="nationName"
                                         onChange={handleDetails}
                                         value={myData.nation}
 
                                    />

                              </div>
                             <div className="detail__input">
                                    <label htmlFor="nation" className="label" id="labels">State Of Origin</label>
                                    <label htmlFor="nation" className="label" id="label">State</label>
                                   <input
                                         type="text"
                                         placeholder="State Of Origin"
                                         name="stateName"
                                         onChange={handleDetails}
                                         value={myData.state}
 
                                    />

                              </div>
                          </div>  
                          <label htmlFor="address" className="label">Address</label>
                          <textarea 
                                className="form__address"
                                name="textArea"
                                type="text"
                                onChange={handleDetails}
                                value={myData.add}

                          ></textarea>
                          <div className="detail__btn">
                               <div className="changes" onClick={handleRedirection}>close</div>
                               <div className="saveChange" onClick={handleSubmit}>save changes</div>
                          
                          </div>
                          
                    
                    </form>
                 
                </div>
             
          </div>
     
     )
}
export default Profile;