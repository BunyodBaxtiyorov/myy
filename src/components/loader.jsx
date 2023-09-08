import React, { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.configure({ color: "blue" });
    NProgress.configure({ height: "40px" }); // Progress barningni balandligini 40px qilish
    NProgress.start();

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        NProgress.done();
      })
      .catch((error) => {
        console.error("Ma'lumotlarni olishda xato:", error);
        setLoading(false);
        NProgress.done();
      });
  }, []);

  return;
};

export default DataFetcher;
