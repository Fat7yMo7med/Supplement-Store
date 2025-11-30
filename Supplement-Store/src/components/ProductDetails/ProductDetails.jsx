import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/product_16.jpg";
import img2 from "../../assets/images/product_17.jpg";
import img3 from "../../assets/images/product_19.jpg";
import img4 from "../../assets/images/product_20.jpg";

export default function ProductPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const products = [
    {
      id: 1,
      img: img1,
      name: "Whey Sport",
      price: 49.99,
      oldPrice: 69.99,
      description: "High-quality whey protein for muscle recovery and growth.",
      additionalInfo: "Net weight: 2 lb (908 g). Serving size: 1 scoop (30 g).",
      reviews: [
        { name: "Jane Doe", rating: 5, comment: "Excellent taste and mixes perfectly." },
        { name: "John Smith", rating: 4, comment: "Good protein, helps with recovery." },
      ],
    },
    {
      id: 2,
      img: img2,
      name: "Whey Protein",
      price: 39.99,
      oldPrice: 59.99,
      description: "Pure whey protein to support daily nutrition and fitness goals.",
      additionalInfo: "Net weight: 1.5 lb (680 g). Serving size: 1 scoop (28 g).",
      reviews: [
        { name: "Ali Hassan", rating: 5, comment: "Very effective protein powder." },
      ],
    },
    {
      id: 3,
      img: img3,
      name: "Protein Bar",
      price: 19.99,
      oldPrice: 29.99,
      description: "Delicious protein bars packed with essential nutrients.",
      additionalInfo: "Each bar contains 20g protein and 5g fiber.",
      reviews: [
        { name: "Sara Ahmed", rating: 4, comment: "Tasty and convenient snack." },
      ],
    },
    {
      id: 4,
      img: img4,
      name: "Creatine",
      price: 29.99,
      oldPrice: 39.99,
      description: "Enhances strength and power for high-intensity training.",
      additionalInfo: "Net weight: 300g. Take 5g per day mixed with water or juice.",
      reviews: [
        { name: "Mohamed Ali", rating: 5, comment: "Gives great strength boost!" },
      ],
    },
    {
      id: 5,
      img: img1,
      name: "BCAA Powder",
      price: 34.99,
      oldPrice: 49.99,
      description: "Supports muscle recovery and reduces fatigue during workouts.",
      additionalInfo: "Net weight: 400g. Mix 1 scoop with water before or after exercise.",
      reviews: [],
    },
    {
      id: 6,
      img: img2,
      name: "Pre-Workout",
      price: 44.99,
      oldPrice: 59.99,
      description: "Boosts energy, focus, and endurance during workouts.",
      additionalInfo: "Net weight: 350g. Mix 1 scoop with water 20-30 minutes before training.",
      reviews: [],
    },
    {
      id: 7,
      img: img3,
      name: "Glutamine",
      price: 24.99,
      oldPrice: 34.99,
      description: "Supports muscle recovery, immune system, and gut health.",
      additionalInfo: "Net weight: 500g. Take 5g daily after workouts.",
      reviews: [],
    },
    {
      id: 8,
      img: img4,
      name: "Omega 3 Capsules",
      price: 29.99,
      oldPrice: 39.99,
      description: "Supports heart health, brain function, and joint health.",
      additionalInfo: "Contains 1000mg fish oil per capsule. Take 2 capsules daily with meals.",
      reviews: [],
    },
  ];

  const [selected, setSelected] = useState(product || products[0]);
  const [main, setMain] = useState(selected.img);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");

  useEffect(() => {
    if (product) {
      setSelected(product);
      setMain(product.img);
      setQty(1);
      setTab("description");
    }
  }, [product]);

  const related = products.filter((p) => p.id !== selected.id);

  return (
    <div className="container-fluid p-4" style={{ background: "#0f172a", color: "#e0e0e0", minHeight: "100vh" }}>
      <style>
        {`
        .btn-cyan { 
          background-color: #00e5ff !important;
          color: #0f172a !important; 
          font-weight: bold; 
        }
        .btn-cyan:hover { 
          box-shadow: 0 0 10px #00e5ff; 
        }
        .btn-outline-cyan { 
          border-color: #00e5ff !important; 
          color: #00e5ff !important; 
        }
        .btn-outline-cyan:hover { 
          background-color: #00e5ff !important; 
          color: #0f172a !important; 
        }
        .badge-cyan { 
          background-color: #00e5ff !important; 
          color: #0f172a !important; 
        }
        .nav-tabs .nav-link.active { 
          color: #0f172a !important; 
          background-color: #00e5ff !important; 
        }
        .form-control-cyan:focus { 
          border-color: #00e5ff; 
          box-shadow: 0 0 8px #00e5ff; 
          background-color: #1e293b; color: #ffffff; 
        }
        .thumb.active { 
          border: 2px solid #00e5ff; 
        }
        .card-bg { 
          background-color: #1e293b; 
        }
        .star { 
          color: #ffc107; 
        }
      `}
      </style>

      <div className="row align-items-start mb-4">
        <div className="col-12 col-md-6">
          <div className="card p-3 card-bg text-center">
            <img src={main}alt={selected.name} className="img-fluid rounded mb-3" style={{ maxHeight: 480, width: "100%", objectFit: "cover" }}/>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card p-3 card-bg">
            <h2 className="text-warning">{selected.name}</h2>
            <span className="badge badge-cyan mb-2">In Stock</span>
            <div className="mb-3">
              <span className="h4 text-warning me-2">${selected.price}</span>
              {selected.oldPrice && (
                <small className="text-warning">(was ${selected.oldPrice})</small>
              )}
            </div>

            <div className="mb-3 d-flex align-items-center" style={{ gap: 8 }}>
              <label className="me-2 mb-0" style={{ color: "#00e5ff" }}>Quantity</label>
                <div className="input-group" style={{ width: 140 }}>
                  <button className="btn btn-outline-cyan" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                  <input type="number" className="form-control text-center form-control-cyan bg-dark text-light" value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}/>
                  <button className="btn btn-outline-cyan" onClick={() => setQty((q) => q + 1)}>+</button>
                </div>
            </div>

            <div className="mb-3 d-flex" style={{ gap: 12 }}>
              <button className="btn btn-cyan btn-lg m-auto">Add to Cart</button>
            </div>

            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href="#" className={`nav-link ${tab === "description" ? "active" : ""}`} style={{ color: "#f9d90aff" }} onClick={(e) => { e.preventDefault(); setTab("description"); }}>
                  Description </a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link ${tab === "additional" ? "active" : ""}`} style={{ color: "#f9d90aff" }} onClick={(e) => { e.preventDefault(); setTab("additional"); }}>
                  Additional Info </a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link ${tab === "reviews" ? "active" : ""}`} style={{ color: "#f9d90aff" }} onClick={(e) => { e.preventDefault(); setTab("reviews"); }}>
                  Reviews ({selected.reviews?.length || 0})
                </a>
              </li>
            </ul>

            <div className="tab-content border p-3 card-bg text-light mt-2">
              {tab === "description" && <p>{selected.description}</p>}
              {tab === "additional" && <p>{selected.additionalInfo}</p>}
              {tab === "reviews" && (
                <div>
                  {selected.reviews?.length ? ( selected.reviews.map((rev, idx) => (
                      <div key={idx} className="mb-3">
                          <strong>{rev.name}</strong>
                          <p className="mt-1">{rev.comment}</p>
                        <div className="text-warning">
                          {Array.from({ length: rev.rating }, (_, i) => (
                            <i key={i} className="fas fa-star star"></i>
                          ))}
                          {rev.rating < 5 && Array.from({ length: 5 - rev.rating }, (_, i) => (
                              <i key={i} className="fas fa-star-half-alt star"></i> ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No reviews yet.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-cyan mb-3">Related Products</h4>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
        {related.map((p) => (
          <div className="col" key={p.id}>
            <div className="card h-100 card-bg text-light" style={{ cursor: "pointer" }} onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}>
              <img src={p.img} className="card-img-top rounded" style={{ height: 160, objectFit: "cover" }}/>
              <div className="card-body p-2">
                <div className="small">{p.name}</div>
                <div className="fw-bold text-cyan">${p.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
