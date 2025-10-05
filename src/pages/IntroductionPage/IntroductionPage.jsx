"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./IntroductionPage.css";

const API_BASE = "https://ads.eposh.io.vn/api/v1/settings";

const IntroductionPage = () => {
  const [introductions, setIntroductions] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeImage, setActiveImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- Fetch all API ---
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [introRes, quantityRes, sectionRes] = await Promise.all([
          axios.get(`${API_BASE}/about-introductions`),
          axios.get(`${API_BASE}/quantity-products`),
          axios.get(`${API_BASE}/about-sections`),
        ]);

        const introData = introRes.data.data || [];
        const quantityData = quantityRes.data.data || [];
        const sectionData = sectionRes.data.data || [];

        setIntroductions(introData);
        setQuantities(quantityData);
        setSections(sectionData);

        if (quantityData.length > 0) {
          setActiveImage(`https://ads.eposh.io.vn/${quantityData[0].mainImageUrl}`);
        }
      } catch (err) {
        console.error("❌ Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const handleNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % introductions.length);
  const handleBack = () =>
    setCurrentImageIndex((prev) => (prev - 1 + introductions.length) % introductions.length);

  if (loading)
    return <div className="text-center py-5 text-white">Loading Introduction...</div>;

  const currentIntro = introductions[currentImageIndex];

  return (
    <div className="introduction-page" style={{ fontFamily: "Monserrat" }}>
      {/* --- Section 1: Giới thiệu --- */}
      {currentIntro && (
        <section className="intro-section">
          <div className="intro-content">
            <motion.div
              className="intro-image"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-frame">
                <img
                  src={`https://ads.eposh.io.vn/${currentIntro.imageUrl}`}
                  alt="About"
                />
              </div>
              {introductions.length > 1 && (
                <div className="navigation-buttons">
                  <button className="nav-button back" onClick={handleBack}>
                    &larr;
                  </button>
                  <button className="nav-button next" onClick={handleNext}>
                    &rarr;
                  </button>
                </div>
              )}
            </motion.div>

            <motion.div
              className="intro-text"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h4>{currentIntro.subTitle}</h4>
              <h2>{currentIntro.title}</h2>
              <p>{currentIntro.description}</p>
              <button className="btn-primary">Learn More</button>
            </motion.div>
          </div>
        </section>
      )}

      {/* --- Section 2: Chất lượng sản phẩm --- */}
      {quantities.length > 0 && (
        <section className="quality-section">
          <h2 className="section-title text-white">
            {quantities[0].sectionTitle}
          </h2>
          <div className="quality-content">
            <div className="quality-left">
              {quantities.slice(0, Math.ceil(quantities.length / 2)).map((item, i) => (
                <motion.div
                  key={item.id}
                  className="quality-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  onMouseEnter={() =>
                    setActiveImage(`https://ads.eposh.io.vn/${item.mainImageUrl}`)
                  }
                >
                  <h4>{item.sectionTitle}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="quality-image"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                key={activeImage}
                src={activeImage}
                alt="Product Quality"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            <div className="quality-right">
              {quantities.slice(Math.ceil(quantities.length / 2)).map((item, i) => (
                <motion.div
                  key={item.id}
                  className="quality-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  onMouseEnter={() =>
                    setActiveImage(`https://ads.eposh.io.vn/${item.mainImageUrl}`)
                  }
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h4>{item.sectionTitle}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Section 3: Về chúng tôi --- */}
      {sections.length > 0 && (
        <section className="about-section">
          <h2 className="section-title">About Us</h2>
          <div className="about-timeline">
            {sections.map((item, index) => (
              <motion.div
                key={item.id}
                className={`about-item ${index % 2 !== 0 ? "reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={`https://ads.eposh.io.vn/${item.image}`}
                  alt={item.title}
                />
                <div
                  className={`about-text ${
                    index % 2 !== 0 ? "highlight text-end text-white" : ""
                  }`}
                >
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default IntroductionPage;
