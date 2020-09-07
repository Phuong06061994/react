import React from 'react';

function SectionTop_Home() {
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="first-slot">
                        <div className="masonry-box post-media">
                            <img src="upload/tech_01.jpg" alt="" className="img-fluid" />
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html">Technology</a></span>
                                        <h4><a href="tech-single.html">Say hello to real handmade office furniture! Clean &amp; beautiful design</a></h4>
                                        <small><a href="tech-single.html">24 July, 2017</a></small>
                                        <small><a href="tech-author.html">by Amanda</a></small>
                                    </div>{/* end meta */}
                                </div>{/* end shadow-desc */}
                            </div>{/* end shadow */}
                        </div>{/* end post-media */}
                    </div>{/* end first-side */}
                    <div className="second-slot">
                        <div className="masonry-box post-media">
                            <img src="upload/tech_02.jpg" alt="" className="img-fluid" />
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html">Gadgets</a></span>
                                        <h4><a href="tech-single.html">Do not make mistakes when choosing web hosting</a></h4>
                                        <small><a href="tech-single.html">03 July, 2017</a></small>
                                        <small><a href="tech-author.html">by Jessica</a></small>
                                    </div>{/* end meta */}
                                </div>{/* end shadow-desc */}
                            </div>{/* end shadow */}
                        </div>{/* end post-media */}
                    </div>{/* end second-side */}
                    <div className="last-slot">
                        <div className="masonry-box post-media">
                            <img src="upload/tech_03.jpg" alt="" className="img-fluid" />
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html">Technology</a></span>
                                        <h4><a href="tech-single.html">The most reliable Galaxy Note 8 images leaked</a></h4>
                                        <small><a href="tech-single.html">01 July, 2017</a></small>
                                        <small><a href="tech-author.html">by Jessica</a></small>
                                    </div>{/* end meta */}
                                </div>{/* end shadow-desc */}
                            </div>{/* end shadow */}
                        </div>{/* end post-media */}
                    </div>{/* end second-side */}
                </div>{/* end masonry */}
            </div>
        </section>
    );
}

export default SectionTop_Home;
