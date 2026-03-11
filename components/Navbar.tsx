"use client";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Code2 } from "lucide-react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = NAV_LINKS.map((l) => l.href.slice(1));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = useCallback((href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
                <div className={`container ${styles.inner}`}>
                    {/* Logo */}
                    <a
                        href="#home"
                        className={styles.logo}
                        onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
                    >
                        <div className={styles.logoIcon}>
                            <Code2 size={18} />
                        </div>
                        <span>Sahithya<span className={styles.logoDot}>.</span></span>
                    </a>

                    {/* Desktop Links */}
                    <ul className={styles.links}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.active : ""}`}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                >
                                    {link.label}
                                    <span className={styles.linkUnderline} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className={`btn-primary btn-sm ${styles.cta}`}
                        onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                    >
                        Hire me
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ""}`}>
                <ul className={styles.mobileLinks}>
                    {NAV_LINKS.map((link, i) => (
                        <li
                            key={link.href}
                            style={{ animationDelay: `${i * 0.07}s` }}
                            className={`${styles.mobileItem} ${mobileOpen ? styles.slideIn : ""}`}
                        >
                            <a
                                href={link.href}
                                className={`${styles.mobileLink} ${activeSection === link.href.slice(1) ? styles.activeMobile : ""}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            >
                                <span className={styles.mobileNum}>0{i + 1}.</span>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className={`${styles.mobileItem} ${mobileOpen ? styles.slideIn : ""}`}
                        style={{ animationDelay: `${NAV_LINKS.length * 0.07}s` }}>
                        <a
                            href="#contact"
                            className="btn-primary"
                            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                        >
                            Hire me
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
