import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './equipments.module.css';

export default function Equipments() {
  const [equipments] = useState([
    {
      id: 1,
      name: "Chest press Machine",
      specialty: "Chest",
      bio: "Certified trainer with 8 years of experience in bodybuilding and fitness. Winner of several local and international championships.",
      image: "https://media.zid.store/thumbs/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/52a10a1e-065f-490e-a3ad-9ead7cf4e364-thumbnail-1000x1000-70.jpg",
    },
    {
      id: 2,
      name: "Dual Lat Pulldown / Low Row Machine",
      specialty: "Back",
      bio: "Certified fitness and functional training specialist. Expert in weight loss exercises and general fitness improvement.",
      image: "https://media.zid.store/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/4b7fa626-c677-48e5-9257-71df6d51933b.jpg",
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
      image: "https://fitnessupply.mx/wp-content/uploads/2024/09/IRC-UL-E0016-scaled-1.jpg",
    },
    {
      id: 5,
      name: "Chest Fly / Rear Delt Machine",
      specialty: "Chest",
      bio: "CrossFit Level 3 certified trainer with 5 years of experience. Specialized in high-intensity functional training.",
      image: "https://www.fitnessgymyoga.com/wp-content/uploads/1970/01/68910629-4830-46AF-9BD9-1C9D5B28765B.jpeg",
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

  const filteredEquipments = activeFilter === "all" 
    ? equipments 
    : equipments.filter((eq) => eq.specialty.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className={styles.equipmentsContainer}>
      <div className={styles.glowEffect}></div>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Our Professional Equipments</h1>
          <p className={styles.subtitle}>
            Check out the latest advanced equipment for all types of exercises
          </p>
        </div>

        <div className={styles.filterContainer}>
          {["all", "Chest", "Back", "Shoulder", "Leg"].map((filter) => (
            <button key={filter} className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ""}`} onClick={() => setActiveFilter(filter)}>
              {filter === "all" ? "All Equipments" : filter}
            </button>
          ))}
        </div>

        <div className={styles.equipmentsGrid}>
          {filteredEquipments.length === 0 ? (
            <div className={styles.emptyState}>
              <i className={`fas fa-dumbbell ${styles.emptyIcon}`}></i>
              <h2 className={styles.emptyTitle}>No Equipments Found</h2>
              <p className={styles.emptyText}>
                No equipment found for the selected category. Try another filter to see available equipment.
              </p>
              <button className={styles.resetButton} onClick={() => setActiveFilter("all")}>
                <i className="fas fa-redo"></i>
                Show All Equipments
              </button>
            </div>
          ) : (
            filteredEquipments.map((eq) => (
              <div key={eq.id} className={styles.equipmentCard}>
                <div className={styles.imageContainer}>
                  <img src={eq.image} alt={eq.name}  className={styles.equipmentImage}/>
                  <div className={styles.specialtyBadge}>
                    {eq.specialty}
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.equipmentName}>{eq.name}</h3>
                  <p className={styles.equipmentBio}>{eq.bio}</p>
                  <button className={styles.viewButton} onClick={() => handleViewDetails(eq.id)}>
                    <i className="fas fa-eye"></i>
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}