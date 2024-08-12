import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <section className="page-title" style={{ backgroundImage: 'url(/src/assets/images/background/page-title-2.jpg)' }}>
                <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-35.png)' }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centred">
                            <h1>Get In Touch</h1>
                            <p>Smarter Business Solutions. Better Customer Relations.</p>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="index.html">Home</Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* contactinfo-section */}
            <section className="contactinfo-section contact-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div id="content_block_6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <span className="top-title">Endless Opportunities</span>
                                        <h2>It’s Your Turn</h2>
                                        <p>Visit our <span>Employer FAQ</span> or <span>Employee FAQ</span> page for answers to common questions.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <figure className="icon-box"><img src="/src/assets/images/icons/icon-39.png" alt="" /></figure>
                                            <div className="inner">
                                                <h4>Location</h4>
                                                <p>United States <br />866 Wilshire, 2nd Street <br />Los Angeles 90024.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <figure className="icon-box"><img src="/src/assets/images/icons/icon-40.png" alt="" /></figure>
                                            <div className="inner">
                                                <h4>Call or Email</h4>
                                                <p>
                                                    <Link href="tel:8004561234">(800) 456-1234</Link><br />
                                                    <Link href="mailto:contact@example.com">contact@example.com</Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <figure className="icon-box"><img src="/src/assets/images/icons/icon-41.png" alt="" /></figure>
                                            <div className="inner">
                                                <h4>Office Hrs</h4>
                                                <p>Mon - Sat: 9.00am to 7.00pm<br />Sunday: Closed</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <h2>What are you looking for?</h2>
                                <form method="post" action="https://st.ourhtmldemo.com/new/Eazyrecruitz/sendemail.php" id="contact-form" className="default-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="Your Name *" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email Address *" required />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" required placeholder="Phone *" />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Hiring Employees">Hiring Employees</option>
                                                    <option value="1">Category 01</option>
                                                    <option value="2">Category 02</option>
                                                    <option value="3">Category 03</option>
                                                    <option value="4">Category 04</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="subject" required placeholder="Subject" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Message ..."></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button className="theme-btn-one" type="submit" name="submit-form">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* locations-section */}
            <section className="locations-section bg-color-2">
                <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-50.png)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Philadelphia</h3>
                                        <p>United States, 205 Wilshire, 2nd Str Philadelphia 19019.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link href="mailto:eazyph@example.com">eazyph@example.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link href="tel:2674561234">(267) 456-1234</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>New Orleans</h3>
                                        <p>United States, 102 Wilshire, 3rd Str New Orleans 70032.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link href="mailto:eazyph@example.com">eazyph@example.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link href="tel:5044561234">(504) 456-1234</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Minneapolis</h3>
                                        <p>United States, 405 Wilshire, 2nd Str Minneapolis 55111.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link href="mailto:eazyph@example.com">eazyph@example.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link href="tel:6124561234">(612) 456-1234</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* clients-style-two */}
            <section className="clients-style-two" style={{ backgroundImage: 'url(/src/assets/images/background/clients-1.jpg)' }}>
                <div className="auto-container">
                    <div className="title-inner centred">
                        <h2>Need of Highly Qualified HR Personnel or Employment Opportunities</h2>
                        <div className="btn-box">
                            <Link href="index-2.html" className="btn-one">Hire</Link>
                            <Link href="index-2.html" className="btn-two">Apply</Link>
                        </div>
                    </div>
                    <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                        <figure className="clients-logo-box">
                            <Link href="index.html"><img src="/src/assets/images/clients/clients-logo-7.png" alt="" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link href="index.html"><img src="/src/assets/images/clients/clients-logo-8.png" alt="" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link href="index.html"><img src="/src/assets/images/clients/clients-logo-9.png" alt="" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link href="index.html"><img src="/src/assets/images/clients/clients-logo-10.png" alt="" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link href="index.html"><img src="/src/assets/images/clients/clients-logo-11.png" alt="" /></Link>
                        </figure>
                        <figure className="clients-logo-box">
                            <Link href="index.html"><img src="/src/assets/images/clients/clients-logo-12.png" alt="" /></Link>
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
