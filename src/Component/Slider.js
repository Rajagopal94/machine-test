import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ filteredCountries }) => {
  return (
    <div className="image-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
      >
        {filteredCountries.slice(1, 6).map((country, index) => (
          <SwiperSlide key={index}>
            <div className="imgBlock">
              <img
                src={country.flag}
                alt="Country Flag"
                className="img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev custom-arrow">
        <i className="bi bi-arrow-left-short"></i>
      </button>
      <button className="swiper-button-next custom-arrow">
        <i className="bi bi-arrow-right-short"></i>
      </button>
    </div>
  );
};

export default Slider;
