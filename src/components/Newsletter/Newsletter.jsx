"use client"
import React from "react"
import { useTranslation } from "react-i18next"
import "./Newsletter.css"

const Newsletter = () => {
  const { t } = useTranslation()

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <p className="newsletter-subtitle">
          {t("newsletter.subtitle")}
        </p>

        <h2 className="newsletter-title">{t("newsletter.title")}</h2>

        <div className="newsletter-line">
          <span></span>
        </div>

        <form className="newsletter-form">
          <div className="newsletter-input-wrapper">
            <span className="newsletter-icon">📧</span>
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="newsletter-input"
            />
          </div>
          <button type="submit" className="newsletter-button">
            {t("newsletter.button")}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
