import React from "react";

export default function Call() {
  return (
    <div className="phone-call">
      <h1> Готовый рулонный газон от производителей +998(91) 1900339.</h1>
      <h2>
        _______{" "}
        <span
          style={{
            color: "gold",
          }}
        >
          {" "}
          __
        </span>{" "}
        _______
      </h2>
      <p>
        Мы производим лучший рулонный(готовый) газон. Для продажи, оптом и в
        розницу. С доставкой и <br /> настилом в Ташкенте и Ташкентской области.
      </p>
      <h3>Форма обратного звонка</h3>
      <input type="text" name="Ism" id="ff" placeholder="Введите вашу имя" />
      <br />
      <input
        type="email"
        name="Nomer"
        id="fff"
        placeholder="Введите номер телефона"
      />
      <br /> <br /> <br />
      <button className="ff">Оставить</button>
    </div>
  );
}
