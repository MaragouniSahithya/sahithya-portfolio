"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const PROJECTS = [
    {
        title: "SplitEase",
        description:
            "A full-stack bill-splitting web application built with React.js and Node.js/Express, enabling users to split expenses among groups with real-time calculations and a clean responsive UI.",
        tags: ["React.js", "Node.js", "Express.js", "JavaScript"],
        gradient: "linear-gradient(135deg, #22c55e, #06b6d4)",
        github: "https://github.com/MaragouniSahithya/SplitEase",
        demo: "https://split-ease-rust.vercel.app",
    },
    {
        title: "Xtream Fitness Gym",
        description:
            "A responsive fitness website built using React that showcases gym services, workout sections, and membership information with a modern UI.",
        tags: ["React.js", "JavaScript", "CSS"],
        gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
        github: "https://github.com/MaragouniSahithya/xtreme-fitness-gym",
        demo: "https://xtremefitnessclub.vercel.app",
    },
    {
        title: "My Book List",
        description:
            "A full-stack web application that allows users to add, manage, and remove books from a personal collection with persistent data storage.",
        tags: ["Node.js", "Express.js", "JavaScript", "Database"],
        gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        github: "https://github.com/MaragouniSahithya/my-book-list",
        demo: "https://github.com/MaragouniSahithya/my-book-list",
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
                    {PROJECTS.map((p, i) => (
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
                                    {p.title[0]}
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
                    ))}
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
