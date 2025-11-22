import React, { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [cartItems, setCartItems] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const products = [
    {
      id: 1,
      name: "Quantum Whey Isolate",
      category: "supplements",
      price: 59.99,
      rating: 4.9,
      image: "https://placehold.co/400x400/0f172a/00f5d4?text=Quantum+Whey",
      description: "Ultra-filtered whey protein with 25g protein per serving",
      onSale: true,
      originalPrice: 74.99
    },
    {
      id: 2,
      name: "NeuroFocus Pre-Workout",
      category: "supplements",
      price: 39.99,
      rating: 4.8,
      image: "https://placehold.co/400x400/0f172a/f15bb5?text=NeuroFocus",
      description: "Mental clarity and explosive energy formula",
      onSale: false
    },
    {
      id: 3,
      name: "Titan Adjustable Dumbbells",
      category: "equipment",
      price: 349.99,
      rating: 4.9,
      image: "https://placehold.co/400x400/0f172a/9b5de5?text=Titan+Dumbbells",
      description: "5-52.5 lbs adjustable dumbbells with quick-lock system",
      onSale: true,
      originalPrice: 399.99
    },
    {
      id: 4,
      name: "RecoverElite BCAA",
      category: "supplements",
      price: 32.99,
      rating: 4.7,
      image: "https://placehold.co/400x400/0f172a/fee440?text=RecoverElite",
      description: "2:1:1 BCAA ratio with electrolytes and vitamins",
      onSale: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Professional Athlete",
      content:
        "POWERFUEL supplements have completely transformed my recovery time.",
      image: "https://placehold.co/80x80/1e293b/ffffff?text=AR"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Fitness Coach",
      content: "The Titan Dumbbells are a game-changer for home workouts.",
      image: "https://placehold.co/80x80/1e293b/ffffff?text=SC"
    }
  ];

  const categories = [
    { id: "all", name: "All Products", icon: "fa-bolt" },
    { id: "supplements", name: "Supplements", icon: "fa-capsules" },
    { id: "equipment", name: "Equipment", icon: "fa-dumbbell" }
  ];

  const features = [
    { icon: "fa-star", title: "Premium Quality", desc: "Lab-tested ingredients" },
    { icon: "fa-trophy", title: "Trusted by Athletes", desc: "Used worldwide" },
    { icon: "fa-truck", title: "Fast Shipping", desc: "Free delivery over $50" },
    { icon: "fa-shield", title: "Money Back Guarantee", desc: "30 days return" }
  ];

  // Filter Logic
  const filteredProducts = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  // Add to cart
  const addToCart = () => setCartItems((prev) => prev + 1);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-dark text-light">

      {/* Hero Section */}
      <div className="container text-center py-5">
        <h1 className="display-3 fw-bold">
          FUEL YOUR <span className="text-info">LIMITLESS</span>
        </h1>
        <p className="lead">
          Science-backed supplements and equipment for peak performance
        </p>

        {/* Search Input */}
        <div className="input-group my-4 w-75 mx-auto">
          <span className="input-group-text bg-secondary text-light">
            <i className="fa fa-search"></i>
          </span>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control bg-secondary text-white"
            placeholder="Search supplements or equipment..."
          />
        </div>

        {/* Category Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn px-4 py-2 ${
                selectedCategory === cat.id ? "btn-info text-dark" : "btn-outline-info"
              }`}
            >
              <i className={`fa ${cat.icon} me-2`}></i>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row">
          {features.map((f, i) => (
            <div key={i} className="col-md-3 text-center">
              <i className={`fa ${f.icon} fa-3x text-info mb-3`} />
              <h5 className="fw-bold">{f.title}</h5>
              <p className="text-secondary">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Our Premium Collection</h2>

        <div className="row">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="col-md-3 mb-4"
              onMouseEnter={() => setHoveredProduct(p.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="card bg-secondary text-light h-100">
                <img src={p.image} className="card-img-top" alt={p.name} />

                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text small">{p.description}</p>

                  <div className="d-flex justify-content-between">
                    {/* Rating */}
                    <span className="text-warning">
                      {"★".repeat(Math.floor(p.rating))}
                    </span>

                    {/* Price */}
                    <strong>${p.price}</strong>
                  </div>

                  {/* Sale */}
                  {p.onSale && (
                    <small className="text-danger text-decoration-line-through">
                      ${p.originalPrice}
                    </small>
                  )}
                </div>

                {/* Add to Cart Hover */}
                {hoveredProduct === p.id && (
                  <button className="btn btn-info text-dark" onClick={addToCart}>
                    <i className="fa fa-cart-plus me-2"></i>Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-center py-5 text-muted">No products found...</p>
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-secondary py-5">
        <div className="container text-center">
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

      {/* Floating Cart */}
      {cartItems > 0 && (
        <div className="position-fixed bottom-0 end-0 m-4 p-3 bg-info text-dark rounded-pill shadow">
          <i className="fa fa-shopping-cart me-2"></i>
          {cartItems} items added
        </div>
      )}
    </div>
  );
};

export default App;
