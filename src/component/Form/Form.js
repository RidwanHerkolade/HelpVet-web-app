import React, { useState} from "react";

 function Form(){
    const [input, setInput] = useState("");
    function handleChange(event){
         setInput(event.target.value)
    }
    function handleSubmit(event) {
         event.preventDefault()

    } 

     return(
           
               <form onClick={handleSubmit}>
                    <div className="form__input">
                        <input
                             type="text"
                             placeholder="Enter your Email"
                             value={input}
                             onChange={handleChange}
                  
                        />
                        <button>subscribe</button>
                    
                    </div>


                     <div className="form__img">
                            <img src="../images/image5.png" alt=""/>
               
                      </div>
               
               
               </form>
          
     )
 }
 export default Form;
