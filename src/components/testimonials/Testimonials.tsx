
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  testimonialsData,
  testimonialsSectionTitle,
  testimonialsSectionDescription,
} from "../../utils/data/data";

import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section id="testimonials" className="swiper">
      <h2>{testimonialsSectionTitle}</h2>
      <p>{testimonialsSectionDescription}</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <div className="swiper-wrapper">
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <article className="swiper-slide">
                <p className="swiper__slide-para">{testimonial.quote}</p>
                <div className="patient">
                  <div className="avatar">
                    <figure aria-label={`patient ${index + 1}`}>
                      <figcaption>
                        <img
                          src={testimonial.patient.avatar}
                          alt={`Patient ${index + 1}`}
                        />
                      </figcaption>
                    </figure>
                  </div>
                  <div className="patient__details">
                    <h5>{testimonial.patient.name}</h5>
                    <small>{testimonial.patient.type}</small>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
