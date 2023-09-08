import React from "react";
import "./footer.css";
import { RiFacebookLine } from "react-icons/ri";
import { PiInstagramLogoLight } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Footer() {
  return (
    <>
      <div className="sergul">
        <div className="foter">
          <div className="oip">
            <div className="opppppp">
              <img src="https://mygazon.uz/images/logo.png" alt="" />
              <br />

              <p className="ose">
                MyGazon Готовый рулонный газон от <br /> производителей. Мы
                производим <br /> рулонный газоны и предлагаем готовый <br />
                рулонный газон для продажи, оптом и в <br /> розницу в Ташкенте
                и Ташкентской <br /> области.
              </p>
              <div className="is">
                <RiFacebookLine className="facee" />
                <PiInstagramLogoLight className="inss" />
              </div>
            </div>
            <div className="nm">
              <ul className="uli">
                <li className="pll">МЕНЮ</li>
                <li className="pl">КОНТАКТЫ</li>
              </ul>{" "}
              <br />
              <div className="but-19">
                <button> {">"} Главная</button> <br />
                <button>{">"} О Нас</button>
                <br />
                <button>{">"} Наши Продукты</button>
                <br />
                <button> {">"} Галерея</button>
                <br />
                <button>{">"} Блог</button>
                <br />
                <button> {">"} Отзывы</button>
                <br />
                <button> {">"} Контакты</button>
                <br />
              </div>
              <div className="contas">
                <h4>
                  <ImLocation className="locat-5" /> АДРЕС:
                </h4>
                <p className="p-20">г. Ташкент, Сергелинский р-н ул.Хонобод</p>
              </div>
              <div className="contas">
                <h4>
                  <BsFillTelephoneFill className="locat-5" /> АДРЕС:
                </h4>
                <p className="p-20">г. Ташкент, Сергелинский р-н ул.Хонобод</p>
              </div>
              <div className="contas">
                <h4>
                  <AiOutlineMail className="locat-5" /> Е-МАИЛ:
                </h4>
                <p className="p-20">info@mygazon.uz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blc"> </div>
      </div>
    </>
  );
}
