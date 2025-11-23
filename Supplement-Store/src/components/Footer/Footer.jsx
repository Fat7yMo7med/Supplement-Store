import React from "react";

export default function Footer() {
  return (
    <footer
      className="border-top border-secondary"style={{ background: "#0e6071" }}>
      <div className="container py-4">
        <div className="row gy-4">
          <div className="col-md-3">
            <div className="d-flex align-items-center mb-3">
              <div
                className="d-flex justify-content-center align-items-center rounded"
                style={{width: "40px",height: "40px",background: "linear-gradient(to right, #4ef0d2ff, #1a86d3ff)",borderRadius: "8px"}}>
                <span className="fw-bold" style={{color:"#fff"}}>SP</span>
              </div>
              <h3 className="text-white fw-bold ms-2">Supplement Store</h3>
            </div>
            <p className="text-white">
              Your ultimate destination for premium fitness supplements and professional gym equipment.
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="text-white fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {["Home", "Shop", "About Us", "Contact"].map((item) => (
                <li  key={item}>
                  <a href="#"
                    className="text-decoration-none d-block mb-1" style={{ transition: "0.2s",color:"#ebebebff" }} onMouseOver={(e) => (e.target.style.color = "#fff")} onMouseOut={(e) => (e.target.style.color = "#94a3b8")}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white fw-semibold mb-3">Categories</h5>
            <ul className="list-unstyled">
              {[
                "Protein Supplements",
                "Pre-Workout",
                "Gym Equipment",
                "Recovery"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-decoration-none d-block mb-1" style={{ transition: "0.2s",color:"#ebebebff"}} onMouseOver={(e) => (e.target.style.color = "#fff")} onMouseOut={(e) => (e.target.style.color = "#94a3b8")}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white fw-semibold mb-3">Newsletter</h5>
            <p className="text-white">Subscribe for exclusive offers and fitness tips</p>
            <div className="input-group">
              <input type="email" className="form-control bg-dark text-white border-secondary" placeholder="Your email" style={{ borderRight: "none" }}/>
              <button className="btn text-white" style={{backgroundColor: "#2eaec8ff",transition: "0.3s"}} onMouseOver={(e) => (e.target.style.backgroundColor = "#2eaec8ff")} onMouseOut={(e) => (e.target.style.backgroundColor = "#2eaec8ff")}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
