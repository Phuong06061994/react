import React from 'react';
//import './Section.css';
function Section() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="widget">
                <div className="banner-spot clearfix">
                  <div className="banner-img">
                    <img src="upload/banner_07.jpg" alt="" className="img-fluid" />
                  </div>{/* end banner-img */}
                </div>{/* end banner */}
              </div>{/* end widget */}
              <div className="widget">
                <h2 className="widget-title">Trend Videos</h2>
                <div className="trend-videos">
                  <div className="blog-box">
                    <div className="post-media">
                      <a href="tech-single.html">
                        <img src="upload/tech_video_01.jpg" alt="" className="img-fluid" />
                        <div className="hovereffect">
                          <span className="videohover" />
                        </div>{/* end hover */}
                      </a>
                    </div>{/* end media */}
                    <div className="blog-meta">
                      <h4><a href="tech-single.html" >We prepared the best 10 laptop presentations for you</a></h4>
                    </div>{/* end meta */}
                  </div>{/* end blog-box */}
                  <hr className="invis" />
                  <div className="blog-box">
                    <div className="post-media">
                      <a href="tech-single.html" >
                        <img src="upload/tech_video_02.jpg" alt="" className="img-fluid" />
                        <div className="hovereffect">
                          <span className="videohover" />
                        </div>{/* end hover */}
                      </a>
                    </div>{/* end media */}
                    <div className="blog-meta">
                      <h4><a href="tech-single.html" >We are guests of ABC Design Studio - Vlog</a></h4>
                    </div>{/* end meta */}
                  </div>{/* end blog-box */}
                  <hr className="invis" />
                  <div className="blog-box">
                    <div className="post-media">
                      <a href="tech-single.html" >
                        <img src="upload/tech_video_03.jpg" alt="" className="img-fluid" />
                        <div className="hovereffect">
                          <span className="videohover" />
                        </div>{/* end hover */}
                      </a>
                    </div>{/* end media */}
                    <div className="blog-meta">
                      <h4><a href="tech-single.html" >Both blood pressure monitor and intelligent clock</a></h4>
                    </div>{/* end meta */}
                  </div>{/* end blog-box */}
                </div>{/* end videos */}
              </div>{/* end widget */}
              <div className="widget">
                <h2 className="widget-title">Popular Posts</h2>
                <div className="blog-list-widget">
                  <div className="list-group">
                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 justify-content-between">
                        <img src="upload/tech_blog_08.jpg" alt="" className="img-fluid float-left" />
                        <h5 className="mb-1">5 Beautiful buildings you need..</h5>
                        <small>12 Jan, 2016</small>
                      </div>
                    </a>
                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 justify-content-between">
                        <img src="upload/tech_blog_01.jpg" alt="" className="img-fluid float-left" />
                        <h5 className="mb-1">Let's make an introduction for..</h5>
                        <small>11 Jan, 2016</small>
                      </div>
                    </a>
                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 last-item justify-content-between">
                        <img src="upload/tech_blog_03.jpg" alt="" className="img-fluid float-left" />
                        <h5 className="mb-1">Did you see the most beautiful..</h5>
                        <small>07 Jan, 2016</small>
                      </div>
                    </a>
                  </div>
                </div>{/* end blog-list */}
              </div>{/* end widget */}
              <div className="widget">
                <h2 className="widget-title">Recent Reviews</h2>
                <div className="blog-list-widget">
                  <div className="list-group">
                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 justify-content-between">
                        <img src="upload/tech_blog_02.jpg" alt="" className="img-fluid float-left" />
                        <h5 className="mb-1">Banana-chip chocolate cake recipe..</h5>
                        <span className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                      </div>
                    </a>
                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 justify-content-between">
                        <img src="upload/tech_blog_03.jpg" alt="" className="img-fluid float-left" />
                        <h5 className="mb-1">10 practical ways to choose organic..</h5>
                        <span className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                      </div>
                    </a>
                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 last-item justify-content-between">
                        <img src="upload/tech_blog_07.jpg" alt="" className="img-fluid float-left" />
                        <h5 className="mb-1">We are making homemade ravioli..</h5>
                        <span className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>{/* end blog-list */}
              </div>{/* end widget */}
              <div className="widget">
                <h2 className="widget-title">Follow Us</h2>
                <div className="row text-center">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button facebook-button">
                      <i className="fa fa-facebook" />
                      <p>27k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button twitter-button">
                      <i className="fa fa-twitter" />
                      <p>98k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button google-button">
                      <i className="fa fa-google-plus" />
                      <p>17k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button youtube-button">
                      <i className="fa fa-youtube" />
                      <p>22k</p>
                    </a>
                  </div>
                </div>
              </div>{/* end widget */}
              <div className="widget">
                <div className="banner-spot clearfix">
                  <div className="banner-img">
                    <img src="upload/banner_03.jpg" alt="" className="img-fluid" />
                  </div>{/* end banner-img */}
                </div>{/* end banner */}
              </div>{/* end widget */}
            </div>{/* end sidebar */}
          </div>{/* end col */}
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className="page-wrapper">
              <div className="blog-grid-system">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_01.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >We visited the ancient theater in Macedonia</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_02.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >To visit the fairy chimneys and antique cities in Turkey</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_03.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >Travel to the oldest city in the world in Mardin</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_04.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >We went to a city made of stone houses</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_05.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >New mosque in Germany and we have video for you</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_06.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >A unique beauty from the night view of Istanbul</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_07.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >The most beautiful bridge designs ever</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_08.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >A new door to the mysterious history</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_09.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >The story of white ages in Pamukkale</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_10.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >Milestone stone statue of 200 years ago</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_11.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >A short trip to the most beautiful martyrs of India</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <a href="tech-single.html" >
                          <img src="upload/tech_menu_12.jpg" alt="" className="img-fluid" />
                          <div className="hovereffect">
                            <span />
                          </div>{/* end hover */}
                        </a>
                      </div>{/* end media */}
                      <div className="blog-meta big-meta">
                        <span className="color-orange"><a href="tech-category-01.html" >Gadgets</a></span>
                        <h4><a href="tech-single.html" >The country symbolizing the birth of Buddhism</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                        <small><a href="tech-single.html" >14 July, 2017</a></small>
                        <small><a href="tech-author.html" >by Jack</a></small>
                        <small><a href="tech-single.html" ><i className="fa fa-eye" /> 2887</a></small>
                      </div>{/* end meta */}
                    </div>{/* end blog-box */}
                  </div>{/* end col */}
                </div>{/* end row */}
              </div>{/* end blog-grid-system */}
            </div>{/* end page-wrapper */}
            <hr className="invis3" />
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-start">
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>{/* end col */}
            </div>{/* end row */}
          </div>{/* end col */}
        </div>{/* end row */}
      </div>{/* end container */}
    </section>

  );
}

export default Section;
