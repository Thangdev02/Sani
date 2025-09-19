"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./IntroductionPage.css";

const IntroductionPage = () => {
  const { t } = useTranslation();

  // --- State cho phần Chất lượng sản phẩm ---
  const [activeImage, setActiveImage] = useState("/images/about03_slide_1_img.jpg");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/about03_slide_1_img.jpg",
    "https://theme.hstatic.net/200000666963/1001343745/14/about03_slide_2_img.jpg?v=124",
    "https://theme.hstatic.net/200000666963/1001343745/14/about03_slide_3_img.jpg?v=124",
  ];

  const handleNext = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const handleBack = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const qualitiesLeft = [
    { title: t("intro.quality.title1"), desc: t("intro.quality.desc1"), img: "/images/about03_service_quanlity_1_img.jpg" },
    { title: t("intro.quality.title2"), desc: t("intro.quality.desc2"), img: "/images/about03_service_quanlity_2_img.jpg" },
    { title: t("intro.quality.title3"), desc: t("intro.quality.desc3"), img: "/images/about03_service_quanlity_3_img.jpg" },
  ];

  const qualitiesRight = [
    { title: t("intro.quality.title4"), desc: t("intro.quality.desc4"), img: "/images/about03_service_quanlity_4_img.jpg" },
    { title: t("intro.quality.title5"), desc: t("intro.quality.desc5"), img: "/images/about03_service_quanlity_5_img.jpg" },
    { title: t("intro.quality.title6"), desc: t("intro.quality.desc6"), img: "/images/about03_service_quanlity_6_img.jpg" },
  ];

  return (
    <div className="introduction-page" style={{ fontFamily: "Monserrat" }}>
      {/* --- Section 1: Giới thiệu --- */}
      <section className="intro-section">
        <div className="intro-content">
          <motion.div
            className="intro-image"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-frame">
              <img src={images[currentImageIndex]} alt="About SANI" />
            </div>
            <div className="navigation-buttons">
              <button className="nav-button back" onClick={handleBack}>&larr;</button>
              <button className="nav-button next" onClick={handleNext}>&rarr;</button>
            </div>
          </motion.div>

          <motion.div
            className="intro-text"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4>{t("intro.subtitle")}</h4>
            <h2>{t("intro.title")}</h2>
            <p>{t("intro.desc1")}</p>
            <p>{t("intro.desc2")}</p>
            <button className="btn-primary">{t("intro.button")}</button>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Chất lượng sản phẩm --- */}
      <section className="quality-section">
        <h2 className="section-title text-white">{t("intro.quality.title")}</h2>
        <div className="quality-content">
          <div className="quality-left">
            {qualitiesLeft.map((q, i) => (
              <motion.div
                key={i}
                className="quality-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                onMouseEnter={() => setActiveImage(q.img)}
              >
                <h4>{q.title}</h4>
                <p>{q.desc}</p>
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
            {qualitiesRight.map((q, i) => (
              <motion.div
                key={i}
                className="quality-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                onMouseEnter={() => setActiveImage(q.img)}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h4>{q.title}</h4>
                <p>{q.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Về chúng tôi --- */}
      <section className="about-section">
        <h2 className="section-title">{t("intro.about.title")}</h2>
        <div className="about-timeline">
          <motion.div className="about-item">
            <img src="/images/about03_story_1_img.jpg" alt="About 1" />
            <div className="about-text">
              <span>20-11-2022</span>
              <h4>{t("intro.about.item1.title")}</h4>
              <p>{t("intro.about.item1.desc")}</p>
            </div>
          </motion.div>

          <motion.div className="about-item reverse">
            <img src="/images/about03_story_2_img.jpg" alt="About 2" />
            <div className="about-text highlight text-end">
              <span className="text-white">30-11-2022</span>
              <h4>{t("intro.about.item2.title")}</h4>
              <p>{t("intro.about.item2.desc")}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntroductionPage;
