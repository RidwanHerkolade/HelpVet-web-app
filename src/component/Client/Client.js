import React from "react";
import './Client.css'
import ClientData from "./ClientData";
import Slider from "react-slick";


function Client(){
     // SLIDER FUCTIONAL CODE FROM SLIDER SLICK
     const autoplay = {
          dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
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
          <div className="client__grid">
          <Slider {...autoplay}>
               {ClientData.map(data => {
                    return [
                         <div className="client__div">
                               <div className="client__image">
                                    <img src={data.clientImg}/>
                    
                              </div>
                               <div className="client__content">
                                    <div className="head__img">
                                         <img src={data.headImg}/>
    
                                    </div>
                                   <p className="client__para">
                                          {data.content}
                                         <br></br>
                                         <br></br>
                                         <span>{data.contentEx}</span>
       
                                   </p>
                                    <div className="head__img">
                                         <img src={data.bottomImg}/>
    
                                   </div>
                    
                              </div>
                         </div>
                    ]
                         
                  
               })}
              
          
          </Slider>
          </div>
     )
}
export default Client;