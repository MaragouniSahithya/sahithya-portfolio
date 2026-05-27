"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, ExternalLink, Dumbbell, Wallet, Activity } from "lucide-react";
import styles from "./Projects.module.css";

const PROJECTS = [
    {
        title: "FitForge",
        description:
            "An AI-powered personalized diet and fitness planning platform that creates customized 7-day workout and nutrition plans based on individual health data and fitness goals. The application uses Google Gemini AI to generate smart recommendations, supports secure user authentication, tracks daily progress, and provides AI-generated motivational check-ins for a personalized fitness journey.",
        tags: ["Node.js", "Express.js", "MongoDB", "Google Gemini AI", "JWT", "JavaScript"],
        gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
        github: "https://github.com/MaragouniSahithya/FitForge",
        demo: "https://fit-forge-roan.vercel.app",
        icon: Dumbbell,
    },
    {
        title: "SplitEase",
        description:
            "A full-stack expense-sharing web application designed to simplify group expense management. Users can create groups, split bills among members, calculate balances in real time, and track payments through a clean and responsive interface. The system provides an efficient way to manage shared expenses for friends, roommates, and teams.",
        tags: ["React.js", "Node.js", "Express.js", "JavaScript"],
        gradient: "linear-gradient(135deg, #22c55e, #06b6d4)",
        github: "https://github.com/MaragouniSahithya/SplitEase",
        demo: "https://split-ease-rust.vercel.app",
        icon: Wallet,
    },
    {
        title: "Xtream Fitness Gym",
        description:
            "A modern and responsive fitness website developed using React that showcases gym services, workout programs, membership plans, and trainer information. The platform provides users with an engaging experience to explore fitness programs, learn about the gym, and take action through a clean UI.",
        tags: ["React.js", "JavaScript", "CSS"],
        gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
        github: "https://github.com/MaragouniSahithya/xtreme-fitness-gym",
        demo: "https://xtremefitnessclub.vercel.app",
        icon: Activity,
    },
];

export default function Projects() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="projects" className={`section-padding ${styles.projects}`}>
            <div className="container" ref={ref}>
                {/* Header */}
                <div className={`${styles.header} ${inView ? styles.visible : ""}`}>
                    <p className="section-tag">
                        <span className="glow-dot" />
                        My work
                    </p>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">projects</span>
                    </h2>
                    <p className="section-desc">
                        A curated selection of things I&apos;ve built — from side projects to
                        production apps powering real users.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {PROJECTS.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <article
                                key={p.title}
                                className={`glass-card ${styles.card} ${inView ? styles.cardVisible : ""}`}
                                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
                            >
                                {/* Gradient top bar */}
                                <div className={styles.cardBar} style={{ background: p.gradient }} />

                                {/* Card header */}
                                <div className={styles.cardTop}>
                                    <div className={styles.cardIcon} style={{ background: p.gradient }}>
                                        <Icon size={20} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className={styles.cardTitle}>{p.title}</h3>
                                <p className={styles.cardDesc}>{p.description}</p>

                                {/* Tags */}
                                <div className={styles.tags}>
                                    {p.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className={styles.cardFooter}>
                                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.githubBtn}>
                                        <Github size={14} />
                                        GitHub Repository
                                    </a>
                                    <a href={p.demo} target="_blank" rel="noreferrer" className={styles.demoBtn}>
                                        <ExternalLink size={14} />
                                        Live Demo
                                    </a>
                                </div>

                                {/* Hover glow */}
                                <div className={styles.cardGlow} style={{ background: p.gradient }} />
                            </article>
                        );
                    })}
                </div>

                {/* View all link */}
                <div className={`${styles.viewAll} ${inView ? styles.visible : ""}`}>
                    <a href="https://github.com/MaragouniSahithya" target="_blank" rel="noreferrer" className="btn-ghost">
                        <Github size={16} />
                        View all on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

