"use client"
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import "./ProductsIntroSection.css"

const ProductsIntroSection = () => {
  const [sections, setSections] = useState([])

  // Gọi API để lấy dữ liệu section
  const fetchSections = async () => {
    try {
      const res = await fetch("https://ads.eposh.io.vn/api/v1/settings/sections")
      const data = await res.json()
      setSections(data?.data || [])
    } catch (err) {
      console.error("Load sections error:", err)
    }
  }

  useEffect(() => {
    fetchSections()
  }, [])

  return (
    <section className="products-intro-section py-5" style={{ marginTop: "4%" }}>
      <Container>
        {sections.length > 0 ? (
          sections.map((item, index) => (
            <Row
              key={item.id}
              className={`align-items-center ${
                index % 2 !== 0 ? "flex-md-row-reverse" : ""
              } mb-5`}
            >
              {/* Cột hình ảnh */}
              <Col md={6} style={{ padding: 0 }}>
                <motion.img
                  src={
                    item.url?.startsWith("http")
                      ? item.url
                      : `https://ads.eposh.io.vn/${item.url}`
                  }
                  alt={item.title}
                  className="img-fluid shadow"
                  style={{ width: "100%", borderRadius: "20px" }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </Col>

              {/* Cột nội dung */}
              <Col md={6} style={{ padding: "5%" }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h3 className="mb-3 text-green-title">{item.title}</h3>
                  <p>{item.description}</p>
                  <button
                    className={`mt-3 ${index % 2 === 0 ? "bt-or" : "bt-g"}`}
                  >
                    See now
                  </button>
                </motion.div>
              </Col>
            </Row>
          ))
        ) : (
          <p className="text-center text-muted">
            No product introduction data yet.
          </p>
        )}
      </Container>
    </section>
  )
}

export default ProductsIntroSection
