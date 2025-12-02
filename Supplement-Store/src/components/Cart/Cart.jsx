import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import toast, { Toaster } from "react-hot-toast";

export default function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useContext(cartContext);

  const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.error(`${name} removed from cart`,{
      style: {
        background: "#1e293b",
        color: "#00e5ff",      
        border: "1px solid #00e5ff",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "bold",
      }});
  };

  const handleDecrease = (id, name) => {
    decreaseQuantity(id);
    toast(`${name} quantity decreased`,{
      style: {
        background: "#1e293b",
        color: "#00e5ff",      
        border: "1px solid #00e5ff",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "bold",
      }, icon: "➖" });
  };

  const handleIncrease = (item) => {
    addToCart({ ...item, quantity: 1 });
    toast.success(`${item.name} quantity increased`,{
      style: {
        background: "#1e293b",
        color: "#00e5ff",      
        border: "1px solid #00e5ff",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "bold",
      }});
  };

  const handleClear = () => {
    clearCart();
    toast.error(`Cart cleared!`,{
      style: {
        background: "#1e293b",
        color: "#00e5ff",      
        border: "1px solid #00e5ff",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "bold",
      }});
  };

  return (
    <div className="bg-dark">
      <Toaster/>
      <style>
        {`
        .cart-page {
          min-height: 100vh;
          padding-top: 40px;
          }
        .btn-cyan {
          background-color: #00e5ff !important;
          color: #0f172a !important; font-weight: bold;
          border: none !important;
          }
        .btn-outline-cyan {
          border-color: #00e5ff !important;
          color: #00e5ff !important;
          }
        .btn-cyan:hover, .btn-outline-cyan:hover {
          background-color: #00c4d6 !important;
          color: #0f172a !important;
          }
        .text-cyan {
          color: #00e5ff !important;
          }
        .badge-cyan {
          background-color: #00e5ff;
          color: #0f172a; padding: 5px 10px;
          border-radius: 8px;
          font-weight: bold;
          }
        .card-section, .cart-card {
          background: #1e293b !important;
          color: white !important;
          border-radius: 12px !important;
          padding: 20px;
          border: none !important;
          }
        .cart-header {
          background: #1e293b !important;
          color: #00e5ff !important;
          border-bottom: 1px solid #0f172a !important;
          font-weight: bold;
          }
        .cart-list-item {
          background: #1e293b !important;
          color: white !important;
          border-color: #334155 !important;
          }
        input[type="number"] {
          background-color: #0f172a !important;
          color: white !important;
          border: 1px solid #334155 !important;
          }
      `}
      </style>

      <div className="cart-page">
        <section className="container py-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">

              {cart.length === 0 ? (
                <div className="card cart-card mb-4 shadow">
                  <div className="card-body text-center">
                    <h5 className="text-cyan">Your cart is empty.</h5>
                  </div>
                </div>
              ) : (
                <>
                  {/* CART ITEMS */}
                  <div className="card cart-card mb-4 shadow">
                    <div className="card-header cart-header">
                      <h5 className="mb-0">Cart - {cart.length} {cart.length > 1 ? "items" : "item"}</h5>
                    </div>
                    <div className="card-body">

                      {cart.map(item => (
                        <div key={item.id} className="row mb-4 align-items-center">

                          {/* IMAGE */}
                          <div className="col-lg-3">
                            <img src={item.img} alt={item.name} className="img-fluid rounded" />
                          </div>

                          {/* NAME + REMOVE */}
                          <div className="col-lg-5">
                            <p className="text-cyan fw-bold">{item.name}</p>
                            <p className="text-secondary">Price: ${item.price.toFixed(2)}</p>
                            <button
                              className="btn btn-outline-cyan btn-sm me-2"
                              onClick={() => handleRemove(item.id, item.name)}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>

                          {/* QUANTITY + TOTAL */}
                          <div className="col-lg-4">
                            <div className="d-flex mb-3" style={{ maxWidth: "200px" }}>
                              <button
                                className="btn btn-cyan px-3 me-2"
                                onClick={() => handleDecrease(item.id, item.name)}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                className="form-control text-center"
                                readOnly
                              />

                              <button
                                className="btn btn-cyan px-3 ms-2"
                                onClick={() => handleIncrease(item)}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <p><strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* TOTAL SUMMARY */}
                  <div className="card cart-card shadow">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item cart-list-item d-flex justify-content-between">
                          Products <span>${grandTotal.toFixed(2)}</span>
                        </li>
                        <li className="list-group-item cart-list-item d-flex justify-content-between">
                          Shipping <span>Free</span>
                        </li>
                        <li className="list-group-item cart-list-item d-flex justify-content-between border-0">
                          <div>
                            <strong>Total amount</strong>
                            <p className="mb-0">(including VAT)</p>
                          </div>
                          <strong>${grandTotal.toFixed(2)}</strong>
                        </li>
                      </ul>

                      <button className="btn btn-cyan btn-lg w-100 mt-3" onClick={handleClear}>
                        Clear Cart
                      </button>
                    </div>
                  </div>

                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
