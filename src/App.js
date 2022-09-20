import Header from './component/Header/Header';
import './App.css';
import Section from './component/Section/Section';
import SectionCount from './component/Section/SectionCount';
import About from './component/About/About';
import ServiceHeader from './component/Service/ServiceHeader';
import Service from './component/Service/Service';
import ServiceData from './component/Service/ServiceData';
import StaffHeader from './component/Staff/StaffHeader';
import Staff from './component/Staff/Staff';
import StaffData from './component/Staff/StaffData';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import ClientHead from './component/Client/ClientHeader'
import Client from './component/Client/Client'
import ClientData from './component/Client/ClientData';
import ArticleHeader from './component/Article/ArticleHeader';
import Article from './component/Article/Article';
import ArticleData from './component/Article/ArticleData';
import FormHeader from './component/Form/FormHeader';
import Form from './component/Form/Form';
import Footer from './component/Footer/Footer';


function App(){
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
          <div>
         
              <Header />
              <section>
                   <Section
                       imgSec="../images/img2.png" 
                   
                   
                   />
                   <SectionCount/>
                   <About
                           imgs1="../images/rec26.png"
                           imgs2="../images/rec27.png"
                           imgs3="../images/rec28.png"
                        
                   
                    />
                    <ServiceHeader/>
                    <div className='services__list'>
                    {ServiceData.map(data => {
                         return [
                              
                              <Service
                                     key={data.id}
                                     serviceImage={data.serviceImage}
                                     serviceDesc={data.serviceDesc}
                                     serviceContent={data.serviceContent}
                              />
                            
                         ]
                    })}
                    </div>
                    <StaffHeader/>

                    <Slider {...settings}>
                   
                    {StaffData.map(data => {
                         return[
                              <Staff
                                     key= {data.id}
                                     staffImg={data.staffImg}
                                     staffName={data.staffName}
                                     staffPosition={data.staffPosition}
                                     staffView={data.staffView}
                    
                    
                              />

                         ]
                     })}
                    
                    
                    
                    </Slider>
                    
                    
                   
                    <ClientHead/>
                    <Slider {...autoplay}>
                      
                            {ClientData.map(client => {
                                  return[
                                      <Client
                                         key={client.id}
                                         clientImg={client.clientImg}
                                         headImg={client.headImg}
                                         content={client.content}
                                         contentEx= {client.contentEx}
                                         bottomImg= {client.bottomImg}
                        
                         
                                
                                
                                />
                                

                      ]
                    })}
                    </Slider>
                    
  
              </section>
              <article>
                   <div className='article__grid'>
                       <ArticleHeader/>

                      <div className='article__list'>
                           {ArticleData.map(data => {
                             return[
                                 <Article
                                 key={data.id}
                                 arImg={data.arImg}
                                 arHeader={data.arHeader}
                                 arDesc={data.arDesc}
    
    
                           
                           
                           />

                             ]
                       })}
                      
                      
                      </div> 

              
                    </div>
              
              </article>

               <section>
                     <FormHeader/>
                     <Form/>

                     
                   
               </section>
               <Footer/>
         
          
          </div>

          
     )
}

export default App;
