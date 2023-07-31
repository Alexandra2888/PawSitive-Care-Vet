import "./Testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials" className="swiper">
      <h2>What Our Clients Say</h2>
      <p>Veterinary care that&apos;s rooted in compassion.</p>
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
          <SwiperSlide>
            <article className="swiper-slide">
              <p className="swiper__slide-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum veritatis labore quisquam exercitationem quo, magnam quos?
                Quia.
              </p>
              <div className="patient">
                <div className="avatar">
                  <figure aria-label="patient 1">
                    <figcaption>
                      <img
                        src="/assets/avatar1.jpg"
                        alt="Patient One"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="patient__details">
                  <h5>Nana Ama McBrown</h5>
                  <small>Dog owner</small>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="swiper-slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum veritatis labore quisquam exercitationem quo, magnam quos?
                Quia.
              </p>
              <div className="patient">
                <div className="avatar">
                  <figure aria-label="patient 2">
                    <figcaption>
                      <img
                        src="/assets/avatar2.jpg"
                        alt="Patient Two"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="patient__details">
                  <h5>John Dumelo</h5>
                  <small>Cat owner</small>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="swiper-slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum veritatis labore quisquam exercitationem quo, magnam quos?
                Quia.
              </p>
              <div className="patient">
                <div className="avatar">
                  <figure aria-label="patient 3">
                    <figcaption>
                      <img
                        src="/assets/avatar3.jpg"
                        alt="Patient Three"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="patient__details">
                  <h5>Edem Quist</h5>
                  <small>Dog owner</small>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="swiper-slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum veritatis labore quisquam exercitationem quo, magnam quos?
                Quia.
              </p>
              <div className="patient">
                <div className="avatar">
                  <figure aria-label="patient 4">
                    <figcaption>
                      <img
                        src="/assets/avatar4.jpg"
                        alt="Patient Four"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="patient__details">
                  <h5>Chantel Nontokozo</h5>
                  <small>Cat owner</small>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="swiper-slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum veritatis labore quisquam exercitationem quo, magnam quos?
                Quia.
              </p>
              <div className="patient">
                <div className="avatar">
                  <figure aria-label="patient 5">
                    <figcaption>
                      <img
                        src="/assets/avatar5.jpg"
                        alt="Patient Five"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="patient__details">
                  <h5>Jackie Appiah</h5>
                  <small>Dog owner</small>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="swiper-slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum veritatis labore quisquam exercitationem quo, magnam quos?
                Quia.
              </p>
              <div className="patient">
                <div className="avatar">
                  <figure aria-label="patient 6">
                    <figcaption>
                      <img
                        src="/assets/avatar6.jpg"
                        alt="Patient Six"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="patient__details">
                  <h5>Diana Ayi</h5>
                  <small>Cat owner</small>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="swiper-slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum veritatis labore quisquam exercitationem quo, magnam quos?
                Quia.
              </p>
              <div className="patient">
                <div className="avatar">
                  <img
                    src="/assets/avatar7.jpg"
                    alt="Patient Seven"
                  />
                </div>
                <div className="patient__details">
                  <h5>Johanna Doe</h5>
                  <small>Dog owner</small>
                </div>
              </div>
            </article>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
