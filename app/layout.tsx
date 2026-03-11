import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahithya | Full-Stack Developer Portfolio",
  description: "Sahithya – a passionate full-stack developer building fast, scalable, and beautiful web experiences. Explore my projects, skills, and get in touch.",
  keywords: ["full-stack developer", "portfolio", "React", "Next.js", "Node.js", "Sahithya"],
  authors: [{ name: "Sahithya" }],
  openGraph: {
    title: "Sahithya | Full-Stack Developer",
    description: "Explore my portfolio – projects, skills, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
