import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const PlaceJob = () => (
    <>
        {/* Page Title */}
        <section className="page-title pb-0" style={{ backgroundImage: 'url(/src/assets/images/background/page-title-2.jpg)' }}>
            <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-35.png)' }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <div className="title-box centred">
                        <h1>Place Your Job</h1>
                        <p>Our Team Moves Faster, Keeping you Current on What's Hot</p>
                    </div>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Employers</li>
                        <li>Place Job Order</li>
                    </ul>
                    <div className="bg-shape"></div>
                </div>
            </div>
        </section>
        {/* End Page Title */}

        {/* placejob-section */}
        <section className="placejob-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="top-title">Request Needed Talent</span>
                    <h2>Tell Us About Your Hiring Needs</h2>
                    <p>We’re committed to fulfilling your unique hiring needs. Fill out the <br />form below & we’ll be in touch shortly</p>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div className="form-inner">
                            <div className="title-inner">
                                <figure className="icon-box"><img src="/src/assets/images/icons/icon-58.png" alt="" /></figure>
                                <h2>Company Details</h2>
                                <p>Please fill out your company details here.</p>
                            </div>
                            <form action="https://st.ourhtmldemo.com/new/Eazyrecruitz/place-job.html" method="post" className="job-form">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="name" placeholder="Company Name*" required="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="website" placeholder="Website" required="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <div className="select-box">
                                            <select className="wide">
                                                <option data-display="Industry*">Industry*</option>
                                                <option value="1">ATX Group</option>
                                                <option value="2">Ajax Company</option>
                                                <option value="3">Jhon Group</option>
                                                <option value="4">Nike Japan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="phone" placeholder="Phone" required="" />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="address" placeholder="Address (eg: No,Street,City,State,Zip)" required="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div className="form-inner">
                            <div className="title-inner">
                                <figure className="icon-box"><img src="/src/assets/images/icons/icon-59.png" alt="" /></figure>
                                <h2>Contact Person</h2>
                                <p>Please fill out your contact person details here.</p>
                            </div>
                            <form action="https://st.ourhtmldemo.com/new/Eazyrecruitz/place-job.html" method="post" className="job-form">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="fname" placeholder="First Name*" required="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="lname" placeholder="Last Name*" required="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="Email*" required="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="phone" placeholder="Phone" required="" />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="address" placeholder="https://www.facebook.com/person.xxxx" required="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-column">
                        <div className="form-inner mr-0">
                            <div className="title-inner">
                                <figure className="icon-box"><img src="/src/assets/images/icons/icon-60.png" alt="" /></figure>
                                <h2>Request Talent</h2>
                                <p>Here you can leave your job details & Submit your job post.</p>
                            </div>
                            <form action="https://st.ourhtmldemo.com/new/Eazyrecruitz/place-job.html" method="post" className="job-form">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 column">
                                        <div className="form-group">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Specialisation">Specialisation</option>
                                                    <option value="1">ATX Group</option>
                                                    <option value="2">Ajax Company</option>
                                                    <option value="3">Jhon Group</option>
                                                    <option value="4">Nike Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="location" placeholder="Job Location" required="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="rate" placeholder="Pay Rate Range" required="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 column">
                                        <div className="form-group">
                                            <input type="text" name="position" placeholder="Position hiring for" required="" />
                                        </div>
                                        <div className="form-group">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Preferred Pronoun">Preferred Pronoun</option>
                                                    <option value="1">ATX Group</option>
                                                    <option value="2">Ajax Company</option>
                                                    <option value="3">Jhon Group</option>
                                                    <option value="4">Nike Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Number of Openings">Number of Openings</option>
                                                    <option value="1">ATX Group</option>
                                                    <option value="2">Ajax Company</option>
                                                    <option value="3">Jhon Group</option>
                                                    <option value="4">Nike Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 column">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Job Description"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="theme-btn-one">Post Your Order</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* placejob-section end */}

        {/* clients-section */}
        {/* <section className="clients-section alternet-2">
            <div className="outer-container">
                <OwlCarousel className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none" loop margin={10} nav>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/src/assets/images/clients/clients-logo-13.png" alt="" /></a>
                        <span className="logo-title"><a href="index.html">Visit Website</a></span>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/src/assets/images/clients/clients-logo-14.png" alt="" /></a>
                        <span className="logo-title"><a href="index.html">Visit Website</a></span>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/src/assets/images/clients/clients-logo-15.png" alt="" /></a>
                        <span className="logo-title"><a href="index.html">Visit Website</a></span>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/src/assets/images/clients/clients-logo-16.png" alt="" /></a>
                        <span className="logo-title"><a href="index.html">Visit Website</a></span>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/src/assets/images/clients/clients-logo-17.png" alt="" /></a>
                        <span className="logo-title"><a href="index.html">Visit Website</a></span>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/src/assets/images/clients/clients-logo-18.png" alt="" /></a>
                        <span className="logo-title"><a href="index.html">Visit Website</a></span>
                    </figure>
                </OwlCarousel>
            </div>
        </section> */}
        {/* clients-section end */}
    </>
);

export default PlaceJob;
