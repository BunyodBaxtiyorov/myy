// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper-2.css";

import React, { useRef, useState } from "react";

import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="Swip">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          // modules={[Pagination]}
          // className="mySwiper"
          // spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // pagination={{
          // clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="imag">
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
                alt=""
              />
            </div>
            <p className="p-bl">23 октября 2017-г. |</p> <br />
            <h5 className="hh4">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА,
              <br /> ДО РУЛОННЫХ ГАЗОНОВ
            </h5>
            <br />
            <p className="pp-0">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход <br /> за ними осуществляется с помощью газонокосилки или
              трим{" "}
            </p>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="imag">
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog3&dirtyAlias=2444dceb04-1_500x306.jpg"
                alt=""
              />
            </div>
            <p className="p-bl">23 октября 2017-г. |</p>
            <br />
            <h5 className="hh4">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА,
              <br /> ДО РУЛОННЫХ ГАЗОНОВ
            </h5>
            <br />
            <p className="pp-0">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход <br /> за ними осуществляется с помощью газонокосилки или
              трим{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="imag">
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog2&dirtyAlias=9183ae96e1-1_500x306.jpg"
                alt=""
              />
            </div>
            <p className="p-bl">23 октября 2017-г. |</p>
            <br />
            <h5 className="hh4">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА,
              <br /> ДО РУЛОННЫХ ГАЗОНОВ
            </h5>
            <br />
            <p className="pp-0">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход <br /> за ними осуществляется с помощью газонокосилки или
              трим{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="imag">
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog1&dirtyAlias=1019217839-1_500x306.jpg"
                alt=""
              />
            </div>
            <p className="p-bl">23 октября 2017-г. |</p>
            <br />
            <h5 className="hh4">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА,
              <br /> ДО РУЛОННЫХ ГАЗОНОВ
            </h5>
            <br />
            <p className="pp-0">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход <br /> за ними осуществляется с помощью газонокосилки или
              трим{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="imag">
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog5&dirtyAlias=caf59afe98-1_500x306.jpg"
                alt=""
              />
            </div>
            <p className="p-bl">23 октября 2017-г. |</p>
            <br />
            <h5 className="hh4">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА,
              <br /> ДО РУЛОННЫХ ГАЗОНОВ
            </h5>
            <br />
            <p className="pp-0">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход <br /> за ними осуществляется с помощью газонокосилки или
              трим{" "}
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
