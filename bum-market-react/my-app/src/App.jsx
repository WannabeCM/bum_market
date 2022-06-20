import "./App.css";
import MainPage from "./main";
import { Routes, Route, Link } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product/index.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>MainPage</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/upload"}>Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </>
  );
}

export default App;
