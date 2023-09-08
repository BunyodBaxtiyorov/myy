import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
export default function Product() {
  return (
    <div className="Product">
      <h1>
        {" "}
        НАШИ <span> ПРОДУКТЫ</span>{" "}
      </h1>
      <p className="p">
        В этом разделе показано все наши продукты с описанием и реалными
        фотографиями продуктов.
      </p>
      <div className="OP">
        <div className="Products">
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products1&dirtyAlias=45079467da-1_500x306.jpg"
            alt=""
          />
          <button className="button">
            <Link to={"./product"}>Партнерный газон</Link>
          </button>
          <p>
            Партерный газон – самый эффектный газон, <br /> отличающийся
            идеально ровной бархатистой <br /> поверхностью. Это – элитный
            газон, который <br />
            обычно размещают в парадной части сада рядом <br /> с домом, в
            обрамлении цветников и <br /> декоративных кустарников.
          </p>
        </div>
        <div className="Products">
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products2&dirtyAlias=33a377ea26-1_500x306.jpg"
            alt=""
          />
          <button className="button">
            <Link to={"./product"}>Партнерный газон</Link>
          </button>
          <p>
            Спортивные газоны отличаются плотным и эластичным дерном, а также
            присутствием износостойких трав. В качестве примера спортивных
            газонов можно назвать футбольные и гольф-поля, теннисные корты.
          </p>
        </div>
        <div className="Products">
          <img
            src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products3&dirtyAlias=0a244a058b-1_500x306.jpg"
            alt=""
          />
          <button className="button">
            <Link to={"./product"}>Партнерный газон</Link>
          </button>
          <p>
            Для ландшафтного озеленения: от парадных зон до городских парков и
            площадей, спортивных и детских площадок. Оптимален для открытых
            солнечных участков.
          </p>
        </div>
      </div>{" "}
      <br />
      <div className="Products">
        <img
          src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products4&dirtyAlias=e0c9a53d3f-1_500x306.jpg"
          alt=""
        />
        <button className="button">
          <Link to={"./product"}>Партнерный газон</Link>
        </button>
        <p>
          Видовой состав: 100% мятлик луговой. Сортовой состав: Jumpstart,
          Fielder, Bluechip.
        </p>
      </div>
    </div>
  );
}
