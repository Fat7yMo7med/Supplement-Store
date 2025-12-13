import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Program.module.css"; 

export default function ProgramDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const programs = [
    {
    id: 1,
    title: "Strength Training",
    subtitle: "Build muscle mass and increase strength efficiently",
    image: "../../src/assets/images/Strength Training.jpg",
    sections: [
        {
            heading: "What is Strength Training?",
            text: "Strength training involves using resistance to induce muscular contraction. This helps build strength, anaerobic endurance, and muscle size.",
        },
        {
            heading: "Benefits",
            list: [
            "Increase muscle mass",
            "Improve bone density",
            "Enhance metabolism",
            "Boost endurance and stamina",
            ],
        },
        {
            heading: "Tips",
            text: "Focus on proper form, progressive overload, and balanced nutrition to maximize results.",
        },
        {
            heading: "Sample Workout Plan",
            text: "A typical strength training routine can include compound movements like squats, deadlifts, and bench presses. Aim for 3–5 sets of 5–10 reps with proper rest between sets.",
        },
        {
            heading: "Recommended Equipment",
            list: [
            "Dumbbells or barbells",
            "Resistance bands",
            "Weight plates",
            "Adjustable bench",
            ],
        },
        {
            heading: "Common Mistakes to Avoid",
            list: [
            "Neglecting warm-ups and stretching",
            "Overtraining without rest",
            "Using incorrect form",
            "Not progressively increasing weights",
            ],
        },
        ],
    },
    {
        id: 2,
        title: "Fat Loss",
        subtitle: "Burn calories and improve metabolism",
        image: "../../src/assets/images/Fat Loss.jpg",
        sections: [
        {
            heading: "How Fat Loss Works",
            text: "Fat loss requires a calorie deficit where your body burns more calories than it consumes. Exercise and nutrition play a key role.",
        },
        {
            heading: "Effective Methods",
            list: [
            "High-intensity interval training (HIIT)",
            "Strength training to maintain muscle mass",
            "Balanced diet with protein and fiber",
            ],
        },
        {
            heading: "Tips",
            text: "Stay consistent, track your progress, and prioritize sleep and recovery.",
        },
        {
            heading: "Sample Fat Loss Workout",
            text: "A good fat loss workout might include 30–40 minutes of HIIT followed by a 20-minute strength training circuit. Aim for 4–5 sessions a week.",
        },
        {
            heading: "Nutrition Tips",
            list: [
            "Consume lean protein (chicken, turkey, tofu)",
            "Prioritize vegetables and whole grains",
            "Track caloric intake and adjust as needed",
            ],
        },
        {
            heading: "Common Mistakes to Avoid",
            list: [
            "Skipping meals to reduce calories",
            "Not getting enough protein",
            "Overtraining without adequate recovery",
            ],
        },
        ],
    },
    {
        id: 3,
        title: "Endurance",
        subtitle: "Improve stamina and cardiovascular performance",
        image: "../../src/assets/images/Endurance.jpg",
        sections: [
        {
            heading: "What is Endurance Training?",
            text: "Endurance training improves your ability to sustain prolonged physical activity, enhancing cardiovascular efficiency.",
        },
        {
            heading: "Techniques",
            list: [
            "Long-distance running or cycling",
            "Interval training",
            "Circuit training",
            "Cross-training for overall fitness",
            ],
        },
        {
            heading: "Tips",
            text: "Gradually increase duration and intensity, hydrate well, and maintain proper nutrition.",
        },
        {
            heading: "Sample Endurance Workout",
            text: "Start with a 5-minute warm-up, followed by a 30-minute run or bike at moderate intensity, then cool down with stretching.",
        },
        {
            heading: "Nutritional Guidance",
            list: [
            "Hydrate before, during, and after exercise",
            "Consume carbs for sustained energy during long workouts",
            "Post-workout recovery with protein for muscle repair",
            ],
        },
        {
            heading: "Common Mistakes to Avoid",
            list: [
            "Overtraining without recovery",
            "Ignoring hydration",
            "Not having a proper warm-up or cool-down",
            ],
        },
        ],
    },
];


    const program = programs.find((p) => p.id === Number(id));

    if (!program) {
        return (
        <div className="container py-5 text-center text-white">
            <h2>Program Not Found</h2>
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
            <h1 className={styles.title}>{program.title}</h1>
            <p className={styles.subtitle}>{program.subtitle}</p>
            </div>
            <div className={styles.card}>
            <img src={program.image} alt={program.title} className={styles.articleImage} style={{ width: "100%", height: "auto", borderRadius: "16px" }}/>
            <div className={styles.cardBody}>
                {program.sections.map((section, index) => (
                <div key={index} className={styles.section}>
                    <h3 className={styles.sectionTitle}>{section.heading}</h3>
                    {section.text && <p className={styles.text}>{section.text}</p>}
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
