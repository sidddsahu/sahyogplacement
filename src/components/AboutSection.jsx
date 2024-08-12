// import React from 'react';
// import './AboutSection.css'; // Import any necessary CSS file

const AboutSection = () => {
  return (
    <section className="about-section">
      <div
        className="pattern-layer"
        style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-5.png)' }}
      ></div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_2">
                <div className="content-box centred">
                  <figure className="image-box">
                    <img src="/src/assets/images/resource/about-1.jpg" alt="About Us" />
                  </figure>
                  <div className="inner-box">
                    <figure className="icon-box">
                      <img src="/src/assets/images/icons/icon-3.png" alt="Icon" />
                    </figure>
                    <h3>
                      Educational Resources <br /> for Job Seekers
                    </h3>
                    <a href="index.html">
                      Guides & E-books<i className="flaticon-direct-download"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_3">
                <div className="content-box">
                  <div className="sec-title">
                    <span className="top-title">About Our Agency</span>
                    <h2>
                      Staffing Partners: Reliable & Cost Efficient Recruitment Agency
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      Long established fact that reader will be distracted the readable of pages
                      when looking at its layout. The point using lorem ipsum has a more-or-less
                      normal distribution of letters.
                    </p>
                  </div>
                  <div className="link">
                    <a href="index.html">
                      <i className="flaticon-right-arrow"></i>More About Us
                    </a>
                  </div>
                  <div className="author-box">
                    <div className="author-text">
                      <h3>Pathway for both employer and employee.</h3>
                    </div>
                    <div className="author-info">
                      <figure className="author-thumb">
                        <img src="/src/assets/images/resource/author-1.png" alt="Author" />
                      </figure>
                      <h4>Daniel Primera</h4>
                      <span className="designation">Founder</span>
                      <figure className="signature">
                        <img src="/src/assets/images/icons/signature-1.png" alt="Signature" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
