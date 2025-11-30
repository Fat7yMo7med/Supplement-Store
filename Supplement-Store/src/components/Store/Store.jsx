import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Images/product_16.jpg";
import img2 from "../../assets/Images/product_17.jpg";
import img3 from "../../assets/Images/product_19.jpg";
import img4 from "../../assets/Images/product_20.jpg";

export default function Store() {
    const navigate = useNavigate();

    const products = [
        { id: 1, img: img1, name: "Whey Sport", price: 49.99, oldPrice: 69.99 },
        { id: 2, img: img2, name: "Whey Protein", price: 39.99, oldPrice: 59.99 },
        { id: 3, img: img3, name: "Protein Bar", price: 19.99, oldPrice: 29.99 },
        { id: 4, img: img4, name: "Creatine", price: 29.99, oldPrice: 39.99 },
        { id: 5, img: img1, name: "BCAA Powder", price: 34.99, oldPrice: 49.99 },
        { id: 6, img: img2, name: "Pre-Workout", price: 44.99, oldPrice: 59.99 },
        { id: 7, img: img3, name: "Glutamine", price: 24.99, oldPrice: 34.99 },
        { id: 8, img: img4, name: "Omega 3 Capsules", price: 29.99, oldPrice: 39.99 },
        { id: 9, img: img1, name: "Vitamin D3", price: 14.99, oldPrice: 24.99 },
        { id: 10, img: img2, name: "Multivitamins", price: 19.99, oldPrice: 29.99 },
        { id: 11, img: img3, name: "Weight Gainer", price: 54.99, oldPrice: 74.99 },
        { id: 12, img: img4, name: "Electrolyte Drink", price: 9.99, oldPrice: 14.99 },
    ];

    return (
        <div className="bg-dark text-light" style={{ fontFamily: "Poppins", minHeight: "100vh" }}>
        <h2 className="text-center text-info py-4">Welcome to our Supplements Store</h2>
        <div className="container pb-5">
            <div className="row g-4">
            {products.map((p) => (
                <div key={p.id} className="col-md-6 col-lg-4">
                
                    <div className="store-card shadow-lg text-light" style={{ background: "#202733", borderRadius: 15, padding: 20, transition: "0.35s", border: "1px solid rgba(0,255,255,0.15)", }}>
                        <img src={p.img} alt={p.name} className="img-fluid rounded mx-auto d-block mb-3" style={{ height: "250px", objectFit: "cover" }}/>
                        <h3 className="text-center text-info">{p.name}</h3>
                        <div className="mb-2 text-center">
                            <span className="h5 text-cyan me-2">${p.price}</span>
                            <small className="text-warning">(was ${p.oldPrice})</small>
                        </div>
                        <button className="btn btn-info w-100 text-dark mt-3" onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}>
                            <i className="fa fa-cart-plus me-2"></i>View Details
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
}
