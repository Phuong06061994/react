import React, { useState, Component, useEffect } from 'react';
import axios from 'axios';


function News_Home() {
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
            <div className="blog-list clearfix" key ={index}>
                <div className="blog-box row">
                    <div className="col-md-4">
                        <div className="post-media">
                            <a href="tech-single.html" title>
                                <img src={item.urlToImage} alt="" className="img-fluid" />
                                <div className="hovereffect" />
                            </a>
                        </div>{/* end media */}
                    </div>{/* end col */}
                    <div className="blog-meta big-meta col-md-8">
                        <h4><a href="tech-single.html" >{item.title}</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                        <small className="firstsmall"><a className="bg-orange" href={News[1]?.urlToImage} >Gadgets</a></small>
                        <small><a href="tech-single.html" >21 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Matilda</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 1114</a></small>
                    </div>{/* end meta */}
                </div>{/* end blog-box */}
                <hr className="invis" />
            </div>
        ))
        
        
    );
};

export default News_Home;
