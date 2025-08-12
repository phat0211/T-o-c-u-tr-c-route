import React from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const products = [
    { id: 1, name: "iPhone" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Xiaomi" },
  ];

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Quay lại trang chủ</Link>
    </div>
  );
}

export default ProductList;
