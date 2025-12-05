import { useEffect, useState } from "react";

export default function PurchasesPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("purchases")) || [];
        setOrders(savedOrders.reverse()); // latest first
    }, []);

    return (
        <div style={{ background: "#0F172A" }}>
        <style>
            {`
            .cart-page { min-height: 100vh; padding-top: 40px; }
            .btn-cyan { background-color: #00e5ff !important; color: #0f172a !important; font-weight: bold; border: none !important; }
            .text-cyan { color: #00e5ff !important; }
            .cart-card {
            background: #1e293b !important;
            color: white !important;
            border-radius: 12px !important;
            padding: 20px;
            border: none !important;
            margin-bottom: 20px;
            }
            .cart-header {
            background: #1e293b !important;
            color: #00e5ff !important;
            border-bottom: 1px solid #0f172a !important;
            font-weight: bold;
            }
        `}
        </style>

        <div className="cart-page">
            <section className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-10">

                <h3 className="text-cyan mb-4 text-center">My Purchases</h3>

                {orders.length === 0 ? (
                    <div className="cart-card text-center">
                    <h5 className="text-cyan">No purchases yet.</h5>
                    </div>
                ) : (
                    orders.map(order => (
                    <div key={order.id} className="cart-card">
                        <div className="cart-header mb-3 p-2 rounded">
                        <strong>Order Date:</strong> {order.date}  
                        <span className="float-end">
                            <strong>Total:</strong> ${order.total.toFixed(2)}
                        </span>
                        </div>

                        {order.items.map(item => (
                        <div key={item.id} className="row align-items-center mb-3">
                            <div className="col-lg-3">
                            <img src={item.img} alt={item.name} className="img-fluid rounded" />
                            </div>

                            <div className="col-lg-5">
                            <p className="text-cyan fw-bold">{item.name}</p>
                            <p className="text-secondary">Price: ${item.price.toFixed(2)}</p>
                            </div>

                            <div className="col-lg-4 text-end">
                            <p>Qty: <strong>{item.quantity}</strong></p>
                            <p><strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
                            </div>
                        </div>
                        ))}
                    </div>
                    ))
                )}

                </div>
            </div>
            </section>
        </div>
        </div>
    );
}
