import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillPersonFill } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="mySwiperr">
        <div className="h11">
          <h1>Отзывы наших клиентов о нас!</h1>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="pupil">
              <div className="pppp">
                <p>Best</p>
              </div>
              <div className="ic">
                {" "}
                <BsFillPersonFill />
              </div>

              <p>G'ayratjon</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pupil">
              <div className="pppp">
                <p className="oooo">
                  Здравствуйте! подскажите пожалуйста возможно ли купить рулонн
                  ый газон в начале марта?
                </p>
              </div>
              <div className="ic">
                {" "}
                <BsFillPersonFill className="oli" />
              </div>
              <p className="oli">Ольга</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pupil">
              <div className="pppp">
                <p className="ssss">Сервис,сена,качество отличное</p>
              </div>
              <div className="ic">
                {" "}
                <BsFillPersonFill className="nodir " />
              </div>
              <p className="nodir">Нодир</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
