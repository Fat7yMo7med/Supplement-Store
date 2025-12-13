import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import styles from './Home.module.css'; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const navigate = useNavigate();

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
      description: "5-52.5 lbs adjustable dumbbells with quick-lock system",
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
      description: "2:1:1 BCAA ratio with electrolytes and vitamins",
      onSale: false,
    },
    {
      id: 5,
      name: "Power Rack Pro",
      category: "equipment",
      price: 699.99,
      rating: 4.9,
      image: "../../src/assets/images/Power Rack Pro.jpg",
      description: "Heavy-duty rack for all strength training exercises",
      onSale: false,
    },
    {
      id: 6,
      name: "Omega 3 Capsules",
      category: "supplements",
      price: 29.99,
      rating: 4.6,
      image: "../../src/assets/images/Omega 3 Capsules.jpg",
      description: "Supports heart, brain, and joint health",
      onSale: true,
      originalPrice: 39.99,
    },
    {
      id: 7,
      name: "Adjustable Bench",
      category: "equipment",
      price: 149.99,
      rating: 4.8,
      image: "../../src/assets/images/Adjustable Bench.jpg",
      description: "Multi-angle bench for all your lifting needs",
      onSale: false,
    },
    {
      id: 8,
      name: "Recovery Protein Bar",
      category: "supplements",
      price: 19.99,
      rating: 4.5,
      image: "../../src/assets/images/Recovery Protein Bar.jpg",
      description: "High-protein snack for post-workout recovery",
      onSale: false,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Professional Athlete",
      content:"Supplement Store transformed my recovery and boosted performance.",
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
      desc: "Is the ability of an organism to exert itself and remain active for a long period of time.",
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
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const addToCart = (product) => {
    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
      toast.error("Login required to access store!", {
        style: {
          background: "#1e293b",
          color: "#ff0404ff",
          border: "1px solid #ff0404ff",
          fontWeight: "bold",
        },
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    setCartItems((prev) => prev + 1);

    if (product.category === "supplements") {
      navigate("/store", { state: { product } });
    } else if (product.category === "equipment") {
      navigate("/equipments", { state: { product } });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className={`py-5 ${styles.storeContainer}`}>
      <Toaster />
      <div className={styles.glowEffect}></div>
      <div className={`container ${styles.content}`}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            LEVEL UP YOUR <span className={styles.heroHighlight}>FITNESS</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Premium supplements, elite equipment, and expert workout programs.
          </p>
          
          <div className={styles.searchContainer}>
            <div className={styles.searchInputGroup}>
              <span className={styles.searchIcon}>
                <i className="fa fa-search"></i>
              </span>
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={styles.searchInput} placeholder="Search products..."/>
            </div>
          </div>
          
          <div className={styles.categoryButtons}>
            {categories.map((d) => (
              <button key={d.id} onClick={() => setSelectedCategory(d.id)} className={`${styles.categoryButton} ${selectedCategory === d.id ? styles.categoryButtonActive : ''}`}>
                <i className={`fa ${d.icon} ${styles.categoryIcon}`}></i>
                {d.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className="row text-center">
            {features.map((f, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className={styles.featureCard}>
                  <i className={`fa ${f.icon} ${styles.featureIcon}`} />
                  <h5 className={styles.featureTitle}>{f.title}</h5>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.productsSection}>
          <h2 className={styles.sectionTitle}><span className="text-white">🔥</span> Best Sellers</h2>
          <div className="row">
            {filteredProducts.map((p) => (
              <div key={p.id} className="col-md-3 mb-4">
                <div className={styles.productCard}>
                  <div className={styles.productImageContainer}>
                    <img src={p.image} className={styles.productImage} alt={p.name} />
                    {p.onSale && (
                      <div className={styles.saleBadge}>
                        SALE
                      </div>
                    )}
                  </div>
                  <div className={styles.productBody}>
                    <h5 className={styles.productName}>{p.name}</h5>
                    <p className={styles.productDescription}>{p.description}</p>
                    
                    <div className={styles.productRating}>
                      <span className={styles.stars}>
                        {"★".repeat(Math.floor(p.rating))}
                        <span className={styles.halfStar}>☆</span>
                      </span>
                      <span className={styles.ratingNumber}>{p.rating}</span>
                    </div>
                    
                    <div className={styles.productPrice}>
                      <span className={styles.currentPrice}>${p.price}</span>
                      {p.onSale && (
                        <span className={styles.originalPrice}>${p.originalPrice}</span>
                      )}
                    </div>
                    
                    <button className={styles.addToCartButton}  onClick={() => addToCart(p)} >
                      <i className="fa fa-cart-plus me-2"></i>
                      Show Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.workoutSection}>
          <h2 className={styles.sectionTitle}><span className="text-white">🏋️</span> Elite Workout Programs</h2>
          <div className="row">
            {workoutPrograms.map((program, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className={styles.workoutCard}>
                  <div className={styles.workoutImageContainer}>
                    <img src={program.img} className={styles.workoutImage} alt={program.title} />
                  </div>
                  <div className={styles.workoutBody}>
                    <h4 className={styles.workoutTitle}>{program.title}</h4>
                    <p className={styles.workoutDesc}>{program.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.blogSection}>
          <h2 className={styles.sectionTitle}><span className="text-white">📝</span> Latest Articles</h2>
          <div className="row">
            {blogPosts.map((blog, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className={styles.blogCard}>
                  <div className={styles.blogImageContainer}>
                    <img src={blog.img} className={styles.blogImage} alt={blog.title} />
                  </div>
                  <div className={styles.blogBody}>
                    <h4 className={styles.blogTitle}>{blog.title}</h4>
                    <p className={styles.blogDate}>
                      <i className="fa fa-calendar me-2"></i>
                      {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.testimonialSection}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <img src={testimonials[activeTestimonial].image} className={styles.testimonialImage} alt={testimonials[activeTestimonial].name}/>
              <blockquote className={styles.testimonialQuote}>
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <h5 className={styles.testimonialName}>
                {testimonials[activeTestimonial].name}
              </h5>
              <p className={styles.testimonialRole}>
                {testimonials[activeTestimonial].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;