import { useState, useEffect } from "react";
import "./CSS/index.css";
import "./CSS/reset.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    axios
      .get(
        "https://bef77cc5-9ada-4bed-a622-00909f2581e0.mock.pstmn.io/products"
      )
      .then((result) => {
        console.log("실행 결과: ", result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.log("에러 발생: ", error);
      });
  }, []);

  return (
    <>
      <header id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="" />
        </div>
      </header>
      <main id="main">
        <article id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </article>
        <h1>대기중인 파티모임</h1>
        <article id="product-list">
          {products.map(function (products, index) {
            return (
              <div className="product-card">
                <div>
                  <img class="product-img" src={products.imageUrl} alt="" />
                </div>
                <div className="product-contents">
                  <span class="product-name">{products.name}</span>
                  <span class="product-price">{products.price}원</span>
                  <div class="product-seller">
                    <img
                      class="product-avatar"
                      src="images/icons/avatar.png"
                      alt=""
                    />
                    <span>{products.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </main>
      <footer id="footer"></footer>
    </>
  );
}

export default MainPage;
