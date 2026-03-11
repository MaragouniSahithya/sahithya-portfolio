"use client";
import { Code2, Heart, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                {/* Left */}
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}><Code2 size={16} /></div>
                        <span>Sahithya<span className={styles.dot}>.</span></span>
                    </div>
                    <p className={styles.tagline}>
                        Building digital experiences that matter.
                    </p>
                </div>

                {/* Center – nav links */}
                <nav className={styles.links}>
                    {["Home", "About", "Projects", "Skills", "Contact"].map((label) => (
                        <a
                            key={label}
                            href={`#${label.toLowerCase()}`}
                            className={styles.link}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Right – back to top */}
                <div className={styles.right}>
                    <button
                        className={styles.topBtn}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>

            {/* Bottom bar */}
            <div className={styles.bottomBar}>
                <div className="container">
                    <p className={styles.copy}>
                        © {new Date().getFullYear()} Sahithya. Made with{" "}
                        <Heart size={12} className={styles.heart} fill="currentColor" /> and a lot of coffee.
                    </p>
                </div>
            </div>
        </footer>
    );
}
