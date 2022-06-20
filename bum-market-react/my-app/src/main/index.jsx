import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import "./CSS/index.css";
import "./CSS/reset.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = useState([]);
  // console.log(products);
  // console.log(setProducts);
  useEffect(function () {
    axios
      .get(
        "https://bef77cc5-9ada-4bed-a622-00909f2581e0.mock.pstmn.io/products"
      )
      .then((result) => {
        // console.log("실행 결과: ", result);
        const products = result.data.products;
        // console.log(products);
        setProducts(products);
      })
      .catch((error) => {
        console.error("에러 발생: ", error);
      });
  }, []);

  return (
    <>
      <article id="banner">
        <img src="images/banners/banner1.png" alt="" />
      </article>
      <h1>대기중인 파티모임</h1>
      <article id="product-list">
        {products.map(function (products, index) {
          return (
            <div className="product-card" key={products.id}>
              <Link className="product-link" to={`/products/${products.id}`}>
                <div>
                  <img className="product-img" src={products.imageUrl} alt="" />
                </div>
                <div className="product-contents">
                  <span className="product-name">{products.name}</span>
                  <span className="product-price">{products.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                      alt=""
                    />
                    <span>{products.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default MainPage;
