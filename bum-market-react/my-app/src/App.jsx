import "./App.css";
import MainPage from "./main";
import { Routes, Route, Link } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product/index.jsx";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  return (
    <>
      <nav>
        <header id="header">
          <div id="header-area">
            <Link to={"/"}>
              <img src="/images/icons/logo.png" alt="" />
            </Link>
            <Button
              size="large"
              onClick={() => {
                alert("업로드가 되었습니다");
              }}
              icon={<DownloadOutlined />}
            >
              상품 업로드
            </Button>
          </div>
        </header>
        <Link to={"/product"}>Product</Link>
        <Link to={"/upload"}>Upload</Link>
      </nav>
      <main id="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </main>
      <footer id="footer"></footer>
    </>
  );
}

export default App;
