import React from 'react';
//import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="widget">
                <div className="footer-text text-left">
                  <a href="index.html"><img src="images/version/tech-footer-logo.png" alt="" className="img-fluid" /></a>
                  <p>Tech Blog is a technology blog, we sharing marketing, news and gadget articles.</p>
                  <div className="social">
                    <a href="" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook" /></a>              
                    <a href="" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter" /></a>
                    <a href="" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram" /></a>
                    <a href="" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus" /></a>
                    <a href="" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest" /></a>
                  </div>
                  <hr className="invis" />
                  <div className="newsletter-widget text-left">
                    <form className="form-inline">
                      <input type="text" className="form-control" placeholder="Enter your email address" />
                      <button type="submit" className="btn btn-primary">SUBMIT</button>
                    </form>
                  </div>{/* end newsletter */}
                </div>{/* end footer-text */}
              </div>{/* end widget */}
            </div>{/* end col */}
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="widget">
                <h2 className="widget-title">Popular Categories</h2>
                <div className="link-widget">
                  <ul>
                    <li><a href="">Marketing <span>(21)</span></a></li>
                    <li><a href="">SEO Service <span>(15)</span></a></li>
                    <li><a href="">Digital Agency <span>(31)</span></a></li>
                    <li><a href="">Make Money <span>(22)</span></a></li>
                    <li><a href="">Blogging <span>(66)</span></a></li>
                  </ul>
                </div>{/* end link-widget */}
              </div>{/* end widget */}
            </div>{/* end col */}
            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
              <div className="widget">
                <h2 className="widget-title">Copyrights</h2>
                <div className="link-widget">
                  <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Write for us</a></li>
                    <li><a href="">Trademark</a></li>
                    <li><a href="">License &amp; Help</a></li>
                  </ul>
                </div>{/* end link-widget */}
              </div>{/* end widget */}
            </div>{/* end col */}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <br />
              <div className="copyright">© Tech Blog. Design: <a href="http://html.design">HTML Design</a>.</div>
            </div>
          </div>
        </div>{/* end container */}
      </footer>/* end footer */
  );
}

export default Footer;
