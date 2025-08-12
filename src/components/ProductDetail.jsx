import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>ID sản phẩm: {id}</p>
      <Link to="/products">Quay lại danh sách</Link>
    </div>
  );
}

export default ProductDetail;
