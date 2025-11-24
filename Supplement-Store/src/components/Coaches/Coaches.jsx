import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CoachesProfiles from '../CoachesProfiles/CoachesProfiles';
import CoachesDetails from '../CoachDetails/CoachDetails';

function Coaches() {
  const [coaches] = useState([
    {
      id: 1,
      name: "Ahmed Mohamed",
      specialty: "Bodybuilding",
      title: "Professional Bodybuilding Coach",
      bio: "Certified trainer with 8 years of experience in bodybuilding and fitness. Winner of several local and international championships.",
      experience: "8+ years experience",
      clients: "150+ satisfied clients",
      certifications: "5 championships",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Mohamed Ali",
      specialty: "Fitness",
      title: "Fitness and Functional Training Coach",
      bio: "Certified fitness and functional training specialist. Expert in weight loss exercises and general fitness improvement.",
      experience: "6+ years experience",
      clients: "200+ satisfied clients",
      certifications: "3 certifications",
      image: "https://plus.unsplash.com/premium_photo-1661898576032-fd26e3409175?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Sameh Khaled",
      specialty: "Sports Nutrition",
      title: "Sports Nutrition Specialist",
      bio: "Certified nutrition specialist with 10 years of experience in sports nutrition. Helps athletes improve performance through balanced nutrition.",
      experience: "10+ years experience",
      clients: "300+ satisfied clients",
      certifications: "7 certifications",
      image: "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?q=80&w=1332&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Samir Mohamed",
      specialty: "Sports Rehabilitation",
      title: "Sports Rehabilitation and Injury Coach",
      bio: "Certified sports rehabilitation and injury treatment trainer. Helps athletes recover and return to sports safely.",
      experience: "7+ years experience",
      clients: "180+ satisfied clients",
      certifications: "4 certifications",
      image: "https://plus.unsplash.com/premium_photo-1664301050654-63085cc3c656?q=80&w=1192&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Omar Hassan",
      specialty: "CrossFit",
      title: "CrossFit Level 3 Trainer",
      bio: "CrossFit Level 3 certified trainer with 5 years of experience. Specialized in high-intensity functional training.",
      experience: "5+ years experience",
      clients: "120+ satisfied clients",
      certifications: "6 certifications",
      image: "https://images.unsplash.com/photo-1551763337-e05b91996d32?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Lina Mahmoud",
      specialty: "Yoga & Pilates",
      title: "Yoga and Pilates Instructor",
      bio: "Certified yoga and pilates instructor with 4 years of experience. Focuses on flexibility, balance, and mental wellness.",
      experience: "4+ years experience",
      clients: "90+ satisfied clients",
      certifications: "4 certifications",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center"
    },
    {
      id: 7,
      name: "Karim Samy",
      specialty: "Strength Training",
      title: "Strength and Conditioning Coach",
      bio: "Strength and conditioning specialist with 9 years of experience. Works with professional athletes and fitness enthusiasts.",
      experience: "9+ years experience",
      clients: "220+ satisfied clients",
      certifications: "8 certifications",
      image: "https://images.unsplash.com/photo-1639496908117-6633c4aa9592?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Nour ElDin",
      specialty: "Cardio Training",
      title: "Cardio and Endurance Coach",
      bio: "Cardio and endurance training expert with 6 years of experience. Specializes in marathon training and cardiovascular health.",
      experience: "6+ years experience",
      clients: "150+ satisfied clients",
      certifications: "5 certifications",
      image: "https://plus.unsplash.com/premium_photo-1661375069014-cade4c4032b4?q=80&w=1170&auto=format&fit=crop"
    }
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const handleBookSession = (coachId) => {
    navigate(`/coach/${coachId}#booking`);
  };

  const filteredCoaches = activeFilter === "all" ? coaches
      : coaches.filter((coach) => coach.specialty.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="min-vh-100 py-5" style={{ background: "#0f172a" }}>
      <style>{`
        .coach-card {
          background: #1e293b;
          border-radius: 12px;
          transition: 0.3s;
        }
        .coach-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
        }
        .btn-cyan {
          background-color: #00e5ff !important;
          color: #0f172a !important;
          font-weight: bold;
        }
        .btn-cyan-outline {
          border: 1px solid #00e5ff !important;
          color: #00e5ff !important;
        }
        .badge-cyan {
          background-color: #00e5ff;
          color: #0f172a;
          font-weight: bold;
        }
      `}</style>

      <div className="container text-light" dir="ltr">
        <div className="row g-4">
          {filteredCoaches.map((coach) => (
            <div key={coach.id} className="col-md-6 col-lg-3">
              <div className="card coach-card h-100 shadow-lg border-0">
                <img src={coach.image} className="card-img-top" style={{ height: "250px", objectFit: "cover" }} alt={coach.name}/>

                <div className="card-body d-flex flex-column text-light">
                  <h5 className="fw-bold" style={{ color: "#00e5ff" }}>{coach.name}</h5>
                  <p className="text-secondary">{coach.title}</p>

                  <div className="d-grid gap-2 mt-auto">
                    <button className="btn btn-cyan" onClick={() => navigate(`/coachesProfiles/${coach.id}`)}> View Profile </button>
                    <button className="btn btn-cyan-outline" onClick={() => handleBookSession(coach.id)}> Book Session </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Coaches;
