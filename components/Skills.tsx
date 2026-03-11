"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./Skills.module.css";

const CATEGORIES = [
    {
        category: "Frontend",
        color: "#3b82f6",
        icon: "🖥️",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Bootstrap"],
    },
    {
        category: "Backend",
        color: "#8b5cf6",
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
        category: "Database",
        color: "#06b6d4",
        icon: "🗄️",
        skills: ["MySQL", "PostgreSQL"],
    },
    {
        category: "Tools",
        color: "#ec4899",
        icon: "🛠️",
        skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
];

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="skills" className={`section-padding ${styles.skills}`}>
            <div className="container" ref={ref}>
                {/* Header */}
                <div className={`${styles.header} ${inView ? styles.visible : ""}`}>
                    <p className="section-tag">
                        <span className="glow-dot" />
                        Tech stack
                    </p>
                    <h2 className="section-title">
                        Skills &amp; <span className="gradient-text">technologies</span>
                    </h2>
                    <p className="section-desc">
                        Technologies I use to build modern, responsive web applications.
                    </p>
                </div>

                {/* Category cards */}
                <div className={`${styles.categoryGrid} ${inView ? styles.visible : ""}`}>
                    {CATEGORIES.map((cat, i) => (
                        <div
                            key={cat.category}
                            className={`glass-card ${styles.categoryCard}`}
                            style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
                        >
                            {/* Card header */}
                            <div className={styles.catHeader}>
                                <div
                                    className={styles.catAccent}
                                    style={{ background: cat.color, boxShadow: `0 0 14px ${cat.color}55` }}
                                />
                                <span className={styles.catIcon}>{cat.icon}</span>
                                <h3 className={styles.catTitle} style={{ color: cat.color }}>
                                    {cat.category}
                                </h3>
                            </div>

                            {/* Skill tags */}
                            <div className={styles.tagGroup}>
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={styles.skillTag}
                                        style={{
                                            borderColor: `${cat.color}40`,
                                            color: cat.color,
                                            background: `${cat.color}12`,
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
