import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import toast, { Toaster } from "react-hot-toast"; 

export default function EquipmentPage() {
  const { addToCart } = useContext(cartContext);

  const equipments = [
    {
      id: 1,
      name: "Chest Press Machine",
      specialty: "Chest",
      bio: "Certified trainer with 8 years of experience in bodybuilding and fitness.",
      img: "https://media.zid.store/thumbs/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/52a10a1e-065f-490e-a3ad-9ead7cf4e364-thumbnail-1000x1000-70.jpg",
      price: 499.99,
      salePrice: 599.99,
      description:"A premium chest press machine designed to develop upper-body strength by targeting the chest, shoulders, and triceps. Offers smooth resistance and ergonomic seating for proper posture.",
      additionalInfo:"Material: Steel • Weight Stack: 80 KG • Seat: Adjustable • Dimensions: 140 x 120 x 150 cm • Warranty: 2 years",
      reviews: [
        { name: "Ahmed Samir", rating: 5, comment: "Very smooth movement and strong build quality!" },
        { name: "John Carter", rating: 4, comment: "Comfortable and stable, worth the price." },
      ],
    },
    {
      id: 2,
      name: "Dual Lat Pulldown / Low Row Machine",
      specialty: "Back",
      bio: "Certified fitness and functional training specialist.",
      img: "https://media.zid.store/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/4b7fa626-c677-48e5-9257-71df6d51933b.jpg",
      price: 699.99,
      description:"A 2-in-1 machine designed for full back development. Supports both lat pulldown and low row exercises with smooth cable resistance.",
      additionalInfo:"Material: Commercial-grade steel • Cable pulley system • Adjustable thigh pads • Dimensions: 160 x 120 x 210 cm",
      reviews: [
        { name: "Sara Ahmed", rating: 5, comment: "Two machines in one, very space-saving!" },
        { name: "Mohamed Ali", rating: 5, comment: "Great for back day. Smooth pulleys!" },
      ],
    },
    {
      id: 3,
      name: "Shoulder Press Machine",
      specialty: "Shoulder",
      bio: "Certified nutrition specialist with 10 years of experience.",
      img: "https://5.imimg.com/data5/EC/MW/MY-12324290/if8112-500x500-500x500.jpg",
      price: 399.99,
      salePrice: 449.99,
      description:"Designed to target all major deltoid muscles. Ensures proper shoulder movement and reduces joint strain during heavy presses.",
      additionalInfo:"Material: Reinforced steel • Seat height adjustable • Resistance plate-based system • Weight capacity: 180 KG",
      reviews: [{ name: "Omar Hassan", rating: 4, comment: "Very solid machine with good shoulder isolation." }],
    },
    {
      id: 4,
      name: "Leg Extension Machine",
      specialty: "Leg",
      bio: "Certified sports rehabilitation and injury treatment trainer.",
      img: "https://fitnessupply.mx/wp-content/uploads/2024/09/IRC-UL-E0016-scaled-1.jpg",
      price: 299.99,
      description:"Perfect for isolating and strengthening quadriceps. Offers smooth movement for safe knee extension exercises.",
      additionalInfo:"Material: Heavy-duty steel • Adjustable seat and leg roller • Weight stack: 70 KG • Suitable for rehab training",
      reviews: [{ name: "Mina George", rating: 5, comment: "Comfortable and perfect for leg day." }],
    },
    {
      id: 5,
      name: "Chest Fly / Rear Delt Machine",
      specialty: "Chest",
      bio: "CrossFit Level 3 certified trainer with 5 years of experience.",
      img: "https://www.fitnessgymyoga.com/wp-content/uploads/1970/01/68910629-4830-46AF-9BD9-1C9D5B28765B.jpeg",
      price: 549.99,
      salePrice: 599.99,
      description:"Dual-function machine allowing both chest fly and rear delt exercises with adjustable arms and ergonomic seating.",
      additionalInfo:"Material: Commercial steel frame • Multi-angle adjustable arms • Weight stack: 90 KG • Two-in-one design",
      reviews: [
        { name: "Ali Khan", rating: 5, comment: "Perfect for chest definition and rear delts." },
        { name: "Youssef Eid", rating: 4, comment: "Smooth and effective machine." },
      ],
    },
    {
      id: 6,
      name: "Back Hammer Machine",
      specialty: "Back",
      bio: "Certified yoga and pilates instructor with 4 years of experience.",
      img: "https://www.gymstore.sa/wp-content/uploads/2021/08/1-13-scaled-1.jpg",
      price: 429.99,
      description:"Hammer strength machine specifically made for powerful back building. Mimics natural pulling movement with plate-loaded resistance.",
      additionalInfo:"Material: Steel • Plate-loaded system • Ergonomic grips • Dimensions: 150 x 140 x 160 cm",
      reviews: [{ name: "Karim Nabil", rating: 5, comment: "One of the best back machines I’ve used." }],
    },
  ];

  const { id } = useParams();
  const initial = equipments.find(eq => eq.id === Number(id)) || equipments[0];

  const [selected, setSelected] = useState(initial);
  const [main, setMain] = useState(initial.img);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const related = equipments.filter(eq => eq.id !== selected.id);

  const handleAddToCart = () => {
    addToCart({ ...selected, quantity: qty });
    toast.success(`${selected.name} added to cart successfully`, {
      duration: 3000,
      style: {
        background: "#1e293b",
        color: "#00e5ff",      
        border: "1px solid #00e5ff",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "bold",
      },
    });
  };

  const handleRelatedClick = (eq) => {
    setSelected(eq);
    setMain(eq.img);
    setQty(1);
    setTab("description");
  };

  return (
    <div className="container-fluid p-4" style={{ background: "#0f172a", color: "#e0e0e0", minHeight: "100vh" }}>
      <Toaster/>
      <style>
        {`
        .btn-cyan { background-color: #00e5ff !important; color: #0f172a !important; font-weight: bold; }
        .btn-cyan:hover { box-shadow: 0 0 10px #00e5ff; }
        .btn-outline-cyan { border-color: #00e5ff !important; color: #00e5ff !important; }
        .btn-outline-cyan:hover { background-color: #00e5ff !important; color: #0f172a !important; }
        .badge-cyan { background-color: #00e5ff !important; color: #0f172a !important; }
        .nav-tabs .nav-link.active { color: #0f172a !important; background-color: #00e5ff !important; }
        .card-bg { background-color: #1e293b; }
        `}
      </style>

      <div className="row align-items-start mb-4">
        <div className="col-12 col-md-6">
          <div className="card p-3 card-bg text-center">
            <img src={main} alt={selected.name} className="img-fluid rounded mb-3" style={{ maxHeight: 480, width: "100%", objectFit: "cover" }} />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card p-3 card-bg">
            <h2 className="text-warning">{selected.name}</h2>
            <span className="badge badge-cyan mb-2">{selected.specialty}</span>
            <p className="text-white">{selected.bio}</p>

            <div className="mb-3">
              <span className="h4 text-warning me-2">${selected.price.toFixed(2)}</span>
              {selected.salePrice && <small className="text-warning">(was ${selected.salePrice.toFixed(2)})</small>}
            </div>

            <div className="mb-3 d-flex align-items-center" style={{ gap: 8 }}>
              <label className="me-2 mb-0" style={{ color: "#00e5ff" }}>Quantity</label>
              <div className="input-group" style={{ width: 140 }}>
                <button className="btn btn-outline-cyan" onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                <input type="number" className="form-control text-center bg-dark text-light" value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value) || 1))} />
                <button className="btn btn-outline-cyan" onClick={() => setQty(q => q + 1)}>+</button>
              </div>
            </div>

            <div className="mb-3 d-flex" style={{ gap: 12 }}>
              <button className="btn btn-cyan btn-lg m-auto" onClick={handleAddToCart}>Add to Cart</button>
            </div>

            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href="#" className={`nav-link text-warning ${tab === "description" ? "active" : ""}`} onClick={e => { e.preventDefault(); setTab("description"); }}>
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link text-warning ${tab === "additional" ? "active" : ""}`} onClick={e => { e.preventDefault(); setTab("additional"); }}>
                  Additional Info
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link text-warning ${tab === "reviews" ? "active" : ""}`} onClick={e => { e.preventDefault(); setTab("reviews"); }}>
                  Reviews ({selected.reviews.length})
                </a>
              </li>
            </ul>

            <div className="tab-content border p-3 card-bg text-light mt-2">
              {tab === "description" && <p>{selected.description}</p>}
              {tab === "additional" && <p>{selected.additionalInfo}</p>}
              {tab === "reviews" && (
                selected.reviews.map((r, i) => (
                  <div key={i} className="mb-3 pb-2 border-bottom border-secondary">
                    <strong>{r.name}</strong>
                    <p className="mt-2">{r.comment}</p>
                    <div className="text-warning">
                      {Array.from({ length: r.rating }).map((_, i) => (<i key={i} className="fas fa-star"></i>))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-cyan mb-3">Related Equipments</h4>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
        {related.map(eq => (
          <div className="col" key={eq.id}>
            <div className="card h-100 card-bg text-light" style={{ cursor: "pointer" }} onClick={() => handleRelatedClick(eq)}>
              <img src={eq.img} className="card-img-top rounded" style={{ height: 160, objectFit: "cover" }} />
              <div className="card-body p-2">
                <div className="small">{eq.name}</div>
                <div className="fw-bold text-cyan">${eq.price.toFixed(2)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
