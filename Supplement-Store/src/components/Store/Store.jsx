import React from "react";
import img1 from "../../assets/Images/product_16.jpg";
import img2 from "../../assets/Images/product_17.jpg";
import img3 from "../../assets/Images/product_19.jpg";
import img4 from "../../assets/Images/product_20.jpg";

export default function Store() {
    const products = [
        { id: 1, img: img1, name: "Whey Sport" },
        { id: 2, img: img2, name: "Whey Sport" },
        { id: 3, img: img3, name: "Whey Sport" },
        { id: 4, img: img4, name: "Whey Sport" },
        { id: 5, img: img1, name: "Whey Sport" },
        { id: 6, img: img2, name: "Whey Sport" },
        { id: 7, img: img3, name: "Whey Sport" },
        { id: 8, img: img4, name: "Whey Sport" },
        { id: 9, img: img1, name: "Whey Sport" },
    ];

return (
    <div className="bg-dark text-light" style={{ fontFamily: "Poppins", minHeight: "100vh" }}>
        <style>{`
            .store-title {
            text-shadow: 0 0 15px rgba(0,255,255,0.5);
            }

            .store-card {
            background: #202733;
            border-radius: 15px;
            padding: 20px;
            transition: 0.35s ease;
            border: 1px solid rgba(0,255,255,0.15);
            }

            .store-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 0 25px rgba(0,255,255,0.3);
            }

            .add-btn {
            transition: 0.3s ease;
            font-weight: 600;
            }

            .add-btn:hover {
            box-shadow: 0 0 12px rgba(0,255,255,0.7);
            }
        `}</style>
        
        <h2 className="text-center text-info text-capitalize store-title py-4">
            Welcome to our Supplements Store
        </h2>
        <div className="container pb-5">
            <div className="row g-4">
            {products.map((p) => (
                <div key={p.id} className="col-md-6 col-lg-4">
                <div className="store-card shadow-lg text-light">
                    <img
                        src={p.img}
                        alt="product"
                        className="img-fluid rounded mx-auto d-block mb-3"
                        style={{ height: "250px", objectFit: "cover" }}
                    />
                    <h3 className="text-center text-info">{p.name}</h3>
                    <button className="btn btn-info w-100 text-dark mt-3 add-btn">
                    <i className="fa fa-cart-plus me-2"></i>
                    Add to Cart
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}
