import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Trang chủ</h1>
      <nav>
        <Link to="/products">Danh sách sản phẩm</Link> |{" "}
        <Link to="/add">Thêm sản phẩm</Link>
      </nav>
    </div>
  );
}

export default Home;
