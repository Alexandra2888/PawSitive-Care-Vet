import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Navigation } from "swiper";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import {
  testimonialsData,
  testimonialsSectionTitle,
  testimonialsSectionDescription,
} from "../../utils/data/data";

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonialsData.length;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === total - 1;

  return (
    <section id="testimonials" className="w-[82%] mx-auto">
      <h2>{testimonialsSectionTitle}</h2>
      <p>{testimonialsSectionDescription}</p>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation]}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <article className="gradient-bg rounded-2xl cursor-default text-[1.1rem] overflow-hidden">
              <div className="flex items-center max-md:flex-col">
                {/* Left: prev arrow + avatar panel */}
                <div className="flex items-center max-md:flex-col">
                  {/* Prev arrow */}
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 text-white cursor-pointer transition-all hover:bg-white/40 mx-2 max-md:mt-4 ${
                      isFirst ? "invisible" : ""
                    }`}
                    aria-label="Previous slide"
                  >
                    <IoChevronBack className="text-lg" />
                  </button>

                  {/* Avatar + name + title */}
                  <div className="flex flex-col items-center justify-center gap-3 p-8 min-w-[180px]">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={testimonial.patient.avatar}
                        alt={testimonial.patient.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-white font-semibold text-center">
                      {testimonial.patient.name}
                    </h5>
                    <small className="text-light text-center">
                      {testimonial.patient.type}
                    </small>
                  </div>
                </div>

                {/* Right: review text + next arrow */}
                <div className="flex items-center flex-1 p-8 max-sm:p-6">
                  <p className="flex-1 text-white leading-relaxed">
                    {testimonial.quote}
                  </p>

                  {/* Next arrow */}
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 text-white cursor-pointer transition-all hover:bg-white/40 ml-4 ${
                      isLast ? "invisible" : ""
                    }`}
                    aria-label="Next slide"
                  >
                    <IoChevronForward className="text-lg" />
                  </button>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${
              index === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
