// import React from 'react';
// import './ProcessSection.css'; // Import any necessary CSS file

const ProcessSection = () => {
  return (
    <section className="process-section centred">
      <div className="auto-container">
        <div className="sec-title">
          <span className="top-title">How it’s Possible</span>
          <h2>Three Steps of Eazy Recruitz</h2>
          <p>
            Long established fact that a reader will be distracted by the <br />
            readable content of a page.
          </p>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div
              className="process-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="icon-box">
                  <img src="/src/assets/images/icons/icon-16.png" alt="" />
                  <span>01</span>
                  <div className="anim-icon">
                    <div
                      className="icon-1"
                      style={{
                        backgroundImage: 'url(/src/assets/images/shape/pattern-8.png)',
                      }}
                    ></div>
                    <div
                      className="icon-2 rotate-me"
                      style={{
                        backgroundImage: 'url(/src/assets/images/icons/anim-icon-2.png)',
                      }}
                    ></div>
                    <div
                      className="icon-3 rotate-me"
                      style={{
                        backgroundImage: 'url(/src/assets/images/icons/anim-icon-2.png)',
                      }}
                    ></div>
                  </div>
                </figure>
                <div className="lower-content">
                  <h3>Initiation</h3>
                  <p>Choice is untrammelled when nothing prevents our being best.</p>
                  <a href="index.html">More Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div
              className="process-block-one wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="icon-box">
                  <img src="/src/assets/images/icons/icon-17.png" alt="" />
                  <span>02</span>
                  <div className="anim-icon">
                    <div
                      className="icon-1"
                      style={{
                        backgroundImage: 'url(/src/assets/images/shape/pattern-8.png)',
                      }}
                    ></div>
                    <div
                      className="icon-2 rotate-me"
                      style={{
                        backgroundImage: 'url(/src/assets/images/icons/anim-icon-2.png)',
                      }}
                    ></div>
                    <div
                      className="icon-3 rotate-me"
                      style={{
                        backgroundImage: 'url(/src/assets/images/icons/anim-icon-2.png)',
                      }}
                    ></div>
                  </div>
                </figure>
                <div className="lower-content">
                  <h3>Scheduling</h3>
                  <p>Power of choiced is untrammelled and when nothing prevents.</p>
                  <a href="index.html">More Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div
              className="process-block-one wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="icon-box">
                  <img src="/src/assets/images/icons/icon-18.png" alt="" />
                  <span>03</span>
                  <div className="anim-icon">
                    <div
                      className="icon-1"
                      style={{
                        backgroundImage: 'url(/src/assets/images/shape/pattern-8.png)',
                      }}
                    ></div>
                    <div
                      className="icon-2 rotate-me"
                      style={{
                        backgroundImage: 'url(/src/assets/images/icons/anim-icon-2.png)',
                      }}
                    ></div>
                    <div
                      className="icon-3 rotate-me"
                      style={{
                        backgroundImage: 'url(/src/assets/images/icons/anim-icon-2.png)',
                      }}
                    ></div>
                  </div>
                </figure>
                <div className="lower-content">
                  <h3>Contracts & Pay</h3>
                  <p>Every pleasure is to be welcomed pain avoided but in certain.</p>
                  <a href="index.html">More Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
