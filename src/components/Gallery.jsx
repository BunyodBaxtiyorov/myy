import React from "react";
import "./gall.css";
import Swiper from "./swiper";
export default function Gallery() {
  return (
    <>
      <div className="Gall">
        <h1>
          НАША <span>ГАЛЕРЕЯ</span>{" "}
        </h1>
        <p>
          В этом разделе показана наши галерея фотографии, здес показано работы
          нашей команды и др.
        </p>
        <div className="Image">
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Gallery22&dirtyAlias=35ed377666-1_476x298.jpg"
            alt=""
          />
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Gallery21&dirtyAlias=58b4726aad-1_476x298.jpg"
            alt=""
          />
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Gallery20&dirtyAlias=77979a0339-1_476x298.jpg"
            alt=""
          />
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Gallery19&dirtyAlias=5dea3960af-1_476x298.jpg"
            alt=""
          />
        </div>
        <div className="Image-2">
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Gallery18&dirtyAlias=4ccd4fa066-1_476x298.jpg"
            alt=""
          />
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Gallery17&dirtyAlias=b921684275-1_476x298.jpg"
            alt=""
          />
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Gallery16&dirtyAlias=a1d477e815-1_476x298.jpg"
            alt=""
          />
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Gallery15&dirtyAlias=5e9bae8fcb-1_476x298.jpg"
            alt=""
          />
        </div>
      </div>
      <Swiper />
    </>
  );
}
