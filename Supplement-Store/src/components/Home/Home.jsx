import React, { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const products = [
    {
      id: 1,
      name: "Quantum Whey Isolate",
      category: "supplements",
      price: 59.99,
      rating: 4.9,
      image: "../../src/assets/images/Quantum Whey Isolate.jpg",
      description: "Ultra-filtered whey protein with 25g protein per serving",
      onSale: true,
      originalPrice: 74.99,
    },
    {
      id: 2,
      name: "NeuroFocus Pre-Workout",
      category: "supplements",
      price: 39.99,
      rating: 4.8,
      image: "../../src/assets/images/NeuroFocus Pre-Workout.jpg",
      description: "Mental clarity and explosive energy formula",
      onSale: false,
    },
    {
      id: 3,
      name: "Titan Adjustable Dumbbells",
      category: "equipment",
      price: 349.99,
      rating: 4.9,
      image: "../../src/assets/images/Titan Adjustable Dumbbells.jpg",
      description:
        "5-52.5 lbs adjustable dumbbells with quick-lock system",
      onSale: true,
      originalPrice: 399.99,
    },
    {
      id: 4,
      name: "RecoverElite BCAA",
      category: "supplements",
      price: 32.99,
      rating: 4.7,
      image: "../../src/assets/images/RecoverElite BCAA.jpg",
      description:
        "2:1:1 BCAA ratio with electrolytes and vitamins",
      onSale: false,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Professional Athlete",
      content:
        "POWERFUEL supplements transformed my recovery and boosted performance.",
      image: "../../src/assets/images/testimonial-2.jpg",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Fitness Coach",
      content: "The equipment quality and durability are unmatched!",
      image: "../../src/assets/images/testimonial-4.jpg",
    },
  ];
  const categories = [
    { id: "all", name: "All Products", icon: "fa-bolt" },
    { id: "supplements", name: "Supplements", icon: "fa-capsules" },
    { id: "equipment", name: "Equipment", icon: "fa-dumbbell" },
  ];
  const features = [
    { icon: "fa-star", title: "Premium Quality", desc: "Lab-tested ingredients" },
    { icon: "fa-trophy", title: "Trusted by Athletes", desc: "Used worldwide" },
    { icon: "fa-truck", title: "Fast Shipping", desc: "Free delivery over $50" },
    { icon: "fa-shield", title: "Money Back Guarantee", desc: "30 days return" },
  ];

  const workoutPrograms = [
    {
      img: "../../src/assets/images/Strength Training.jpg",
      title: "Strength Training",
      desc: "Build maximum muscle and increase explosive power.",
    },
    {
      img: "../../src/assets/images/Fat Loss.jpg",
      title: "Fat Loss",
      desc: "Burn calories fast with structured HIIT and cardio workouts.",
    },
    {
      img: "../../src/assets/images/Endurance.jpg",
      title: "Endurance",
      desc: "Increase stamina and improve cardiovascular health.",
    },
  ];

  const blogPosts = [
    {
      img: "../../src/assets/images/Nutrition.jpg",
      title: "Top 10 Healthiest Foods for Muscle Growth",
      date: "Feb 2025",
    },
    {
      img: "../../src/assets/images/Supplements.jpg",
      title: "Do You Really Need Creatine?",
      date: "Jan 2025",
    },
    {
      img: "../../src/assets/images/Workout.jpg",
      title: "5 Best HIIT Routines for Fat Burn",
      date: "March 2025",
    },
  ];
  const filteredProducts = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });
  const addToCart = () => setCartItems((prev) => prev + 1);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-dark text-light" style={{ fontFamily: "Poppins" }}>
      <style>{`
        .hero-bg {
          background: radial-gradient(circle at top, #0ef, #000);
          padding: 120px 0;
        }
        .card-hover {
          transition: 0.35s;
          transform: translateY(0);
        }
        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 0 25px rgba(0,255,255,0.3);
        }
        .add-cart-btn {
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.35s ease;
          pointer-events: none;
        }
        .card:hover .add-cart-btn {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .glow-icon:hover {
          text-shadow: 0 0 12px cyan;
        }
        .testimonial-box {
          background:#202733;
          border-radius:15px;
          padding:25px;
          box-shadow:0 0 20px rgba(0,0,0,0.3);
        }
      `}</style>
      <div className="hero-bg text-center">
        <h1 className="display-2 fw-bold">
          LEVEL UP YOUR <span className="text-info">FITNESS</span>
        </h1>
        <p className="lead mb-4">
          Premium supplements, elite equipment, and expert workout programs.
        </p>
        <div className="input-group my-4 w-75 mx-auto">
          <span className="input-group-text bg-secondary text-light">
            <i className="fa fa-search"></i>
          </span>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control bg-secondary text-white"
            placeholder="Search products..."
          />
        </div>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn px-4 py-2 ${
                selectedCategory === cat.id
                  ? "btn-info text-dark"
                  : "btn-outline-info"
              }`}
            >
              <i className={`fa ${cat.icon} me-2 glow-icon`}></i>
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      <div className="container py-5">
        <div className="row text-center">
          {features.map((f, i) => (
            <div key={i} className="col-md-3">
              <i className={`fa ${f.icon} fa-3x text-info mb-3`} />
              <h5 className="fw-bold">{f.title}</h5>
              <p className="text-secondary">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">🔥 Best Sellers</h2>
        <div className="row">
          {filteredProducts.map((p) => (
            <div key={p.id} className="col-md-3 mb-4">
              <div className="card bg-secondary text-light h-100 card-hover">
                <img src={p.image} className="card-img-top" alt={p.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{p.name}</h5>
                  <p className="card-text small">{p.description}</p>
                  <div className="d-flex justify-content-between">
                    <span className="text-warning">
                      {"★".repeat(Math.floor(p.rating))}
                    </span>
                    <strong>${p.price}</strong>
                  </div>
                  {p.onSale && (
                    <small className="text-danger text-decoration-line-through">
                      ${p.originalPrice}
                    </small>
                  )}
                  <button
                    className="btn btn-info text-dark mt-3 add-cart-btn"
                    onClick={addToCart}
                  >
                    <i className="fa fa-cart-plus me-2"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">🏋️ Elite Workout Programs</h2>
        <div className="row">
          {workoutPrograms.map((p, i) => (
            <div key={i} className="col-md-4">
              <div className="card bg-dark text-light card-hover">
                <img src={p.img} className="card-img-top" />
                <div className="card-body">
                  <h4 className="fw-bold">{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">📝 Latest Articles</h2>
        <div className="row">
          {blogPosts.map((b, i) => (
            <div key={i} className="col-md-4">
              <div className="card bg-secondary text-light card-hover">
                <img src={b.img} className="card-img-top" />
                <div className="card-body">
                  <h4 className="fw-bold">{b.title}</h4>
                  <p className="text-muted">{b.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondary py-5">
        <div className="container text-center testimonial-box">
          <img
            src={testimonials[activeTestimonial].image}
            className="rounded-circle mb-3"
            alt=""
          />
          <blockquote className="fst-italic">
            "{testimonials[activeTestimonial].content}"
          </blockquote>
          <h5 className="fw-bold">{testimonials[activeTestimonial].name}</h5>
          <p className="text-light">{testimonials[activeTestimonial].role}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
