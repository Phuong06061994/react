import React from 'react';
import TitlePage from './TitlePage';
function Contact() {
  return (
    <>
    <TitlePage name= "aaa">Contact us</TitlePage>
    <section className="section wb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-wrapper">
            <div className="row">
              <div className="col-lg-5">
                <h4>Who we are</h4>
                <p>Tech Blog is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                <h4>How we help?</h4>
                <p>Etiam vulputate urna id libero auctor maximus. Nulla dignissim ligula diam, in sollicitudin ligula congue quis turpis dui urna nibhs. </p>
                <h4>Pre-Sale Question</h4>
                <p>Fusce dapibus nunc quis quam tempor vestibulum sit amet consequat enim. Pellentesque blandit hendrerit placerat. Integertis non.</p>
              </div>
              <div className="col-lg-7">
                <form className="form-wrapper">
                  <input type="text" className="form-control" placeholder="Your name" />
                  <input type="text" className="form-control" placeholder="Email address" />
                  <input type="text" className="form-control" placeholder="Phone" />
                  <input type="text" className="form-control" placeholder="Subject" />
                  <textarea className="form-control" placeholder="Your message" defaultValue={""} />
                  <button type="submit" className="btn btn-primary">Send <i className="fa fa-envelope-open-o" /></button>
                </form>
              </div>
            </div>
          </div>{/* end page-wrapper */}
        </div>{/* end col */}
      </div>{/* end row */}
    </div>{/* end container */}
  </section>
  </>
  );
}

export default Contact;
