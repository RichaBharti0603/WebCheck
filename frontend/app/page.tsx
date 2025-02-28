"use client"; // Client-side rendering

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"; // Import styles
import { motion } from "framer-motion"; // For animations

export default function Home() {
  return (
    <div className={styles.container}>
      
      {/* 🚀 Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/WebCheck.png" alt="WebCheck Logo" width={50} height={50} />
          <h2>WebCheck</h2>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/report">Website Report</Link>
          <Link href="/improve">Improve Your Website</Link>
          <Link href="/alerts">Alerts & Updates</Link>
          <Link href="/support">Support & Help</Link>
          <Link href="/signup" className={styles.signupButton}>Get Started</Link>
        </nav>
      </header>

      {/* 🚀 Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className={styles.heroContent}
        >
          <h1 className={styles.title}>Optimize Your Website with <span>WebCheck</span></h1>
          <p className={styles.description}>
            Get real-time insights, enhance SEO, and improve performance with our AI-powered analysis.
          </p>
          <Link href="/signup">
            <motion.button 
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

        <motion.div 
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        >
          <Image src="/LandingPagePhoto.jpg" alt="Website Analysis" width={250} height={250} />
        </motion.div>
      </section>

      {/* 🚀 Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.featureGrid}>
          {[ // Feature Cards Array
            { title: "Speed Analysis", img: "/SpeedAnalysis.jpg", text: "Boost website speed for a seamless user experience." },
            { title: "SEO Checker", img: "/SEOChecker.jpg", text: "Enhance search rankings with our advanced SEO tools." },
            { title: "Security Audit", img: "/Security.jpg", text: "Detect vulnerabilities and keep your website safe." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.featureCard}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={feature.img} alt={feature.title} width={60} height={60} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/report">Website Report</Link>
          <Link href="/improve">Improve Your Website</Link>
          <Link href="/alerts">Alerts & Updates</Link>
          <Link href="/support">Support & Help</Link>
        </div>
        <p>© 2025 WebCheck. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <Link href="https://twitter.com/yourhandle">
            <Image src="/Twitter.jpg" alt="Twitter" width={30} height={30} />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile">
            <Image src="/linkeldln.jpg" alt="LinkedIn" width={30} height={30} />
          </Link>
          <Link href="https://github.com/yourrepo">
            <Image src="/Github.jpg" alt="GitHub" width={30} height={30} />
          </Link>
        </div>
      </footer>

    </div>
  );
}
