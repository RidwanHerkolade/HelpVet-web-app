import React from "react";
import './Article.css'

function Article(props){
     return(
          <div className="article__div">
       
                <div className="article__img">
                     <img src={props.arImg}/>
                
                
                </div>
                <div className="article__content">
                     <h4 className="article__header">{props.arHeader}</h4>
                     <div className="article__desc">{props.arDesc}</div>
                
                </div>
             
          
          
          </div>
     )
}
export default Article;