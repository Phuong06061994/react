import React, { useState, Component, useEffect } from 'react';
import axios from 'axios';


function News_Gadgets() {
    const [News, setNews] = useState([]);
    useEffect(() =>{
        axios({
            method: 'get',
            url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-08&sortBy=publishedAt&apiKey=f54f3d2da77b481e8392c17d1ce60b4a',
            // url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
            data: null
        }).then(response => {
                console.log(response);
                const{data} = response;
                let data1 = data.articles;
                setNews(data1);
        }).catch(err => {
                console.log(err);
        });
    },[]);

    return (
        News.map((item, index) =>(
           
                <div className="col-md-6">
                  <div className="blog-box">
                    <div className="post-media">
                      <a href="tech-single.html" >
                        <img src={item.urlToImage} alt="" className="img-fluid img-gadgets" />
                        <div className="hovereffect">
                          <span />
                        </div>{/* end hover */}
                      </a>
                    </div>{/* end media */}
                    <div className="blog-meta big-meta">
                      <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                      <h4><a href="tech-single.html" >{item.title}</a></h4>
                      <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                      <small><a href="tech-single.html" >14 July, 2017</a></small>
                      <small><a href="tech-author.html" >by Jack</a></small>
                      <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                    </div>{/* end meta */}
                  </div>{/* end blog-box */}
                </div>/* end col */
        ))
        
        
    );
};

export default News_Gadgets;
