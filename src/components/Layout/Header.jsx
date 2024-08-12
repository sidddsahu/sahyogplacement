import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import smallLogo from '../../assets/images/small-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="main-header">
      {/* <div className="header-top">
        <div className="top-inner">
          <ul className="left-info">
            <li>
              <i className="flaticon-phone-call"></i>
              <p><span>call: </span><Link to="tel:8004561234">(800) 456-1234</Link></p>
            </li>
            <li>
              <i className="flaticon-email"></i>
              <p><span>Mail: </span><Link to="mailto:info@example.com">info@example.com</Link></p>
            </li>
          </ul>
          <div className="location-box">
            <div className="location-carousel owl-carousel owl-theme owl-dots-none">
              <p><span>Recent:</span> Business Development Manager, San Francisco, CA.</p>
            </div>
            <div className="apply-btn"><Link to="/apply">Apply Online<i className="flaticon-arrow-pointing-to-right"></i></Link></div>
          </div>
          <div className="right-info">
            <ul className="list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
            <ul className="social-links">
              <li><Link to="https://facebook.com"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link to="https://twitter.com"><i className="fab fa-twitter"></i></Link></li>
              <li><Link to="https://plus.google.com"><i className="fab fa-google-plus-g"></i></Link></li>
              <li><Link to="https://youtube.com"><i className="fab fa-youtube"></i></Link></li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="header-lower">
        <div className="outer-box clearfix">
          <div className="menu-area pull-left clearfix">
            <figure className="logo-box"><Link to="/"><img src={logo} alt="Logo" /></Link></figure>
            <div className="mobile-nav-toggler" onClick={toggleMenu}>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
            <nav className={`main-menu navbar-expand-md navbar-light ${menuOpen ? 'open' : ''}`}>
              <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li className="dropdown"><Link to="/">Home</Link></li>
                  <li className="current dropdown"><Link to="/about">About</Link></li>
                  <li className="dropdown"><Link to="/employers">Employers</Link>
                    <ul>
                      <li><Link to="/employers/overview">Overview</Link></li>
                      <li><Link to="/placejob">Place Job Order</Link></li>
                      <li><Link to="/faq">FAQ’s</Link></li>
                      <li><Link to="/testimonials">Testimonials</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown"><Link to="/solutions">Solutions</Link>
                    <ul>
                      <li><Link to="/solutions">Our Solutions</Link></li>
                      <li><Link to="/solutions/temp-staffing">Temporary Staffing</Link></li>
                      <li><Link to="/solutions/direct-hire">Direct Hire</Link></li>
                      <li><Link to="/solutions/contract-hire">Contract to Hire</Link></li>
                      <li><Link to="/solutions/payrolling">Payrolling</Link></li>
                      <li><Link to="/solutions/training">Training</Link></li>
                      <li><Link to="/solutions/executive-search">Executive Search</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown"><Link to="/job-seekers">Job Seekers</Link>
                    <ul>
                      {/* <li><Link to="/job-seekers/overview">Overview</Link></li> */}
                      <li className="dropdown"><Link to="/job-openings">Job Openings</Link>
                        <ul>
                          <li><Link to="/job-openings">Job Openings</Link></li>
                          <li><Link to="/job-details">Detail Page</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/applynow">Apply Now</Link></li>
                      {/* <li><Link to="/faq">FAQ’s</Link></li>
                      <li><Link to="/testimonials">Testimonials</Link></li> */}
                    </ul>
                  </li>
                  {/* <li className="dropdown"><Link to="/pages">Pages</Link>
                    <ul>
                      <li className="dropdown"><Link to="/blog">Blog</Link>
                        <ul>
                          <li><Link to="/blog/grid">Grid View</Link></li>
                          <li><Link to="/blog/list">List View</Link></li>
                          <li><Link to="/blog/single">Single Post</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown"><Link to="/portfolio">Portfolio</Link>
                        <ul>
                          <li><Link to="/portfolio/grid-1">Grid View 01</Link></li>
                          <li><Link to="/portfolio/grid-2">Grid View 02</Link></li>
                          <li><Link to="/portfolio/masonry">Masonry View</Link></li>
                          <li><Link to="/portfolio/fullwidth-1">Fullwidth View 01</Link></li>
                          <li><Link to="/portfolio/fullwidth-2">Fullwidth View 02</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/404">404</Link></li>
                    </ul>
                  </li> */}
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
          </div>
          <ul className="menu-right-content clearfix pull-right">
            <li className="search-box-outer">
              <div className="search-btn">
                <button type="button" className="search-toggler"></button>
              </div>
            </li>
            <li>
              <Link to="/register" className="theme-btn-one">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sticky-header">
        <div className="outer-box clearfix">
          <figure className="logo-box"><Link to="/"><img src={smallLogo} alt="Small Logo" /></Link></figure>
          <div className="menu-area">
            <nav className="main-menu clearfix">
              {/* Menu will come through JavaScript */}
            </nav>
          </div>
          <div className="menu-right-content clearfix pull-right">
            <div className="search-btn">
              <button type="button" className="search-toggler"><i className="flaticon-magnifying-glass"></i></button>
            </div>
            <ul className="social-links">
              <li><Link to="https://facebook.com"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link to="https://twitter.com"><i className="fab fa-twitter"></i></Link></li>
              <li><Link to="https://plus.google.com"><i className="fab fa-google-plus-g"></i></Link></li>
              <li><Link to="https://youtube.com"><i className="fab fa-youtube"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-backdrop" onClick={toggleMenu}></div>
        <div className="close-btn" onClick={toggleMenu}><i className="fas fa-times"></i></div>
        <nav className="menu-box">
          <div className="nav-logo"><Link to="/"><img src={smallLogo} alt="Small Logo" title="" /></Link></div>
          <div className="menu-outer">
            <ul className="navigation">
              <li className="dropdown"><Link to="/">Home</Link></li>
              <li className="dropdown"><Link to="/about">About</Link>
                <ul>
                  <li><Link to="/about">About Company</Link></li>
                  <li><Link to="/about/team">Meet Our Team</Link></li>
                </ul>
              </li>
              <li className="dropdown"><Link to="/employers">Employers</Link>
                <ul>
                  <li><Link to="/employers/overview">Overview</Link></li>
                  <li><Link to="/placejob">Place Job Order</Link></li>
                  <li><Link to="/faq">FAQ’s</Link></li>
                  <li><Link to="/testimonials">Testimonials</Link></li>
                </ul>
              </li>
              <li className="dropdown"><Link to="/solutions">Solutions</Link>
                <ul>
                  <li><Link to="/solutions">Our Solutions</Link></li>
                  <li><Link to="/solutions/temp-staffing">Temporary Staffing</Link></li>
                  <li><Link to="/solutions/direct-hire">Direct Hire</Link></li>
                  <li><Link to="/solutions/contract-hire">Contract to Hire</Link></li>
                  <li><Link to="/solutions/payrolling">Payrolling</Link></li>
                  <li><Link to="/solutions/training">Training</Link></li>
                  <li><Link to="/solutions/executive-search">Executive Search</Link></li>
                </ul>
              </li>
              <li className="dropdown"><Link to="/job-seekers">Job Seekers</Link>
                <ul>
                  <li><Link to="/job-seekers/overview">Overview</Link></li>
                  <li className="dropdown"><Link to="/job-openings">Job Openings</Link>
                    <ul>
                      <li><Link to="/job-openings">Job Openings</Link></li>
                      <li><Link to="/job-details">Detail Page</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/apply-now">Apply Now</Link></li>
                  <li><Link to="/faq">FAQ’s</Link></li>
                  <li><Link to="/testimonials">Testimonials</Link></li>
                </ul>
              </li>
              <li className="dropdown"><Link to="/pages">Pages</Link>
                <ul>
                  <li className="dropdown"><Link to="/blog">Blog</Link>
                    <ul>
                      <li><Link to="/blog/grid">Grid View</Link></li>
                      <li><Link to="/blog/list">List View</Link></li>
                      <li><Link to="/blog/single">Single Post</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown"><Link to="/portfolio">Portfolio</Link>
                    <ul>
                      <li><Link to="/portfolio/grid-1">Grid View 01</Link></li>
                      <li><Link to="/portfolio/grid-2">Grid View 02</Link></li>
                      <li><Link to="/portfolio/masonry">Masonry View</Link></li>
                      <li><Link to="/portfolio/fullwidth-1">Fullwidth View 01</Link></li>
                      <li><Link to="/portfolio/fullwidth-2">Fullwidth View 02</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/404">404</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><Link to="https://twitter.com"><span className="fab fa-twitter"></span></Link></li>
              <li><Link to="https://facebook.com"><span className="fab fa-facebook-square"></span></Link></li>
              <li><Link to="https://pinterest.com"><span className="fab fa-pinterest-p"></span></Link></li>
              <li><Link to="https://instagram.com"><span className="fab fa-instagram"></span></Link></li>
              <li><Link to="https://youtube.com"><span className="fab fa-youtube"></span></Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="search-popup">
        <div className="close-search"><i className="fas fa-times"></i></div>
        <div className="popup-inner">
          <div className="overlay-layer"></div>
          <div className="search-form">
            <form method="post" action="/">
              <div className="form-group">
                <fieldset>
                  <label>Search Here</label>
                  <input type="search" className="form-control" name="search-input" placeholder="Search Here..." required />
                  <button type="submit" className="theme-btn"><i className="flaticon-magnifying-glass"></i></button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
