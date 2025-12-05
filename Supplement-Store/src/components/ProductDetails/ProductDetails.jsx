import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import toast, { Toaster } from "react-hot-toast";
import img1 from "../../assets/images/product_16.jpg";
import img2 from "../../assets/images/product_17.jpg";
import img3 from "../../assets/images/product_19.jpg";
import img4 from "../../assets/images/product_20.jpg";
import styles from './ProductDetails.module.css';

export default function ProductPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useContext(cartContext);

  const { product } = location.state || {};

  const products = [
    {
      id: 1,
      img: img1,
      name: "Whey Sport",
      price: 49.99,
      oldPrice: 69.99,
      description: "High-quality whey protein for muscle recovery and growth. This premium supplement is designed to support athletes and fitness enthusiasts in achieving their performance goals.",
      additionalInfo: "Net weight: 2 lb (908 g). Serving size: 1 scoop (30 g). Contains 24g protein per serving. Mix with water or milk. Best consumed after workouts.",
      reviews: [
        { name: "Jane Doe", rating: 5, comment: "Excellent taste and mixes perfectly with no lumps!" },
        { name: "John Smith", rating: 4, comment: "Good protein, helps with recovery after intense workouts." },
      ],
    },
    {
      id: 2,
      img: img2,
      name: "Whey Protein",
      price: 39.99,
      oldPrice: 59.99,
      description: "Pure whey protein to support daily nutrition and fitness goals. Ideal for muscle building and recovery.",
      additionalInfo: "Net weight: 1.5 lb (680 g). Serving size: 1 scoop (28 g).",
      reviews: [
        { name: "Ali Hassan", rating: 5, comment: "Very effective protein powder. Great results!" },
      ],
    },
    {
      id: 3,
      img: img3,
      name: "Protein Bar",
      price: 19.99,
      oldPrice: 29.99,
      description: "Delicious protein bars packed with essential nutrients. Perfect for on-the-go nutrition.",
      additionalInfo: "Each bar contains 20g protein and 5g fiber.",
      reviews: [
        { name: "Sara Ahmed", rating: 4, comment: "Tasty and convenient snack for busy days." },
      ],
    },
    {
      id: 4,
      img: img4,
      name: "Creatine",
      price: 29.99,
      oldPrice: 39.99,
      description: "Enhances strength and power for high-intensity training. Scientifically proven formula.",
      additionalInfo: "Net weight: 300g. Take 5g per day mixed with water or juice.",
      reviews: [
        { name: "Mohamed Ali", rating: 5, comment: "Gives great strength boost! Highly recommended." },
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

  const handleAddToCart = () => {
    addToCart({ ...selected, quantity: qty });
    setQty(1);
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
    <div className={styles.productContainer}>
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
        <button className={styles.backButton} onClick={() => navigate("/store")}>
          <i className="fas fa-arrow-left"></i>
          Back to Store
        </button>

        <div className={styles.productGrid}>
          <div className={styles.imageSection}>
            <img src={main} alt={selected.name} className={styles.mainImage}/>
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.productTitle}>{selected.name}</h1>
            <div className={styles.stockBadge}>In Stock</div>

            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>${selected.price.toFixed(2)}</span>
              {selected.oldPrice && (
                <>
                  <span className={styles.oldPrice}>${selected.oldPrice.toFixed(2)}</span>
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
                <button className={styles.quantityButton}onClick={() => setQty(q => q + 1)}>
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
                  Reviews ({selected.reviews?.length || 0})
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
                    {selected.reviews?.length ? (
                      selected.reviews.map((rev, idx) => (
                        <div key={idx} className={styles.reviewItem}>
                          <div className={styles.reviewName}>{rev.name}</div>
                          <StarRating rating={rev.rating} />
                          <p className={styles.reviewComment}>{rev.comment}</p>
                        </div>
                      ))
                    ) : (
                      <div className={styles.noReviews}>
                        <i className="fas fa-comment-slash fa-2x mb-3"></i>
                        <p>No reviews yet. Be the first to review this product!</p>
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
            <h2 className={styles.relatedTitle}>Related Products</h2>
            <div className={styles.relatedGrid}>
              {related.slice(0, 4).map(p => (
                <div key={p.id} className={styles.relatedCard} onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}>
                  <img src={p.img} alt={p.name} className={styles.relatedImage}/>
                  <div className={styles.relatedInfo}>
                    <h3 className={styles.relatedName}>{p.name}</h3>
                    <div className={styles.relatedPrice}>${p.price.toFixed(2)}</div>
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