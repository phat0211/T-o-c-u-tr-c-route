import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Danh sách sản phẩm</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                }}
            >
                {products.map((p) => (
                    <div
                        key={p.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            minHeight: "320px", 
                        }}
                    >
                        <img
                            src={p.image}
                            alt={p.title}
                            style={{
                                height: "150px",
                                objectFit: "contain",
                                marginBottom: "10px",
                            }}
                        />
                        <h4 style={{ flexGrow: 1 }}>{p.title}</h4>
                        <p>${p.price}</p>
                        <div style={{ marginTop: "auto", textAlign: "center" }}>
                            <Link to={`/product/${p.id}`} style={{ textDecoration: "none" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Xem chi tiết
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
