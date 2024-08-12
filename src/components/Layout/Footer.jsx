import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer bg-color-1">
      <div className="pattern-layer no-anim" style={{ backgroundImage: 'url(assets/images/shape/pattern-39.png)' }}></div>
      <div className="auto-container">
        <div className="footer-top">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget about-widget">
                  <div className="widget-title">
                    <h3>Office</h3>
                  </div>
                  <div className="text">
                    <p>
                      It is a long established fact that a reader will distracted by the readable ...{' '}
                      <i className="fas fa-arrow-up"></i>
                    </p>
                    <p>
                      United States <br /> 866 Wilshire, 2nd Street <br /> Los Angeles 90024.
                    </p>
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <h5>Connected:</h5>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="links-list clearfix">
                    <li>
                      <a href="index.html">About Us</a>
                    </li>
                    <li>
                      <a href="index.html">Resources</a>
                    </li>
                    <li>
                      <a href="index.html">Our Solutions</a>
                    </li>
                    <li>
                      <a href="index.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="index.html">Employers</a>
                    </li>
                    <li>
                      <a href="index.html">How It’s Work</a>
                    </li>
                    <li>
                      <a href="index.html">Job Seekers</a>
                    </li>
                    <li>
                      <a href="index.html">Industries</a>
                    </li>
                    <li>
                      <a href="index.html">Leadership</a>
                    </li>
                    <li>
                      <a href="index.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="single-info-box">
                    <div className="widget-title">
                      <h3>For Employers</h3>
                    </div>
                    <ul className="info-box clearfix">
                      <li>
                        <a href="tel:8004561234">(800) 456-1234</a>
                      </li>
                      <li>
                        <a href="mailto:businesspartner@example.com">businesspartner@example.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-info-box">
                    <div className="widget-title">
                      <h3>For Employees</h3>
                    </div>
                    <ul className="info-box clearfix">
                      <li>
                        <a href="tel:8004560123">(800) 789-0123</a>
                      </li>
                      <li>
                        <a href="mailto:careeroption@example.com">careeroption@example.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-subscribe">
          <div className="text centred">
            <h3>Subscribe Us & Get Our Recruitment Updates in Your Inbox</h3>
          </div>
          <form action="https://st.ourhtmldemo.com/new/Eazyrecruitz/contact.html" method="post" className="subscribe-form">
            <div className="form-group">
              <input type="email" name="email" placeholder="Enter your email address here ..." required />
              <button type="submit">
                <i className="flaticon-right-arrow"></i>Subscribe US
              </button>
            </div>
          </form>
        </div>
        <div className="footer-bottom clearfix">
          <div className="copyright pull-left">
            <p>
              &copy; 2020 <a href="index.html">Eazy Recruitz</a>, All Rights Reserved.
            </p>
          </div>
          <ul className="footer-nav pull-right clearfix">
            <li>
              <a href="index.html">Privacy Policy</a>
            </li>
            <li>
              <a href="index.html">Terms & Conditions</a>
            </li>
            <li>
              <a href="index.html">Site Map</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Scroll to top */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="flaticon-up-arrow-1"></i>Top
      </button>
    </footer>
  );
};

export default Footer;
