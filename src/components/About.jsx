import React from 'react';
// import Nav from './Nav'; // Assuming you have a Nav component

const About = () => {
    return (
        <div>
            {/* <Nav /> */}
            <title>Eazyrecruitz - HTML 5 Template Preview</title>

            {/* Page Title */}
            <section className="page-title" style={{ backgroundImage: 'url(/src/assets/images/background/page-title.jpg)' }}>
                <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-35.png)' }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centred">
                            <h1>About Company</h1>
                            <p>Reliable & Cost Efficient Recruitment Agency Based On Los Angeles</p>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><a href="index.html">Home</a></li>
                            <li>About</li>
                            <li>About Company</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* About Style Two */}
            <section className="about-style-two about-page">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="image_block_1">
                                    <div className="image-box">
                                        <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-14.png)' }}></div>
                                        <div className="video-inner" style={{ backgroundImage: 'url(/src/assets/images/resource/video-bg-1.jpg)' }}>
                                            <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption="">
                                                <i className="flaticon-play"></i>
                                            </a>
                                            <div className="border"></div>
                                        </div>
                                        <figure className="image-1"><img src="/src/assets/images/resource/about-2.jpg" alt="" /></figure>
                                        <figure className="image-2 wow slideInLeft animated animated" data-wow-delay="00ms"><img src="/src/assets/images/resource/briefcase-1.png" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="content_block_3">
                                    <div className="content-box">
                                        <div className="sec-title">
                                            <span className="top-title">About Our Agency</span>
                                            <h2>Reliable & Cost Efficiant Recruitment Agency</h2>
                                        </div>
                                        <div className="text">
                                            <p>Long established fact that reader will be distracted the readable of pages when looking at its layout. The point using lorem ipsum has a more-or-less normal distribution of letters.</p>
                                        </div>
                                        <div className="author-box">
                                            <div className="author-text">
                                                <h3>Pathway for both employer and employee.</h3>
                                            </div>
                                            <div className="author-info">
                                                <figure className="author-thumb"><img src={"/src/assets/images/resource/author-1.png"} alt="" /></figure>
                                                <h4>Daniel Primera</h4>
                                                <span className="designation">Founder</span>
                                                <figure className="signature"><img src="/src/assets/images/icons/signature-1.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Style Two */}
            <section className="process-style-two alternet-2">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="pattern-layer" style={{ backgroundImage: 'url(/src/assets/images/shape/pattern-36.png)' }}></div>
                        <div className="sec-title light centred">
                            <span className="top-title">/src/assets/</span>
                            <h2>Our Plan & Working Style</h2>
                        </div>
                        <div className="row clearfix">
                            <Step
                                stepNumber="01"
                                title="Application Screening & Scheduling"
                                description="Indignation and dislike men who are so beguiled and demoralized."
                                icon="/src/assets/images/icons/icon-51.png"
                                link="index-3.html"
                            />
                            <Step
                                stepNumber="02"
                                title="Employee On-Boarding Checklist"
                                description="Desire that they cannot foresee the pain and trouble that are bound."
                                icon="/src/assets/images/icons/icon-52.png"
                                link="index-3.html"
                            />
                            <Step
                                stepNumber="03"
                                title="Take Care of Employee’s Benefits"
                                description="Frequently occur that pleasures have to be repudiated and annoyances."
                                icon="/src/assets/images/icons/icon-53.png"
                                link="index-3.html"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="history-section">
                <figure className="image-layer"><img src="/src/assets/images/resource/history-1.png" alt="" /></figure>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 column">
                            <div className="sec-title">
                                <span className="top-title">Our History</span>
                                <h2>Taking a Look Back of Our History</h2>
                            </div>
                        </div>
                        <HistoryItem
                            year="2008"
                            title="Started in Houston"
                            description="Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and account."
                            image="/src/assets/images/resource/history-3.jpg"
                        />
                        <HistoryItem
                            year="2010"
                            title="Fast Growing Company"
                            description="To take a trivial example, which of us ever undertake laborius physical exercise except to obtain some advantage from it."
                            image="/src/assets/images/resource/history-1.jpg"
                        />
                        <HistoryItem
                            year="2011"
                            title="Best Staffing Talent Award"
                            description="To take a trivial example, which of us ever undertake laborius physical exercise except to obtain some advantage from it."
                            image="/src/assets/images/resource/history-4.jpg"
                        />
                        <HistoryItem
                            year="2014"
                            title="1000 Companies Tie-up"
                            description="Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and account."
                            image="/src/assets/images/resource/history-2.jpg"
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section bg-color-2">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 experience-column">
                            <div id="content_block_5">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <span className="top-title">Team Behind Us</span>
                                        <h2>Our Experience & Team</h2>
                                    </div>
                                    <div className="text">
                                        <p>Obligations of business it will frequently occur that pleasures have to be repudiated & annoyances accepted the wise man therefore always hold in these matters to this principle of selection.</p>
                                    </div>
                                    <div className="progress-inner">
                                        <ProgressBar percentage="52%" label="Temporary" />
                                        <ProgressBar percentage="78%" label="Contract" />
                                        <ProgressBar percentage="65%" label="Direct Hire" />
                                        <ProgressBar percentage="89%" label="Payrolling" />
                                    </div>
                                    <div className="link"><a href="index.html"><i className="flaticon-right-arrow"></i>Meet All Team Members</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                            <div className="row align-items-center clearfix">
                                <TeamMember
                                    name="Garrett Barnie"
                                    designation="Founder"
                                    image="/src/assets/images/team/team-1.jpg"
                                />
                                <TeamMember
                                    name="Isaac Herman"
                                    designation="VP, Finance"
                                    image="/src/assets/images/team/team-2.jpg"
                                />
                                <TeamMember
                                    name="Joel Lou"
                                    designation="Senior Consultant"
                                    image="/src/assets/images/team/team-3.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Footer */}
            {/* <footer className="main-footer">
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="widget-section">
                            <div className="row clearfix">
                                <FooterColumn>
                                    <div className="footer-widget about-widget">
                                        <div className="widget-content">
                                            <figure className="footer-logo"><a href="index.html"><img src="/src/assets/images/footer-logo.png" alt="" /></a></figure>
                                            <div className="text">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                                <p>Hand you are going to use a passage of Lorem Ipsum.</p>
                                            </div>
                                            <ul className="info-box clearfix">
                                                <li><i className="flaticon-email"></i><a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                                <li><i className="flaticon-telephone"></i><a href="tel:6668880000">666 888 0000</a></li>
                                            </ul>
                                            <ul className="footer-social clearfix">
                                                <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="index.html"><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </FooterColumn>
                                <FooterColumn>
                                    <FooterWidget title="Services">
                                        <ul className="widget-content">
                                            <li><a href="index.html">Candidate Profile</a></li>
                                            <li><a href="index.html">CV Distribution</a></li>
                                            <li><a href="index.html">Job Search</a></li>
                                            <li><a href="index.html">Work Abroad</a></li>
                                            <li><a href="index.html">Job Support</a></li>
                                            <li><a href="index.html">Pre Departure Support</a></li>
                                        </ul>
                                    </FooterWidget>
                                </FooterColumn>
                                <FooterColumn>
                                    <FooterWidget title="Quick Links">
                                        <ul className="widget-content">
                                            <li><a href="index.html">About Us</a></li>
                                            <li><a href="index.html">Our Services</a></li>
                                            <li><a href="index.html">How It’s Work</a></li>
                                            <li><a href="index.html">Our Pricing</a></li>
                                            <li><a href="index.html">Latest Blog</a></li>
                                            <li><a href="index.html">Contact Us</a></li>
                                        </ul>
                                    </FooterWidget>
                                </FooterColumn>
                                <FooterColumn>
                                    <div className="footer-widget news-widget">
                                        <FooterWidget title="News">
                                            <div className="widget-content">
                                                <NewsItem
                                                    date="February 16, 2020"
                                                    title="Lorem Ipsum is simply dummy text"
                                                    link="index.html"
                                                />
                                                <NewsItem
                                                    date="February 16, 2020"
                                                    title="Lorem Ipsum is simply dummy text"
                                                    link="index.html"
                                                />
                                            </div>
                                        </FooterWidget>
                                    </div>
                                </FooterColumn>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBottom />
            </footer> */}
        </div>
    );
};

const Step = ({ stepNumber, title, description, icon, link }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 process-block">
        <div className="process-block-one">
            <div className="inner-box">
                <div className="shape" style={{ backgroundImage: 'url(/src/assets/images/shape/shape-1.png)' }}></div>
                <div className="count-box">
                    <span>{stepNumber}</span>
                </div>
                <div className="icon-box"><img src={icon} alt="" /></div>
                <h4><a href={link}>{title}</a></h4>
                <div className="text">{description}</div>
            </div>
        </div>
    </div>
);

const HistoryItem = ({ year, title, description, image }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 column">
        <div className="history-block-one">
            <div className="inner-box">
                <figure className="image-box"><img src={image} alt="" /></figure>
                <div className="lower-content">
                    <div className="content-box">
                        <div className="pattern" style={{ backgroundImage: 'url(/src/assets/images/shape/shape-1.png)' }}></div>
                        <div className="year-box">
                            <div className="icon-box"><i className="flaticon-star"></i></div>
                            <h4>{year}</h4>
                        </div>
                        <h3><a href="index.html">{title}</a></h3>
                        <div className="text">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ProgressBar = ({ percentage, label }) => (
    <div className="progress-box">
        <h5>{label}</h5>
        <div className="bar">
            <div className="bar-inner count-bar" data-percent={percentage} style={{ width: percentage }}>
                <div className="count-text">{percentage}</div>
            </div>
        </div>
    </div>
);

const TeamMember = ({ name, designation, image }) => (
    <div className="col-lg-6 col-md-6 col-sm-12 team-block">
        <div className="team-block-one">
            <div className="inner-box">
                <figure className="image-box"><img src={image} alt="" /></figure>
                <div className="lower-content">
                    <h3><a href="index.html">{name}</a></h3>
                    <span className="designation">{designation}</span>
                </div>
            </div>
        </div>
    </div>
);

const FooterColumn = ({ children }) => (
    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        {children}
    </div>
);

const FooterWidget = ({ title, children }) => (
    <div className="footer-widget links-widget">
        <h4 className="widget-title">{title}</h4>
        <div className="widget-content">
            {children}
        </div>
    </div>
);

const NewsItem = ({ date, title, link }) => (
    <div className="post">
        <figure className="post-thumb">
            <a href={link}><img src="/src/assets/images/resource/news-1.jpg" alt="" /></a>
        </figure>
        <h5><a href={link}>{title}</a></h5>
        <span className="post-date">{date}</span>
    </div>
);

const FooterBottom = () => (
    <div className="footer-bottom">
        <div className="auto-container">
            <div className="inner-box clearfix">
                <div className="copyright pull-left">
                    <p><a href="index.html">EazyRecruitz</a> &copy; 2022 All Right Reserved</p>
                </div>
                <ul className="footer-nav pull-right">
                    <li><a href="index.html">Privacy Policy</a></li>
                    <li><a href="index.html">Terms of Service</a></li>
                    <li><a href="index.html">Sitemap</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default About;
