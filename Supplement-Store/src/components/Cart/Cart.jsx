import React from "react";

export default function Cart() {
  return (
      <>
      <div className="bg-dark">
        <style>
          {`
        .cart-page {
          min-height: 100vh;
          padding-top: 40px;
        }
        .btn-cyan {
          background-color: #00e5ff !important;
          color: #0f172a !important;
          font-weight: bold;
          border: none !important;
        }
        .btn-outline-cyan {
          border-color: #00e5ff !important;
          color: #00e5ff !important;
        }
        .btn-cyan:hover,
        .btn-outline-cyan:hover {
          background-color: #00c4d6 !important;
          color: #0f172a !important;
        }
        .text-cyan {
          color: #00e5ff !important;
        }
        .badge-cyan {
          background-color: #00e5ff;
          color: #0f172a;
          padding: 5px 10px;
          border-radius: 8px;
          font-weight: bold;
        }
        .card-section,
        .cart-card {
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
              <div className="card cart-card mb-4 shadow">
                <div className="card-header cart-header">
                  <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-lg-3">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" className="img-fluid rounded"/>
                    </div>
                    <div className="col-lg-5">
                      <p className="text-cyan fw-bold">Blue denim shirt</p>
                      <p className="text-secondary">Color: blue</p>
                      <p className="text-secondary">Size: M</p>
                      <button className="btn btn-outline-cyan btn-sm me-2"> <i className="fas fa-trash"></i> </button>
                      <button className="btn btn-danger btn-sm"> <i className="fas fa-heart"> </i></button>
                    </div>

                    <div className="col-lg-4">
                      <div className="d-flex mb-3" style={{ maxWidth: "200px" }}>
                        <button className="btn btn-cyan px-3 me-2"> <i className="fas fa-minus"> </i></button>
                        <input type="number" min="1" defaultValue="1" className="form-control text-center" />
                        <button className="btn btn-cyan px-3 ms-2"> <i className="fas fa-plus"> </i></button>
                      </div>
                      <p><strong>$17.99</strong></p>
                    </div>
                  </div>
                  <hr className="border-secondary" />
                  <div className="row">
                    <div className="col-lg-3">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"className="img-fluid rounded"/>
                    </div>

                    <div className="col-lg-5">
                      <p className="text-cyan fw-bold">Red hoodie</p>
                      <p className="text-secondary">Color: red</p>
                      <p className="text-secondary">Size: M</p>
                      <button className="btn btn-outline-cyan btn-sm me-2"> <i className="fas fa-trash"> </i></button>
                      <button className="btn btn-danger btn-sm"> <i className="fas fa-heart"> </i></button>
                    </div>

                    <div className="col-lg-4">
                      <div className="d-flex mb-3" style={{ maxWidth: "200px" }}>
                        <button className="btn btn-cyan px-3 me-2"> <i className="fas fa-minus"> </i></button>
                        <input type="number" min="1" defaultValue="1" className="form-control text-center" />
                        <button className="btn btn-cyan px-3 ms-2"><i className="fas fa-plus"></i></button>
                      </div>
                      <p><strong>$17.99</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card cart-card mb-4 shadow">
                <div className="card-body">
                  <p className="text-cyan fw-bold">Expected delivery</p>
                  <p>12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card cart-card shadow">
                <div className="card-body">
                  <p className="text-cyan fw-bold">We accept</p>
                  <img className="me-2" width="45" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" />
                  <img className="me-2" width="45" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" />
                  <img className="me-2" width="45" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card cart-card shadow">
                <div className="card-header cart-header">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item cart-list-item d-flex justify-content-between"> Products <span>$53.98</span> </li>
                    <li className="list-group-item cart-list-item d-flex justify-content-between"> Shipping <span>Free</span> </li>
                    <li className="list-group-item cart-list-item d-flex justify-content-between border-0">
                      <div>
                          <strong>Total amount</strong>
                          <p className="mb-0">(including VAT)</p>
                        </div>
                        <strong>$53.98</strong>
                    </li>
                  </ul>
                  <button className="btn btn-cyan btn-lg w-100 mt-3"> Go to checkout </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
  );
}