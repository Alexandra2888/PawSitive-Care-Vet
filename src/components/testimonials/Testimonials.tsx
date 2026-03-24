import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  testimonialsData,
  testimonialsSectionTitle,
  testimonialsSectionDescription,
} from "../../utils/data/data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-[82%] mx-auto">
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
        <div className="mb-16">
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <article className="gradient-bg p-6 px-8 rounded-2xl cursor-default text-[1.1rem] max-sm:p-6">
                <p className="mb-6">{testimonial.quote}</p>
                <div className="flex pl-4 pt-4 justify-start items-start gap-4 text-left">
                  <div className="w-[6.5rem] aspect-square">
                    <figure aria-label={`patient ${index + 1}`}>
                      <figcaption>
                        <img
                          src={testimonial.patient.avatar}
                          alt={`Patient ${index + 1}`}
                        />
                      </figcaption>
                    </figure>
                  </div>
                  <div className="flex flex-col items-center text-left pt-6">
                    <h5>{testimonial.patient.name}</h5>
                    <small className="text-left">{testimonial.patient.type}</small>
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
