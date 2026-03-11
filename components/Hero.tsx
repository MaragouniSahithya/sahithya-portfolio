"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

const TITLES = [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Open Source Contributor",
];

export default function Hero() {
    const [titleIdx, setTitleIdx] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const current = TITLES[titleIdx];
        if (!deleting && displayed.length < current.length) {
            timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
        } else if (!deleting && displayed.length === current.length) {
            timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setTitleIdx((prev) => (prev + 1) % TITLES.length);
        }
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, [displayed, deleting, titleIdx]);

    return (
        <section id="home" className={styles.hero}>
            {/* Animated background orbs */}
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.orb3} />

            {/* Grid pattern */}
            <div className={styles.grid} />

            <div className={`container ${styles.content}`}>
                {/* Badge */}
                <div className={styles.badge}>
                    <Sparkles size={14} />
                    <span>Available for work</span>
                    <span className={styles.badgeDot} />
                </div>

                {/* Heading */}
                <h1 className={styles.heading}>
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">Sahithya</span>
                    <br />
                    <span className={styles.title}>
                        {displayed}
                        <span className={styles.cursor}>|</span>
                    </span>
                </h1>

                {/* Description */}
                <p className={styles.desc}>
                    I&apos;m a passionate developer who enjoys building modern, responsive, and user-friendly web applications. I love turning ideas into real digital experiences while continuously learning new technologies and improving my problem-solving skills.
                </p>

                {/* CTA Buttons */}
                <div className={styles.buttons}>
                    <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                        <Sparkles size={16} />
                        View my work
                    </a>
                    <a href="#contact" className="btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                        Get in touch
                    </a>
                </div>

                {/* Socials */}
                <div className={styles.socials}>
                    <a href="https://github.com/MaragouniSahithya" target="_blank" rel="noreferrer" className={styles.social} aria-label="GitHub">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/sahithya-maragouni/" target="_blank" rel="noreferrer" className={styles.social} aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className={styles.scrollHint}>
                    <ArrowDown size={16} />
                    <span>Scroll to explore</span>
                </div>
            </div>

            {/* Floating code card */}
            <div className={`glass-card ${styles.codeCard}`}>
                <div className={styles.codeDots}>
                    <span style={{ background: "#ff5f57" }} />
                    <span style={{ background: "#ffbd2e" }} />
                    <span style={{ background: "#28c940" }} />
                </div>
                <pre className={styles.codeBlock}><code>{`const dev = {
  name: "Sahithya",
  passion: "Building things",
  coffee: Infinity
};`}</code></pre>
            </div>
        </section>
    );
}
