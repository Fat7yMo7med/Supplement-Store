import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from '../MyPurchases/MyPurchases.module.css';

export default function PurchasesPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("purchases")) || [];
        setOrders(savedOrders.reverse());
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className={styles.purchasesContainer}>
            <div className={styles.glowEffect}></div>
            <div className="container">
                <div className={styles.header}>
                    <h1 className={styles.title}>My Purchases</h1>
                    <p className={styles.subtitle}>View your order history and details</p>
                </div>
                {orders.length === 0 ? (
                    <div className={styles.emptyState}>
                        <i className={`fas fa-shopping-bag ${styles.emptyIcon}`}></i>
                        <h2 className={styles.emptyTitle}>No purchases yet</h2>
                        <p className={styles.emptyText}>
                            You haven't made any purchases yet. Start shopping to see your orders here!
                        </p>
                        <Link to="/" className={styles.shopButton}>
                            <i className="fas fa-store"></i>
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    orders.map(order => (
                        <div key={order.id} className={styles.orderCard}>
                            <div className={styles.orderHeader}>
                                <div className={styles.orderInfo}>
                                    <div className={styles.orderDate}>
                                        <i className="fas fa-calendar-alt"></i>
                                        {formatDate(order.date)}
                                    </div>
                                </div>
                                <div className={styles.orderTotal}>
                                    ${order.total.toFixed(2)}
                                </div>
                            </div>

                            <div className={styles.orderBody}>
                                <h4 className={styles.shippingTitle}>
                                    <i className="fas fa-box"></i>
                                    Order Items
                                </h4>
                                
                                <div className={styles.orderItems}>
                                    {order.items.map(item => (
                                        <div key={item.id} className={styles.orderItem}>
                                            <img src={item.img} alt={item.name} className={styles.itemImage}/>
                                            <div className={styles.itemDetails}>
                                                <div className={styles.itemName}>{item.name}</div>
                                                <div className={styles.itemPrice}>
                                                    Price: ${item.price.toFixed(2)} each
                                                </div>
                                                <div className={styles.itemQuantity}>
                                                    Quantity: {item.quantity}
                                                </div>
                                            </div>
                                            <div className={styles.itemTotal}>
                                                <div className={styles.itemTotalAmount}>
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                                <div className={styles.itemTotalLabel}>
                                                    Item Total
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {order.shippingAddress && (
                                    <div className={styles.shippingInfo}>
                                        <h4 className={styles.shippingTitle}>
                                            <i className="fas fa-truck"></i>
                                            Shipping Information
                                        </h4>
                                        <div className={styles.shippingDetails}>
                                            <div className={styles.shippingField}>
                                                <strong>Name:</strong> {order.shippingAddress.name}
                                            </div>
                                            <div className={styles.shippingField}>
                                                <strong>Address:</strong> {order.shippingAddress.address}
                                            </div>
                                            <div className={styles.shippingField}>
                                                <strong>City:</strong> {order.shippingAddress.city}
                                            </div>
                                            <div className={styles.shippingField}>
                                                <strong>Postal Code:</strong> {order.shippingAddress.postalCode}
                                            </div>
                                            <div className={styles.shippingField}>
                                                <strong>Country:</strong> {order.shippingAddress.country}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}