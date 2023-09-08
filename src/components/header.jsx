import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <>
      <div className="Header">
        <form action="">
          <ul className="d-flex">
            <li className="nav-item.active ">
              <Link to="/" className="green nav-link tm-nav-link">
                ГЛАВНАЯ
              </Link>
            </li>
            <span> |</span>
            <li className="nav-item">
              <Link className="nav-link tm-nav-link" to="/">
                О НАС
              </Link>
            </li>
            <span> |</span>
            <li className="nav-item">
              <Link className="nav-link tm-nav-link" to="/">
                НАШИ ПРОДУКТЫ
              </Link>
            </li>
            <span> |</span>
            <li className="nav-item">
              <Link className="nav-link tm-nav-link" to="/">
                ГАЛЕРЕЯ
              </Link>
            </li>
            <span> |</span>
            <li className="nav-item">
              <Link className="nav-link tm-nav-link" to="/">
                БЛОГ
              </Link>
            </li>
            <span> |</span>
            <li className="nav-item">
              <Link className="nav-link tm-nav-link" to="/">
                ОТЗЫВЫ
              </Link>
            </li>
            <span> |</span>
            <li className="nav-item">
              <Link className="nav-link tm-nav-link" to="/">
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </form>
      </div>
      <div className="body"></div>
    </>
  );
}
