import React from "react";
import "./blog.css";
import SwiperApp from "./swiper-2";
export default function Blog() {
  return (
    <div className="Blog-2">
      <div className="blog-3">
        <h1 id="blog-2">
          НАШ <span>БЛОГ</span>
        </h1>
        <p id="blog-4">
          Прочитав наш блог вы узгаете много полезных информации о газонах.
        </p>
      </div>
      <SwiperApp />
    </div>
  );
}
