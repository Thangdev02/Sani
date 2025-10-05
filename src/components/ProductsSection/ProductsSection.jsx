"use client"
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import axios from "axios"
import "./ProductsSection.css"

const ProductsSection = () => {
  const [coreValues, setCoreValues] = useState([])

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const res = await axios.get("https://ads.eposh.io.vn/api/v1/settings/core-values")
        setCoreValues(res.data.data || [])
      } catch (err) {
        console.error("Fetch core values error:", err)
      }
    }
    fetchValues()
  }, [])

  if (!coreValues.length) return null

  const baseUrl = "https://ads.eposh.io.vn/"
  const leftValues = coreValues.slice(0, 4)
  const rightValues = coreValues.slice(4, 8)

  return (
    <section className="core-values-section">
      <Container>
        {/* Header */}
        <Row className="text-center mb-5">
          <Col>
            <motion.h6
              className="section-subtitle text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Core Values
            </motion.h6>
            <motion.h2
              className="section-title2 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What We Believe
            </motion.h2>
            <div className="section-divider"></div>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Left values */}
          <Col md={4}>
            {leftValues.map((item, index) => (
              <motion.div
                key={item.id}
                className="value-item left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="value-text">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
                <div className="badge-circle">
                  <img
                    src={`${baseUrl}${item.icon}`}
                    alt={item.title}
                    className="badge-icon"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              </motion.div>
            ))}
          </Col>

          {/* Center image */}
          <Col md={4} className="text-center">
            <motion.img
              src={`${baseUrl}${coreValues[0].mainImage}`}
              alt="Core Value Center"
              className="core-image"
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              style={{ marginBottom: "15%", borderRadius: "20px" }}
            />
          </Col>

          {/* Right values */}
          <Col md={4}>
            {rightValues.map((item, index) => (
              <motion.div
                key={item.id}
                className="value-item right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="badge-circle">
                  <img
                    src={`${baseUrl}${item.icon}`}
                    alt={item.title}
                    className="badge-icon"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <div className="value-text">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductsSection
