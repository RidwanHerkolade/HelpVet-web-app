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
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import ClientHead from './component/Client/ClientHeader';
import Client from './component/Client/Client';
import ArticleHeader from './component/Article/ArticleHeader';
import Article from './component/Article/Article';
import ArticleData from './component/Article/ArticleData';
import FormHeader from './component/Form/FormHeader';
import Form from './component/Form/Form';
import Footer from './component/Footer/Footer';


function App(){
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
                    <Staff/> 
                    <ClientHead/>
                    <Client/>
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
