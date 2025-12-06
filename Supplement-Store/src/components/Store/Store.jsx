import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Images/product_16.jpg";
import img2 from "../../assets/Images/product_17.jpg";
import img3 from "../../assets/Images/product_19.jpg";
import img4 from "../../assets/Images/product_20.jpg";
import img5 from "../../assets/Images/BCAA Powder.jpg";
import img6 from "../../assets/Images/Pre-Workout.jpg";
import img7 from "../../assets/Images/Glutamine.png";
import img8 from "../../assets/Images/Omega 3 Capsules.jpg";
import img9 from "../../assets/Images/Vitamin D3.jpg";
import img10 from "../../assets/Images/Multivitamins.jpg";
import img11 from "../../assets/Images/Weight Gainer.jpg";
import img12 from "../../assets/Images/Electrolyte Drink.jpg";
import styles from './store.module.css';

export default function Store() {
    const navigate = useNavigate();

    const products = [
        { id: 1, img: img1, name: "Whey Sport", price: 49.99, oldPrice: 69.99 },
        { id: 2, img: img2, name: "Whey Protein", price: 39.99, oldPrice: 59.99 },
        { id: 3, img: img3, name: "Protein Bar", price: 19.99, oldPrice: 29.99 },
        { id: 4, img: img4, name: "Creatine", price: 29.99, oldPrice: 39.99 },
        { id: 5, img: img5, name: "BCAA Powder", price: 34.99, oldPrice: 49.99 },
        { id: 6, img: img6, name: "Pre-Workout", price: 44.99, oldPrice: 59.99 },
        { id: 7, img: img7, name: "Glutamine", price: 24.99, oldPrice: 34.99 },
        { id: 8, img: img8, name: "Omega 3 Capsules", price: 29.99, oldPrice: 39.99 },
        { id: 9, img: img9, name: "Vitamin D3", price: 14.99, oldPrice: 24.99 },
        { id: 10, img: img10, name: "Multivitamins", price: 19.99, oldPrice: 29.99 },
        { id: 11, img: img11, name: "Weight Gainer", price: 54.99, oldPrice: 74.99 },
        { id: 12, img: img12, name: "Electrolyte Drink", price: 9.99, oldPrice: 14.99 },
    ];

    return (
        <div className={styles.storeContainer}>
            <div className={styles.glowEffect}></div>

            <div className="container">
                <div className={styles.header}>
                    <h1 className={styles.title}>Welcome to our Supplements Store</h1>
                    <p className={styles.subtitle}>Premium supplements for peak performance</p>
                </div>

                <div className={styles.productsGrid}>
                    {products.length === 0 ? (
                        <div className={styles.emptyState}>
                            <i className={`fas fa-box-open ${styles.emptyIcon}`}></i>
                            <h2 className={styles.emptyTitle}>No Products Available</h2>
                            <p className={styles.emptyText}>
                                We're currently updating our inventory. Please check back soon!
                            </p>
                        </div>
                    ) : (
                        products.map((product) => (
                            <div key={product.id} className={styles.productCard}>

                                <div className={styles.productImageContainer}>
                                    <img src={product.img} alt={product.name} className={styles.productImage}/>
                                </div>

                                <div className={styles.productInfo}>
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    
                                    <div className={styles.priceContainer}>
                                        <span className={styles.currentPrice}>
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <span className={styles.oldPrice}>
                                            ${product.oldPrice.toFixed(2)}
                                        </span>
                                    </div>

                                    <button className={styles.detailsButton} onClick={() => navigate(`/product/${product.id}`, { 
                                            state: { product: product } })}>
                                        <i className="fas fa-cart-plus"></i>
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