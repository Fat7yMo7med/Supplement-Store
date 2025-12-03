import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import toast, { Toaster } from "react-hot-toast";
import { purchaseContext } from "../../context/purchasesContext";

export default function CheckoutPage() {
    const { cart, clearCart } = useContext(cartContext);
    const navigate = useNavigate();
    const { addPurchase } = useContext(purchaseContext);

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: "",
    });

    const [cardType, setCardType] = useState(null);

    const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const toastStyle = {
        background: "#1e293b",
        color: "#00e5ff",
        border: "1px solid #00e5ff",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "bold",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "cardNumber") {
            const formatted = value.replace(/\D/g, "").substring(0, 16).replace(/(.{4})/g, "$1 ").trim();
            setForm({ ...form, [name]: formatted });

            const numberValidation = cardValidator.number(formatted.replace(/\s/g, ""));
            if (numberValidation.card) setCardType(numberValidation.card.type);
            else setCardType(null);
        }
        else if (name === "expiry") {
            let formatted = value.replace(/\D/g, "").substring(0, 4);
            if (formatted.length > 2) formatted = formatted.substring(0, 2) + "/" + formatted.substring(2, 4);
            setForm({ ...form, [name]: formatted });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handlePlaceOrder = () => {
        if (cart.length === 0) {
            toast.error("Your cart is empty!", { style: toastStyle });
            return;
        }

        const requiredFields = [
            "name", "email", "address", "city", "postalCode", "country",
            "cardNumber", "cardName", "expiry", "cvv"
        ];

        for (let field of requiredFields) {
            if (!form[field]) {
                toast.error("Please fill all the fields!", { style: toastStyle });
                return;
            }
        }

        toast.success("Order placed successfully!", { style: toastStyle });
        clearCart();
        const previousOrders = JSON.parse(localStorage.getItem("purchases")) || [];

        const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        items: cart,
        total: grandTotal,
        };
        localStorage.setItem("purchases", JSON.stringify([...previousOrders, newOrder]));
        
        addPurchase(newOrder);

        setForm({
            name: "", email: "", address: "", city: "", postalCode: "", country: "",
            cardNumber: "", cardName: "", expiry: "", cvv: "",
        });
        setCardType(null);

        setTimeout(() => navigate("/mypurchases"), 2000);
    };

    const getCardIcon = () => {
        switch (cardType) {
            case "visa": return null;
            case "mastercard": return null;
            case "american-express": return null; 
            default: return null;
        }
    };

    return (
        <div className="container-fluid p-4" style={{ background: "#0f172a", color: "#e0e0e0", minHeight: "100vh" }}>
            <Toaster />
            <style>
                {`
                .btn-cyan { background-color: #00e5ff !important; color: #0f172a !important; font-weight: bold; border: none !important; }
                .btn-cyan:hover { box-shadow: 0 0 10px #00e5ff; }
                .form-control { background-color: #1e293b !important; color: #e0e0e0 !important; border: 1px solid #334155 !important; }
                .card-bg { background-color: #1e293b; color: #e0e0e0; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
                .card-icon { height: 30px; margin-left: 8px; }
            `}
            </style>

            <h2 className="text-warning mb-4">Checkout</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card-bg">
                        <h4 className="mb-3">Your Cart</h4>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between mb-2 border-bottom pb-2">
                                    <div><strong>{item.name}</strong> x {item.quantity}</div>
                                    <div>${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            ))
                        )}
                        <div className="d-flex justify-content-between mt-3 border-top pt-2">
                            <strong>Total:</strong> <strong>${grandTotal.toFixed(2)}</strong>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-bg">
                        <h4 className="mb-3">Billing Information</h4>
                        {["name","email","address","city","postalCode","country"].map(field => (
                            <div key={field} className="mb-3">
                                <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1).replace("Code"," Code")}</label>
                                <input type="text" name={field} value={form[field]} onChange={handleChange} className="form-control"/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-bg">
                        <h4 className="mb-3">Payment Details</h4>
                        <div className="mb-3 position-relative">
                            <label className="form-label">Card Number</label>
                            <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} className="form-control" placeholder="1234 5678 9012 3456"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name on Card</label>
                            <input type="text" name="cardName" value={form.cardName} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label className="form-label">Expiry</label>
                                <input type="text" name="expiry" value={form.expiry} onChange={handleChange} className="form-control" placeholder="MM/YY"/>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">CVV</label>
                                <input type="text" name="cvv" value={form.cvv} onChange={handleChange} className="form-control" placeholder="123"/>
                            </div>
                        </div>
                        <button className="btn btn-cyan w-100 mt-3" onClick={handlePlaceOrder}>Place Order (${grandTotal.toFixed(2)})</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
