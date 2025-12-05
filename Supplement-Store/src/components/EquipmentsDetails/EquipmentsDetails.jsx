import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import toast, { Toaster } from "react-hot-toast";
import styles from './EquipmentsDetails.module.css';

export default function EquipmentPage() {
  const { addToCart } = useContext(cartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const equipments = [
    {
      id: 1,
      name: "Chest Press Machine",
      specialty: "Chest",
      bio: "Certified trainer with 8 years of experience in bodybuilding and fitness.",
      img: "https://media.zid.store/thumbs/36c4d2e2-f3e9-4c03-8ca4-403001fc251f/52a10a1e-065f-490e-a3ad-9ead7cf4e364-thumbnail-1000x1000-70.jpg",
      price: 499.99,
      salePrice: 599.99,
      description: "A premium chest press machine designed to develop upper-body strength by targeting the chest, shoulders, and triceps. Offers smooth resistance and ergonomic seating for proper posture.",
      additionalInfo: "Material: Steel • Weight Stack: 80 KG • Seat: Adjustable • Dimensions: 140 x 120 x 150 cm • Warranty: 2 years",
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
      description: "A 2-in-1 machine designed for full back development. Supports both lat pulldown and low row exercises with smooth cable resistance.",
      additionalInfo: "Material: Commercial-grade steel • Cable pulley system • Adjustable thigh pads • Dimensions: 160 x 120 x 210 cm",
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
      description: "Designed to target all major deltoid muscles. Ensures proper shoulder movement and reduces joint strain during heavy presses.",
      additionalInfo: "Material: Reinforced steel • Seat height adjustable • Resistance plate-based system • Weight capacity: 180 KG",
      reviews: [{ name: "Omar Hassan", rating: 4, comment: "Very solid machine with good shoulder isolation." }],
    },
    {
      id: 4,
      name: "Leg Extension Machine",
      specialty: "Leg",
      bio: "Certified sports rehabilitation and injury treatment trainer.",
      img: "https://fitnessupply.mx/wp-content/uploads/2024/09/IRC-UL-E0016-scaled-1.jpg",
      price: 299.99,
      description: "Perfect for isolating and strengthening quadriceps. Offers smooth movement for safe knee extension exercises.",
      additionalInfo: "Material: Heavy-duty steel • Adjustable seat and leg roller • Weight stack: 70 KG • Suitable for rehab training",
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
      description: "Dual-function machine allowing both chest fly and rear delt exercises with adjustable arms and ergonomic seating.",
      additionalInfo: "Material: Commercial steel frame • Multi-angle adjustable arms • Weight stack: 90 KG • Two-in-one design",
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
      description: "Hammer strength machine specifically made for powerful back building. Mimics natural pulling movement with plate-loaded resistance.",
      additionalInfo: "Material: Steel • Plate-loaded system • Ergonomic grips • Dimensions: 150 x 140 x 160 cm",
      reviews: [{ name: "Karim Nabil", rating: 5, comment: "One of the best back machines I've used." }],
    },
  ];

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
  setQty(1);
};

  const handleRelatedClick = (eq) => {
    setSelected(eq);
    setMain(eq.img);
    setQty(1);
    setTab("description");
    navigate(`/equipments/${eq.id}`);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className={styles.starRating}>
        {[...Array(5)].map((_, index) => (
          <i 
            key={index} 
            className={`fas fa-star ${index < rating ? styles.star : 'text-secondary'}`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.equipmentContainer}>
      <div className={styles.glowEffect}></div>

      <Toaster toastOptions={{
          duration: 3000,
          style: {
            background: "#1e293b",
            color: "#00e5ff",      
            border: "1px solid #00e5ff",
            padding: "16px",
            borderRadius: "12px",
            fontWeight: "bold",
          },}}/>

      <div className="container">
        <button className={styles.backButton} onClick={() => {navigate("/equipments")}}>
          <i className="fas fa-arrow-left"></i>
          Back to Equipments
        </button>

        <div className={styles.equipmentGrid}>
          <div className={styles.imageSection}>
            <img src={main} alt={selected.name} className={styles.mainImage}/>
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.equipmentTitle}>{selected.name}</h1>
            <div className={styles.specialtyBadge}>{selected.specialty}</div>
            <p className={styles.equipmentBio}>{selected.bio}</p>

            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>${selected.price.toFixed(2)}</span>
              {selected.salePrice && (
                <>
                  <span className={styles.salePrice}>${selected.salePrice.toFixed(2)}</span>
                </>
              )}
            </div>

            <div className={styles.quantitySection}>
              <label className={styles.quantityLabel}>Quantity</label>
              <div className={styles.quantityControls}>
                <button className={styles.quantityButton} onClick={() => setQty(q => Math.max(1, q - 1))}>
                  <i className="fas fa-minus"></i>
                </button>
                <input type="number" className={styles.quantityInput} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value) || 1))} min="1"/>
                <button className={styles.quantityButton} onClick={() => setQty(q => q + 1)}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.cartButton} onClick={handleAddToCart}>
                <i className="fas fa-cart-plus"></i>
                Add to Cart
              </button>
            </div>

            <div className={styles.tabsSection}>
              <div className={styles.tabsNav}>
                <button className={`${styles.tabButton} ${tab === "description" ? styles.active : ""}`} onClick={() => setTab("description")}>
                  Description
                </button>
                <button className={`${styles.tabButton} ${tab === "additional" ? styles.active : ""}`} onClick={() => setTab("additional")}>
                  Additional Info
                </button>
                <button className={`${styles.tabButton} ${tab === "reviews" ? styles.active : ""}`} onClick={() => setTab("reviews")}>
                  Reviews ({selected.reviews.length})
                </button>
              </div>

              <div className={styles.tabContent}>
                {tab === "description" && (
                  <p className={styles.tabText}>{selected.description}</p>
                )}
                {tab === "additional" && (
                  <p className={styles.tabText}>{selected.additionalInfo}</p>
                )}
                {tab === "reviews" && (
                  <div className={styles.reviewsList}>
                    {selected.reviews.length ? (
                      selected.reviews.map((r, i) => (
                        <div key={i} className={styles.reviewItem}>
                          <div className={styles.reviewName}>{r.name}</div>
                          <StarRating rating={r.rating} />
                          <p className={styles.reviewComment}>{r.comment}</p>
                        </div>
                      ))
                    ) : (
                      <div className={styles.noReviews}>
                        <i className="fas fa-comment-slash fa-2x mb-3"></i>
                        <p>No reviews yet. Be the first to review this equipment!</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Related Equipments</h2>
            <div className={styles.relatedGrid}>
              {related.slice(0, 4).map(eq => (
                <div key={eq.id} className={styles.relatedCard} onClick={() => handleRelatedClick(eq)}>
                  <img src={eq.img} alt={eq.name} className={styles.relatedImage}/>
                  <div className={styles.relatedInfo}>
                    <h3 className={styles.relatedName}>{eq.name}</h3>
                    <div className={styles.relatedPrice}>${eq.price.toFixed(2)}</div>
                    <div className={styles.relatedSpecialty}>{eq.specialty}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}