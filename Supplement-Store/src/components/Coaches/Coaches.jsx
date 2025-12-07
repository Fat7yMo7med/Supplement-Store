import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './coaches.module.css';

function Coaches() {
  const [coaches] = useState([
    {
      id: 1,
      name: "Ahmed Mohamed",
      specialty: "Bodybuilding",
      title: "Professional Bodybuilding Coach",
      bio: "Certified trainer with 8 years of experience in bodybuilding and fitness. Winner of several local and international championships.",
      experience: "8+ years",
      clients: "150+ clients",
      certifications: "5 championships",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Mohamed Ali",
      specialty: "Fitness",
      title: "Fitness and Functional Training Coach",
      bio: "Certified fitness and functional training specialist. Expert in weight loss exercises and general fitness improvement.",
      experience: "6+ years",
      clients: "200+ clients",
      certifications: "3 certifications",
      image: "https://plus.unsplash.com/premium_photo-1661898576032-fd26e3409175?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Sameh Khaled",
      specialty: "Sports Nutrition",
      title: "Sports Nutrition Specialist",
      bio: "Certified nutrition specialist with 10 years of experience in sports nutrition. Helps athletes improve performance through balanced nutrition.",
      experience: "10+ years",
      clients: "300+ clients",
      certifications: "7 certifications",
      image: "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?q=80&w=1332&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Samir Mohamed",
      specialty: "Sports Rehabilitation",
      title: "Sports Rehabilitation and Injury Coach",
      bio: "Certified sports rehabilitation and injury treatment trainer. Helps athletes recover and return to sports safely.",
      experience: "7+ years",
      clients: "180+ clients",
      certifications: "4 certifications",
      image: "https://plus.unsplash.com/premium_photo-1664301050654-63085cc3c656?q=80&w=1192&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Omar Hassan",
      specialty: "CrossFit",
      title: "CrossFit Level 3 Trainer",
      bio: "CrossFit Level 3 certified trainer with 5 years of experience. Specialized in high-intensity functional training.",
      experience: "5+ years",
      clients: "120+ clients",
      certifications: "6 certifications",
      image: "https://images.unsplash.com/photo-1551763337-e05b91996d32?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Lina Mahmoud",
      specialty: "Yoga & Pilates",
      title: "Yoga and Pilates Instructor",
      bio: "Certified yoga and pilates instructor with 4 years of experience. Focuses on flexibility, balance, and mental wellness.",
      experience: "4+ years",
      clients: "90+ clients",
      certifications: "4 certifications",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center"
    },
    {
      id: 7,
      name: "Karim Samy",
      specialty: "Strength Training",
      title: "Strength and Conditioning Coach",
      bio: "Strength and conditioning specialist with 9 years of experience. Works with professional athletes and fitness enthusiasts.",
      experience: "9+ years",
      clients: "220+ clients",
      certifications: "8 certifications",
      image: "https://images.stockcake.com/public/e/f/c/efcc3abe-b1e3-40b5-bd05-52beae0c0eba_large/confident-fitness-coach-stockcake.jpg"
    },
    {
      id: 8,
      name: "Nour ElDin",
      specialty: "Cardio Training",
      title: "Cardio and Endurance Coach",
      bio: "Cardio and endurance training expert with 6 years of experience. Specializes in marathon training and cardiovascular health.",
      experience: "6+ years",
      clients: "150+ clients",
      certifications: "5 certifications",
      image: "https://plus.unsplash.com/premium_photo-1661375069014-cade4c4032b4?q=80&w=1170&auto=format&fit=crop"
    }
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const handleBookSession = (coachId) => {
    navigate(`/coach/${coachId}#booking`);
  };

  const handleViewProfile = (coachId) => {
    navigate(`/coachesProfiles/${coachId}`);
  };

  const filteredCoaches = activeFilter === "all" 
    ? coaches
    : coaches.filter((coach) => coach.specialty.toLowerCase().includes(activeFilter.toLowerCase()));

  const specialties = ["all", "Bodybuilding", "Fitness", "Sports Nutrition", "Sports Rehabilitation", "CrossFit", "Yoga & Pilates", "Strength Training", "Cardio Training"];

  return (
    <div className={styles.coachesContainer}>
      <div className={styles.glowEffect}></div>

      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Our Professional Coaches</h1>
          <p className={styles.subtitle}>
            Meet our certified coaches who will help you achieve your fitness goals
          </p>
        </div>

        <div className={styles.filterContainer}>
          {specialties.map((specialty) => (
            <button key={specialty} className={`${styles.filterButton} ${activeFilter === specialty ? styles.active : ""}`} onClick={() => setActiveFilter(specialty)}>
              {specialty === "all" ? "All Coaches" : specialty}
            </button>
          ))}
        </div>

        <div className={styles.coachesGrid}>
          {filteredCoaches.length === 0 ? (
            <div className={styles.emptyState}>
              <i className={`fas fa-user-friends ${styles.emptyIcon}`}></i>
              <h2 className={styles.emptyTitle}>No Coaches Found</h2>
              <p className={styles.emptyText}>
                No coaches found for the selected category. Try another filter to see available coaches.
              </p>
              <button className={styles.resetButton} onClick={() => setActiveFilter("all")}>
                <i className="fas fa-redo"></i>
                Show All Coaches
              </button>
            </div>
          ) : (
            filteredCoaches.map((coach) => (
              <div key={coach.id} className={styles.coachCard}>
                <div className={styles.imageContainer}>
                  <img src={coach.image} alt={coach.name} className={styles.coachImage}/>
                  <div className={styles.specialtyBadge}>
                    {coach.specialty}
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.coachName}>{coach.name}</h3>
                  <p className={styles.coachTitle}>{coach.title}</p>
                  <div className={styles.actionButtons}>
                    <button className={styles.profileButton} onClick={() => handleViewProfile(coach.id)}>
                      <i className="fas fa-user-circle"></i>
                      View Profile
                    </button>
                    <button className={styles.bookButton} onClick={() => handleBookSession(coach.id)}>
                      <i className="fas fa-calendar-alt"></i>
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Coaches;