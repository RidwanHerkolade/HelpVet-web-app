import { Link } from "react-router-dom";
import React from "react";
import './Staff.css';
import StaffData from "./StaffData";
import Slider from "react-slick";

function Staff(){  
     
     var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
     return(        
           <div className="staff__list">
              <Slider {...settings}>
                {StaffData.map(data => {
                    return [
                     <div className="staff__div">
                         <div className="staff__img">
                             <img src={data.staffImg} alt=""/>
                
                        </div>
                     <div className="staff__divs">
                           <h6 className="h6">{data.staffName}</h6>
                           <p className="job__title">{data.staffPosition}</p>
                           <div className="profile">
                              <Link to={`/staff/${data.id}`} className="pro">{data.staffView}</Link>
                                
                           </div>
                         
     
                    </div>
                         
                    </div>

                    ]
                })}
                </Slider>
                

              
          </div>
       
     )
}
export default Staff;