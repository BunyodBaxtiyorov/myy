// import "./App.css";
// import Gallery from "./components/Gallery";
import Header from "./components/header";
// import White from "./components/white";
import Home from "./pages/home";
import Loader from "./components/loader";
// import Blog from "./components/blog";
// import Map from "./maps/map";
// import Footer from "./footer/footer";
import Prod from "./components/prod";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Loader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Prod />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
