import React from 'react';
// import './TestimonialSection.css'; // Import any necessary CSS file

const testimonials = [
  {
    imgSrc: '/src/assets/images/resource/testimonial-1.png',
    quoteImgSrc: '/src/assets/images/icons/quote-1.png',
    name: 'Evan Clement',
    designation: 'Manager, Cypertech',
    text: '[Eazy Recruitz] is very accurate when comes to helping you find a job and if that job finishes, They help you to find an another job placement!',
  },
  {
    imgSrc: '/src/assets/images/resource/testimonial-2.png',
    quoteImgSrc: '/src/assets/images/icons/quote-1.png',
    name: 'Freddie Esther',
    designation: 'VP, Daily News',
    text: 'I really appreciated the outstanding time, work, and effort that the entire staff put into finding me an excellent job placement. Thank you very much.',
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section bg-color-2">
      <div className="auto-container">
        <div className="sec-title">
          <span className="top-title">Client Testimonials</span>
          <h2>Highest Client Satisfaction Rate</h2>
        </div>
        <div className="testimonial-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-block-one" key={index}>
              <div className="inner-box">
                <div
                  className="border-shap"
                  style={{ backgroundImage: 'url(/src/assets/images/shape/border-1.png)' }}
                ></div>
                <figure className="quote-box">
                  <img src={testimonial.quoteImgSrc} alt="Quote Icon" />
                </figure>
                <div className="author-box">
                  <figure className="author-thumb">
                    <img src={testimonial.imgSrc} alt="Author" />
                  </figure>
                  <ul className="rating clearfix">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i className="flaticon-star"></i>
                      </li>
                    ))}
                  </ul>
                  <h3>
                    {testimonial.name} - <span>{testimonial.designation}</span>
                  </h3>
                </div>
                <div className="text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
