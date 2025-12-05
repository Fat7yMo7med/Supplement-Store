import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="text-light min-vh-100 py-5" style={{ background: "#0F172A"}}>
      <style>
        {`
          .btn-cyan {
            background-color: #00e5ff !important;
            color: #0f172a !important;
            font-weight: bold;
          }
          .btn-outline-cyan {
            border-color: #00e5ff !important;
            color: #00e5ff !important;
          }
          .text-cyan {
            color: #00e5ff;
          }
          .badge-cyan {
            background-color: #00e5ff;
            color: #0f172a;
          }
          .card-section {
            background: #1e293b;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
          }
        `}
      </style>

      <div className="container">
        <button className="btn btn-outline-cyan mb-4" onClick={() => navigate("/")}>
          ← Back to Home
        </button>

        <div className="text-center mb-5">
          <h1 className="fw-bold text-cyan">About Supplement Store</h1>
          <p className="text-secondary mt-2">
            Premium Fitness • Modern Coaching • Athlete Performance
          </p>
        </div>

        <div className="card-section shadow">
          <h3 className="text-cyan fw-bold">Our Story</h3>
          <p className="mt-3">
            POWERFUEL started as a small vision: creating a place where athletes
            and beginners can get high-quality supplements and elite training
            guidance.  
            Today, we help thousands achieve strength, confidence, and a healthier life.
          </p>
          <p>
            Built by a team of athletes, coaches, and nutrition specialists,
            POWERFUEL focuses on science-based solutions, reliability, and real results.
            Our mission is to make fitness accessible, enjoyable, and life-changing.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card-section shadow">
              <h3 className="text-cyan fw-bold">Our Mission</h3>
              <p className="mt-3">
                To empower individuals with world-class supplements, training programs, 
                and expert knowledge that help them reach their maximum physical potential.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-section shadow">
              <h3 className="text-cyan fw-bold">Our Vision</h3>
              <p className="mt-3">
                To become the most trusted fitness brand worldwide — known for
                innovation, transparency, and transforming lives through health
                and performance.
              </p>
            </div>
          </div>
        </div>

        <div className="card-section shadow">
          <h3 className="text-cyan fw-bold">Why Choose POWERFUEL?</h3>
          <ul className="mt-3">
            <li>High-quality, lab-tested supplements</li>
            <li>Elite training programs built by certified coaches</li>
            <li>Trusted by professional athletes and trainers</li>
            <li>Modern fitness technology and personalized guidance</li>
            <li>Fast shipping, 24/7 support, and guaranteed results</li>
          </ul>
        </div>

        <div className="card-section shadow">
          <h3 className="text-cyan fw-bold">Our Core Values</h3>
          <ul className="mt-3">
            <li><strong>Integrity:</strong> Always deliver truth and transparency.</li>
            <li><strong>Quality:</strong> We provide products tested and trusted by experts.</li>
            <li><strong>Passion:</strong> Fitness is our lifestyle, not a trend.</li>
            <li><strong>Innovation:</strong> Continually improving training and nutrition systems.</li>
            <li><strong>Community:</strong> We build a strong and supportive fitness family.</li>
          </ul>
        </div>

        <div className="card-section shadow">
          <h3 className="text-cyan fw-bold text-center">Meet Our Team</h3>

          <div className="row mt-4 text-center">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300" className="img-fluid rounded mb-3" style={{ objectFit: "cover", height: "250px", width: "100%" }}/>
              <h5 className="text-cyan fw-bold">Ahmed Mohamed</h5>
              <p className="text-secondary">Head Bodybuilding Coach</p>
            </div>

            <div className="col-md-4">
              <img src="https://plus.unsplash.com/premium_photo-1661898576032-fd26e3409175?w=300" className="img-fluid rounded mb-3" style={{ objectFit: "cover", height: "250px", width: "100%" }}/>
              <h5 className="text-cyan fw-bold">Mohamed Ali</h5>
              <p className="text-secondary">Fitness & Functional Training Expert</p>
            </div>

            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1639496908117-6633c4aa9592?w=300" className="img-fluid rounded mb-3" style={{ objectFit: "cover", height: "250px", width: "100%" }}/>
              <h5 className="text-cyan fw-bold">Karim Samy</h5>
              <p className="text-secondary">Strength & Conditioning Coach</p>
            </div>
          </div>
        </div>

        <div className="card-section shadow">
          <h3 className="text-cyan fw-bold">Contact Us</h3>
          <p className="mt-3">
            Have questions? Need personalized coaching?  
            Our team is ready to help you start your fitness journey.
          </p>

          <div className="row text-center mt-3">
            <div className="col-6">
              <h5 className="text-cyan">Email</h5>
              <p>support@powerfuel.com</p>
            </div>
            <div className="col-6">
              <h5 className="text-cyan">Phone</h5>
              <p>+20 123 888 9999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
