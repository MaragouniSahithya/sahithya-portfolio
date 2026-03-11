"use client";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle2, AlertCircle } from "lucide-react";
import styles from "./Contact.module.css";

const SOCIALS = [
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/MaragouniSahithya", username: "MaragouniSahithya" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/sahithya-maragouni/", username: "sahithya-maragouni" },
];

const INFO = [
    { icon: <Mail size={18} />, label: "Email", value: "sahithyamaragouni2004@gmail.com" },
    { icon: <MapPin size={18} />, label: "Location", value: "Hyderabad, India" },
    { icon: <Phone size={18} />, label: "Availability", value: "Open to opportunities" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [status, setStatus] = useState<Status>("idle");
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1800));
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
    };

    return (
        <section id="contact" className={`section-padding ${styles.contact}`}>
            <div className="container" ref={ref}>
                {/* Header */}
                <div className={`${styles.header} ${inView ? styles.visible : ""}`}>
                    <p className="section-tag">
                        <span className="glow-dot" />
                        Get in touch
                    </p>
                    <h2 className="section-title">
                        Let&apos;s work <span className="gradient-text">together</span>
                    </h2>
                    <p className="section-desc">
                        Have a project in mind, or just want to say hi? I&apos;m always open to
                        new opportunities and conversations.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Left – Info */}
                    <div className={`${styles.left} ${inView ? styles.visible : ""}`}>
                        <div className={`glass-card ${styles.infoCard}`}>
                            <h3 className={styles.infoTitle}>Contact info</h3>
                            <div className={styles.infoList}>
                                {INFO.map((item) => (
                                    <div key={item.label} className={styles.infoRow}>
                                        <div className={styles.infoIcon}>{item.icon}</div>
                                        <div>
                                            <div className={styles.infoLabel}>{item.label}</div>
                                            <div className={styles.infoValue}>{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.divider} />

                            <h3 className={styles.infoTitle}>Find me on</h3>
                            <div className={styles.socialsList}>
                                {SOCIALS.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialRow}>
                                        <div className={styles.socialIcon}>{s.icon}</div>
                                        <div>
                                            <div className={styles.socialLabel}>{s.label}</div>
                                            <div className={styles.socialHandle}>{s.username}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right – Form */}
                    <div className={`${styles.right} ${inView ? styles.visible : ""}`}>
                        <div className={`glass-card ${styles.formCard}`}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.row2}>
                                    <div className={styles.field}>
                                        <label className={styles.label}>Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className={styles.input}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label className={styles.label}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className={styles.input}
                                        />
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label className={styles.label}>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project collaboration"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label className={styles.label}>Message</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        className={styles.textarea}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending" || status === "success"}
                                    className={`btn-primary ${styles.submitBtn} ${status === "success" ? styles.success : ""}`}
                                >
                                    {status === "idle" && <><Send size={16} /> Send message</>}
                                    {status === "sending" && <><div className={styles.spinner} /> Sending...</>}
                                    {status === "success" && <><CheckCircle2 size={16} /> Message sent!</>}
                                    {status === "error" && <><AlertCircle size={16} /> Try again</>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
