import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Articles.module.css";

export default function ArticleDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const articles = [
    {
        id: 1,
        title: "Top 10 Healthiest Foods for Muscle Growth",
        subtitle: "Science-Based Nutrition for Strength & Recovery",
        date: "February 2025",
        image: "../../src/assets/images/Nutrition.jpg",
        sections: [
        {
            heading: "Why Nutrition Matters",
            text:
            "Muscle growth does not happen during training — it happens during recovery. Nutrition provides the raw materials needed to repair muscle fibers, increase muscle protein synthesis, and support hormonal balance. Without proper nutrition, even the best training program will fail to produce optimal results.",
        },
        {
            heading: "Best Foods for Muscle Growth",
            list: [
            "Chicken breast & lean beef – rich in high-quality protein and essential amino acids",
            "Eggs – contain leucine, a key amino acid for muscle protein synthesis",
            "Oats & brown rice – complex carbohydrates that fuel intense workouts",
            "Salmon & tuna – omega-3 fatty acids reduce inflammation and support recovery",
            "Greek yogurt – slow-digesting protein combined with gut-friendly probiotics",
            "Sweet potatoes – excellent source of carbohydrates and antioxidants",
            "Nuts & seeds – healthy fats that support testosterone production",
            ],
        },
        {
            heading: "Macronutrient Balance",
            text:
            "For optimal muscle growth, aim for a balanced intake of macronutrients: protein for repair, carbohydrates for training energy, and fats for hormone regulation. Most athletes benefit from 1.6–2.2g of protein per kilogram of body weight per day.",
        },
        {
            heading: "Pro Tips",
            text:
            "Eat balanced meals every 3–4 hours, prioritize whole foods, stay hydrated, and aim for 7–9 hours of sleep per night. Consistency in both nutrition and training is the key to long-term progress.",
        },
        ],
    },

    {
        id: 2,
        title: "Do You Really Need Creatine?",
        subtitle: "The Most Researched Supplement Explained",
        date: "January 2025",
        image: "../../src/assets/images/Supplements.jpg",
        sections: [
        {
            heading: "What is Creatine?",
            text:
            "Creatine is a naturally occurring compound stored in muscles and used to regenerate ATP, the primary energy source during short, explosive movements like weightlifting and sprinting.",
        },
        {
            heading: "Proven Benefits of Creatine",
            list: [
            "Increased strength and power output",
            "Improved performance in high-intensity exercise",
            "Enhanced muscle size due to increased water retention in muscle cells",
            "Faster recovery between training sets",
            "Potential cognitive benefits such as improved focus",
            ],
        },
        {
            heading: "How to Use Creatine Correctly",
            text:
            "Creatine monohydrate is the most effective and researched form. A daily dose of 3–5 grams is sufficient. A loading phase is optional and not required for results.",
        },
        {
            heading: "Is It Safe?",
            text:
            "Numerous scientific studies confirm that creatine is safe for long-term use in healthy individuals. Drink adequate water and avoid exceeding recommended dosages.",
        },
        ],
    },

    {
        id: 3,
        title: "5 Best HIIT Routines for Fat Burn",
        subtitle: "Maximum Results in Minimum Time",
        date: "March 2025",
        image: "../../src/assets/images/Workout.jpg",
        sections: [
        {
            heading: "Why HIIT Works",
            text:
            "High-Intensity Interval Training (HIIT) alternates short bursts of intense effort with recovery periods. This method increases calorie burn, boosts metabolism, and improves cardiovascular fitness in less time compared to traditional steady-state cardio.",
        },
        {
            heading: "Top HIIT Workouts",
            list: [
            "Sprint intervals (20–30 seconds sprint, 60 seconds walk)",
            "Burpees & jump squats circuits",
            "Battle ropes high-intensity rounds",
            "Mountain climbers and plank variations",
            "Rowing machine intervals",
            ],
        },
        {
            heading: "HIIT & Muscle Preservation",
            text:
            "Unlike long-duration cardio, HIIT helps preserve lean muscle mass when combined with proper protein intake and resistance training.",
        },
        {
            heading: "Training Advice",
            text:
            "Perform HIIT 2–4 times per week, warm up properly, and allow recovery days between sessions. Overuse may lead to fatigue or injury if recovery is neglected.",
        },
        ],
    },
    ];


    const article = articles.find((a) => a.id === Number(id));

if (!article) {
    return (
    <div className="container py-5 text-center text-white">
        <h2>Article Not Found</h2>
    </div>
    );
}

    return (
        <div className={styles.articleContainer}>
        <div className={styles.glowEffect}></div>

        <div className="container">
            <button className={styles.backButton} onClick={() => navigate(-1)}>
            ← Back
            </button>

            <div className={styles.header}>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.subtitle}>{article.subtitle}</p>
            <span className={styles.date}>{article.date}</span>
            </div>

            <div className={styles.card}>
            <img src={article.image} alt={article.title} className={styles.articleImage}/>

            <div className={styles.cardBody}>
                {article.sections.map((section, index) => (
                <div key={index} className={styles.section}>
                    <h3 className={styles.sectionTitle}>{section.heading}</h3>

                    {section.text && (
                    <p className={styles.text}>{section.text}</p>
                    )}

                    {section.list && (
                    <ul className={`${styles.list}`} style={{listStyle:"none"}}>
                        {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                        ))}
                    </ul>
                    )}
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}
