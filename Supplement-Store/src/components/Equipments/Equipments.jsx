import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Equipments() {
  const [equipments] = useState([
    {
      id: 1,
      name: "Chest press Machine",
      specialty: "Chest",
      bio: "Certified trainer with 8 years of experience in bodybuilding and fitness. Winner of several local and international championships.",
      image:
        "https://media.zid.store/thumbs/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/52a10a1e-065f-490e-a3ad-9ead7cf4e364-thumbnail-1000x1000-70.jpg",
    },
    {
      id: 2,
      name: "Dual Lat Pulldown / Low Row Machine",
      specialty: "Back",
      bio: "Certified fitness and functional training specialist. Expert in weight loss exercises and general fitness improvement.",
      image:
        "https://media.zid.store/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/4b7fa626-c677-48e5-9257-71df6d51933b.jpg",
    },
    {
      id: 3,
      name: "Shoulder Press Machine",
      specialty: "Shoulder",
      bio: "Certified nutrition specialist with 10 years of experience in sports nutrition. Helps athletes improve performance through balanced nutrition.",
      image: "https://5.imimg.com/data5/EC/MW/MY-12324290/if8112-500x500-500x500.jpg",
    },
    {
      id: 4,
      name: "Leg Extension Machine",
      specialty: "Leg",
      bio: "Certified sports rehabilitation and injury treatment trainer. Helps athletes recover and return to sports safely.",
      image:
        "https://fitnessupply.mx/wp-content/uploads/2024/09/IRC-UL-E0016-scaled-1.jpg",
    },
    {
      id: 5,
      name: "Chest Fly / Rear Delt Machine",
      specialty: "Chest",
      bio: "CrossFit Level 3 certified trainer with 5 years of experience. Specialized in high-intensity functional training.",
      image:
        "https://www.fitnessgymyoga.com/wp-content/uploads/1970/01/68910629-4830-46AF-9BD9-1C9D5B28765B.jpeg",
    },
    {
      id: 6,
      name: "Back Hammer Machine",
      specialty: "Back",
      bio: "Certified yoga and pilates instructor with 4 years of experience. Focuses on flexibility, balance, and mental wellness.",
      image: "https://www.gymstore.sa/wp-content/uploads/2021/08/1-13-scaled-1.jpg",
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
  navigate(`/equipments/${id}`);
  };

  const filteredEquipments = activeFilter === "all" ? equipments : equipments.filter((eq) => eq.specialty.toLowerCase() === activeFilter.toLowerCase() );

  return (
    <div className="min-vh-100 py-5" style={{ background: "#0f172a" }}>
      <style>
        {`
        .equip-card {
          background: #1e293b;
          border-radius: 12px;
          transition: 0.3s;
        }
        .equip-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
        }
        .btn-cyan {
          background-color: #00e5ff !important;
          color: #0f172a !important;
          font-weight: bold;
        }
        .btn-cyan-outline {
          border: 1px solid #00e5ff !important;
          color: #00e5ff !important;
        }
        .badge-cyan {
          background-color: #00e5ff;
          color: #0f172a;
          font-weight: bold;
        }
        .title-glow:hover {
          text-shadow: 0 0 10px #00e5ff;
        }
      `}
      </style>

      <div className="container text-light" dir="ltr">
        <div className="text-center mb-5">
          <h1 className="fw-bold title-glow" style={{ color: "#00e5ff" }}> Our Professional Equipments </h1>
          <p className="lead text-secondary"> Check out the latest advanced equipment for all types of exercises. </p>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {["all", "Chest", "Back", "Shoulder", "Leg"].map((filter) => (
            <button key={filter} className={`btn ${ activeFilter === filter ? "btn-cyan" : "btn-cyan-outline"}`} onClick={() => setActiveFilter(filter)} >
              {filter === "all" ? "All Equipments" : filter}
            </button>
          ))}
        </div>
        
        <div className="row g-4">
          {filteredEquipments.map((eq) => (
            <div key={eq.id} className="col-md-6 col-lg-4">
              <div className="card equip-card h-100 shadow-lg border-0">
                <div className="position-relative">
                  <img src={eq.image} className="card-img-top" alt={eq.name} style={{ height: "250px", objectFit: "cover" }}/>
                  <span className="badge badge-cyan position-absolute top-0 start-0 m-2">
                    {eq.specialty}
                  </span>
                </div>
                <div className="card-body d-flex flex-column text-light">
                  <h5 className="fw-bold" style={{ color: "#00e5ff" }}>
                    {eq.name}
                  </h5>
                  <p className="flex-grow-1">{eq.bio}</p>
                  <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-cyan" onClick={() => handleViewDetails(eq.id)}> View Details </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredEquipments.length === 0 && (
            <div className="text-center py-5">
              <h4 style={{ color: "#00e5ff" }}>No equipments found</h4>
              <p className="text-secondary">Try another filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
