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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum veritatis labore quisquam exercitationem quo, magnam quos?
                Quia.
              </p>
              <div className="patient">
                <div className="avatar">
                  <img src="src/assets/avatar1.jpg" alt="Patient One" />
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
                  <img src="src/assets/avatar2.jpg" alt="Patient Two" />
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
                  <img src="src/assets/avatar3.jpg" alt="Patient Three" />
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
                  <img src="src/assets/avatar4.jpg" alt="Patient Four" />
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
                  <img src="src/assets/avatar5.jpg" alt="Patient Five" />
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
                  <img src="src/assets/avatar6.jpg" alt="Patient Six" />
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
                  <img src="src/assets/avatar7.jpg" alt="Patient Seven" />
                </div>
                <div className="patient__details">
                  <h5>John Doe</h5>
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
