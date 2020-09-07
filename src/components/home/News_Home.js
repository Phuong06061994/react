import React, { useState, Component, useEffect } from 'react';
import axios from 'axios';


function News_Home() {
    const [News, setNews] = useState([]);
    useEffect(() =>{
        axios({
            method: 'get',
            url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-07&sortBy=publishedAt&apiKey=f54f3d2da77b481e8392c17d1ce60b4a',
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
        <div className="page-wrapper">
            <div className="blog-top clearfix">
                <h4 className="pull-left">Recent News <a href="#">{News[0].title}<i className="fa fa-rss" /></a></h4>
                console.log(News[0].title)
            </div>{/* end blog-top */}
            <div className="blog-list clearfix">
                <div className="blog-box row">
                    <div className="col-md-4">
                        <div className="post-media">
                            <a href="tech-single.html" title>
                                <img src="upload/tech_blog_01.jpg" alt="" className="img-fluid" />
                                <div className="hovereffect" />
                            </a>
                        </div>{/* end media */}
                    </div>{/* end col */}
                    <div className="blog-meta big-meta col-md-8">
                        <h4><a href="tech-single.html" title></a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                        <small className="firstsmall"><a className="bg-orange" href="tech-category-01.html" title>Gadgets</a></small>
                        <small><a href="tech-single.html" title>21 July, 2017</a></small>
                        <small><a href="tech-author.html" title>by Matilda</a></small>
                        <small><a href="tech-single.html" title><i className="fa fa-eye" /> 1114</a></small>
                    </div>{/* end meta */}
                </div>{/* end blog-box */}
                <hr className="invis" />
            </div>{/* end blog-list */}
        </div>
    );
};

export default News_Home;
