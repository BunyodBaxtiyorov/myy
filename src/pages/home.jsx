import React from "react";
import Blog from "../components/blog";
// import { Route, Routes } from "react-router-dom";
import Call from "../components/call";
import Gallery from "../components/Gallery";
import Gazon from "../components/gazon";
import Header from "../components/header";
// import Prod from "../components/prod";
import Product from "../components/product";
import White from "../components/white";
import Footer from "../footer/footer";
import Map from "../maps/map";
// import Footer from "../footer/footer";

export default function Home() {
  return (
    <>
      {/* <div className="gh"> */}
      <Header />
      <Call />
      <Gazon />
      <Product />
      <White />
      <Gallery />
      <Blog />
      <Map />
      <Footer />
      {/* </div> */}
    </>
  );
}
