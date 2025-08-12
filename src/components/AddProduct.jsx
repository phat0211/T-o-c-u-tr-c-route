import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đã thêm sản phẩm: ${name}`);
    navigate("/products"); 
  };

  return (
    <div>
      <h1>Thêm sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>
      <Link to="/">Quay lại trang chủ</Link>
    </div>
  );
}

export default AddProduct;
