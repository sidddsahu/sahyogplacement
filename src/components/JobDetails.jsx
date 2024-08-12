import React from "react";

const JobDetails = () => {
  return (
    <>
      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: "url(/src/assets/images/background/page-title-2.jpg)" }}>
        <div className="pattern-layer" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-35.png)" }}></div>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box centred">
              <h1>Job Details</h1>
              <p>Our Team Moves Faster, Keeping you Current on What's Hot</p>
            </div>
            <ul className="bread-crumb clearfix">
              <li><a href="index.html">Home</a></li>
              <li>Job Seekers</li>
              <li>Job Details</li>
            </ul>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Job Details */}
      <section className="job-details">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="job-details-content">
                <div className="upper-box">
                  <div className="inner-box">
                    <figure className="company-logo">
                      <img src="/src/assets/images/resource/logo-7.png" alt="Company Logo" />
                    </figure>
                    <div className="inner">
                      <span>Direct Hire</span>
                      <h3>Human Resources Manager</h3>
                      <p><i className="flaticon-place"></i>Sunnyvale, California</p>
                    </div>
                    <ul className="info clearfix">
                      <li>
                        <span>Save this job</span>
                        <a href="job-details.html"><i className="flaticon-bookmark"></i></a>
                      </li>
                      <li>
                        <span>Upload File</span>
                        <a href="job-details.html"><i className="flaticon-cloud-computing"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text">
                  <h2>Job Description</h2>
                  <p>To take a trivial example, which of us ever undertake laborious physical exercise except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
                  <p>Exercise except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
                  <h3>Responsibilities</h3>
                  <ul className="list clearfix">
                    <li>Our power of choice is untrammelled and when nothing prevents.</li>
                    <li>Frequently occur that pleasures have to be repudiated and annoyances accepted.</li>
                    <li>The wise man therefore always holds in these matters.</li>
                    <li>Rejects pleasures to secure other greater pleasures, or else he endures.</li>
                  </ul>
                  <h3>Requirements</h3>
                  <ul className="list clearfix">
                    <li><span>Age</span>: &nbsp;28+</li>
                    <li><span>Pronoun</span>: &nbsp;Male / Female</li>
                    <li><span>Education</span>: &nbsp;Bachelor’s Degree in Related Field</li>
                    <li><span>Experience</span>: &nbsp;1-3 Yrs of Human Resources Leadership</li>
                    <li><span>Skills</span>: &nbsp;Something Related this Job</li>
                  </ul>
                </div>
                <div className="social-box">
                  <ul className="social-links clearfix">
                    <li><a href="job-details.html"><i className="fab fa-facebook-f"></i>Facebook</a></li>
                    <li><a href="job-details.html"><i className="fab fa-twitter"></i>Twitter</a></li>
                    <li><a href="job-details.html"><i className="fab fa-google-plus-g"></i>Google +</a></li>
                    <li><a href="job-details.html"><i className="fab fa-linkedin-in"></i>Linkedin</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="job-sidebar">
                <div className="apply-btn"><a href="job-details.html" className="theme-btn-one">Apply for This Job</a></div>
                <div className="sidebar-widget job-discription">
                  <ul className="list">
                    <li>
                      <span>Job Number</span>
                      <p>2022ER</p>
                    </li>
                    <li>
                      <span>Company</span>
                      <p>Deepsea Shipping Logistics</p>
                    </li>
                    <li>
                      <span>Website</span>
                      <p><a href="job-details.html">http://www.deepsea.com</a></p>
                    </li>
                    <li>
                      <span>Salary</span>
                      <p>$85,000 - $90,000 Per Year </p>
                    </li>
                    <li>
                      <span>Vacancy</span>
                      <p>05 Vacancies Available</p>
                    </li>
                    <li>
                      <span>Apply on or Before</span>
                      <p>28th June, 2020</p>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget support-widget">
                  <div className="widget-content centred">
                    <div className="pattern-layer">
                      <div className="pattern-1" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-44.png)" }}></div>
                      <div className="pattern-2" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-45.png)" }}></div>
                    </div>
                    <figure className="image-box">
                      <img src="/src/assets/images/resource/author-2.png" alt="Recruiter" />
                    </figure>
                    <h3>Hal Baldwin</h3>
                    <span className="designation">Recruiter</span>
                    <ul className="support-info">
                      <li>Call: <a href="tel:8004561234">(800) 456-1234</a></li>
                      <li>Mail: <a href="mailto:baldwin@example.com">baldwin@example.com</a></li>
                    </ul>
                    <ul className="social-links">
                      <li><a href="job-details.html"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="job-details.html"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="job-details.html"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 column">
              <div className="related-job">
                <h2>Related Jobs</h2>
                <div className="single-job-post">
                  <div className="job-header clearfix">
                    <ul className="info pull-left">
                      <li><a href="job-openings.html">Contract to Hire</a></li>
                      <li><i className="flaticon-clock"></i>Posted 2 Hrs ago</li>
                    </ul>
                    <div className="number pull-right"><p>Job Num: 2022ER</p></div>
                  </div>
                  <div className="job-inner clearfix">
                    <div className="job-title">
                      <figure className="company-logo">
                        <img src="/src/assets/images/resource/logo-1.png" alt="Company Logo" />
                      </figure>
                      <h3>Human Resources Manager</h3>
                      <p><i className="flaticon-place"></i>Sunnyvale, California</p>
                    </div>
                    <div className="salary-box">
                      <span>Salary</span>
                      <p>$44,000 - $55,000 Per Year</p>
                    </div>
                    <div className="experience-box">
                      <span>Experience Need</span>
                      <p>1-3 Yrs</p>
                    </div>
                    <div className="apply-btn">
                      <a href="job-openings.html">Apply</a>
                    </div>
                  </div>
                </div>
                <div className="single-job-post">
                  <div className="job-header clearfix">
                    <ul className="info pull-left">
                      <li><a href="job-openings.html">Contract</a></li>
                      <li><i className="flaticon-clock"></i>Posted 5 Hrs ago</li>
                    </ul>
                    <div className="number pull-right"><p>Job Num: 2021ER</p></div>
                  </div>
                  <div className="job-inner clearfix">
                    <div className="job-title">
                      <figure className="company-logo">
                        <img src="/src/assets/images/resource/logo-2.png" alt="Company Logo" />
                      </figure>
                      <h3>Software Engineer</h3>
                      <p><i className="flaticon-place"></i>San Fransisco, California</p>
                    </div>
                    <div className="salary-box">
                      <span>Salary</span>
                      <p>$85,000 - $90,000 Per Year</p>
                    </div>
                    <div className="experience-box">
                      <span>Experience Need</span>
                      <p>3-5 Yrs</p>
                    </div>
                    <div className="apply-btn">
                      <a href="job-openings.html">Apply</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Job Details End */}
    </>
  );
};

export default JobDetails;
