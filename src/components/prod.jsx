import React from "react";
import Footer from "../footer/footer";
import Header from "./header";
// import Header from "./header";
import "./prod.css";
export default function Prod() {
  return (
    <>
      <Header />
      <div className="fort">
        <div className="fut">
          <Footer />
        </div>

        <div className="ffd">
          <h1
            style={{
              position: "relative",
              left: "130px",
              bottom: "150px",
            }}
          >
            Спортивный газон
          </h1>
          <p
            style={{
              position: "relative",
              left: "130px",
              bottom: "150px",
              display: "flex",
            }}
          >
            <img
              style={{
                position: "relative",
                // left: "130px",
                // bottom: "150px",
              }}
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products2&dirtyAlias=33a377ea26-1_600x400.jpg"
              alt=""
            />

            <p
              style={{
                position: "relative",
                left: "20px",
              }}
            >
              {" "}
              Помимо того, что газон для спорта должен быть устойчивым к
              вытаптыванию, <br /> он должен выдерживать низкую стрижку. А
              плотная дернина такого газона <br /> способна вытеснить сорняки.
              Мы рабы предложить высококачественные <br /> спортивные смеси
              DLF-Trifolium. Чемпионат мира по футболу 2010 года в <br /> Южной
              Африке проходил на газонах этой компании.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
