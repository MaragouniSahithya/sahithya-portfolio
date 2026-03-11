"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Download } from "lucide-react";
import styles from "./About.module.css";

const SKILLS_QUICK = [
    "HTML", "CSS", "JavaScript", "React",
    "Next.js", "Node.js", "Express.js", "PostgreSQL",
];

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className={`section-padding ${styles.about}`}>
            <div className="container" ref={ref}>
                {/* Section header */}
                <div className={`${styles.header} ${inView ? styles.visible : ""}`}>
                    <p className="section-tag">
                        <span className="glow-dot" />
                        About me
                    </p>
                    <h2 className="section-title">
                        Crafting digital{" "}
                        <span className="gradient-text">experiences</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* Left – Text & stats */}
                    <div className={`${styles.left} ${inView ? styles.visible : ""}`}>
                        <p className={styles.bio}>
                            I am a passionate full-stack developer who enjoys building modern and user-friendly web applications. I focus on writing clean, maintainable code and continuously improving my problem-solving skills.
                        </p>
                        <p className={styles.bio}>
                            I have experience working with technologies like JavaScript, React, Next.js, Node.js, and SQL databases. I enjoy learning new tools, exploring open-source projects, and building practical applications that solve real problems.
                        </p>
                        <p className={styles.bio}>
                            My goal is to grow as a developer while creating meaningful digital experiences that combine good engineering with thoughtful design.
                        </p>



                        {/* Skills chips */}
                        <div className={styles.chips}>
                            {SKILLS_QUICK.map((skill) => (
                                <span key={skill} className="tag">{skill}</span>
                            ))}
                        </div>

                        <a href="/resume.pdf" className={`btn-ghost ${styles.resume}`} download>
                            <Download size={16} />
                            Download Resume
                        </a>
                    </div>

                    {/* Right – Visual card */}
                    <div className={`${styles.right} ${inView ? styles.visible : ""}`}>
                        <div className={`glass-card ${styles.profileCard}`}>
                            <div className={styles.avatar}>
                                <img src="/profile.png" alt="Sahithya" className={styles.avatarImg} />
                                <div className={styles.avatarRing} />
                            </div>
                            <h3 className={styles.cardName}>Sahithya</h3>
                            <p className={styles.cardTitle}>Full-Stack Developer</p>
                            <div className={styles.cardDivider} />
                            <div className={styles.cardInfo}>
                                <div className={styles.cardRow}>
                                    <span className={styles.cardKey}>Location</span>
                                    <span className={styles.cardVal}>Hyderabad, India 🇮🇳</span>
                                </div>
                                <div className={styles.cardRow}>
                                    <span className={styles.cardKey}>Focus</span>
                                    <span className={styles.cardVal}>Web & Mobile</span>
                                </div>
                                <div className={styles.cardRow}>
                                    <span className={styles.cardKey}>Status</span>
                                    <span className={styles.cardVal}>
                                        <span className={styles.statusDot} />Available
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative orbs */}
                        <div className={styles.decorOrb1} />
                        <div className={styles.decorOrb2} />
                    </div>
                </div>
            </div>
        </section>
    );
}
