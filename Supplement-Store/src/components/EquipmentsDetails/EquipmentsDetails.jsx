import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EquipmentPage() {
  const { id } = useParams();
  const equipments = [
    {
      id: 1,
      name: "Chest Press Machine",
      specialty: "Chest",
      bio: "Certified trainer with 8 years of experience in bodybuilding and fitness.",
      image: "https://media.zid.store/thumbs/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/52a10a1e-065f-490e-a3ad-9ead7cf4e364-thumbnail-1000x1000-70.jpg",
      price: 499.99,
      salePrice: 599.99,
    },
    {
      id: 2,
      name: "Dual Lat Pulldown / Low Row Machine",
      specialty: "Back",
      bio: "Certified fitness and functional training specialist.",
      image: "https://media.zid.store/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/4b7fa626-c677-48e5-9257-71df6d51933b.jpg",
      price: 699.99,
    },
    {
      id: 3,
      name: "Shoulder Press Machine",
      specialty: "Shoulder",
      bio: "Certified nutrition specialist with 10 years of experience.",
      image: "https://5.imimg.com/data5/EC/MW/MY-12324290/if8112-500x500-500x500.jpg",
      price: 399.99,
      salePrice: 449.99,
    },
    {
      id: 4,
      name: "Leg Extension Machine",
      specialty: "Leg",
      bio: "Certified sports rehabilitation and injury treatment trainer.",
      image: "https://fitnessupply.mx/wp-content/uploads/2024/09/IRC-UL-E0016-scaled-1.jpg",
      price: 299.99,
    },
    {
      id: 5,
      name: "Chest Fly / Rear Delt Machine",
      specialty: "Chest",
      bio: "CrossFit Level 3 certified trainer with 5 years of experience.",
      image: "https://www.fitnessgymyoga.com/wp-content/uploads/1970/01/68910629-4830-46AF-9BD9-1C9D5B28765B.jpeg",
      price: 549.99,
      salePrice: 599.99,
    },
    {
      id: 6,
      name: "Back Hammer Machine",
      specialty: "Back",
      bio: "Certified yoga and pilates instructor with 4 years of experience.",
      image: "https://www.gymstore.sa/wp-content/uploads/2021/08/1-13-scaled-1.jpg",
      price: 429.99,
    },
  ];

  const selected = equipments.find(eq => eq.id === Number(id)) || equipments[0];
  const [main, setMain] = useState(selected.image);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const related = equipments.filter(eq => eq.id !== selected.id);

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
          background-color: #1e293b;
          color: #ffffff;
        }
        .thumb.active {
          border: 2px solid #00e5ff;
        }
        .card-bg {
          background-color: #1e293b;
        }
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
              <span className="h4 text-warning me-2">${selected.price}</span>
              {selected.salePrice && <small className="text-warning">(was ${selected.salePrice})</small>}
            </div>

            <div className="mb-3 d-flex align-items-center" style={{ gap: 8 }}>
              <label className="me-2 mb-0" style={{color:"#00e5ff"}} >Quantity</label>
              <div className="input-group" style={{ width: 140 }}>
                <button className="btn btn-outline-cyan" onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                <input type="number" className="form-control text-center form-control-cyan bg-dark text-light" value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value) || 1))}/>
                <button className="btn btn-outline-cyan" onClick={() => setQty(q => q + 1)}>+</button>
              </div>
            </div>

            <div className="mb-3 d-flex" style={{ gap: 12 }}>
              <button className="btn btn-cyan btn-lg m-auto">Add to Cart</button>
            </div>

            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href="#" className={`nav-link ${tab==="description"?"active":""}`} style={{color:"#f9d90aff"}} onClick={e=>{e.preventDefault(); setTab("description")}}>Description</a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link ${tab==="additional"?"active":""}`} style={{color:"#f9d90aff"}} onClick={e=>{e.preventDefault(); setTab("additional")}}>Additional Info</a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link ${tab==="reviews"?"active":""}`} style={{color:"#f9d90aff"}} onClick={e=>{e.preventDefault(); setTab("reviews")}}>Reviews (245)</a>
              </li>
            </ul>

            <div className="tab-content border p-3 card-bg text-light mt-2">
              {tab==="description" && (
                <div>
                  <p>{selected.bio}</p>
                  <ul>
                    <li>High quality</li>
                    <li>Durable</li>
                    <li>Easy to use</li>
                  </ul>
                </div>
              )}
              {tab==="additional" && (
                <div>
                  <p>Weight: 50kg</p>
                  <p>Dimensions: 150x60x120cm</p>
                </div>
              )}
              {tab==="reviews" && (
                <div>
                  <strong>John Doe</strong>
                  <p className="mt-2">Excellent equipment, very sturdy.</p>
                  <div className="text-warning">
                    <i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star-half-alt"/>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-cyan mb-3">Related Equipments</h4>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
        {related.map(eq=>(
          <div className="col" key={eq.id}>
            <div className="card h-100 card-bg text-light" style={{cursor:"pointer"}} onClick={()=>window.location.href=`/equipments/${eq.id}`}>
              <img src={eq.image} className="card-img-top rounded" style={{height:160, objectFit:"cover"}}/>
              <div className="card-body p-2">
                <div className="small">{eq.name}</div>
                <div className="fw-bold text-cyan">${eq.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
