import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} style={{ height: "250px" }} />
        <p>{product.description}</p>
        <h3>${product.price}</h3>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={addToCart} 
          sx={{ mr: 2 }}
        >
          Thêm vào giỏ hàng
        </Button>

        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={() => navigate(-1)}
        >
          ⬅ Quay lại
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
