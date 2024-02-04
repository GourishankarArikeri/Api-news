import React from "react";
import "./News.css";
// import {  Link ,BrowserRouter as Router} from 'react-router-dom'

function News(props) {
  const { article }=props;

  return (
   
    <div>
        {/* <a href={article.url} target='_blank'> */}
      <div className="news">
      <a href={article.url} target='_blank'>  <img  className="imgn" src={article.urlToImage} alt='/'/>    </a>
        <h1>{article.title?.substring(0,50)}</h1>
        <p className="desc" >{article.description?.substring(0,100)}...</p>
        <p className="an">Author:{article.author}</p><p>Source:{article.source.name}</p>
        <a href={article.url} target='_blank'> read more...</a>
         </div>
         {/* </a> */}
    
      </div>

  );
}

export default News;
