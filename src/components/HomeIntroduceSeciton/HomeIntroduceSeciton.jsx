"use client"
import { useEffect, useState } from "react"
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"
import { motion } from "framer-motion"
import axios from "axios"
import "./HomeIntroduceSeciton.css"

const HomeIntroduceSeciton = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // ✅ Call API lấy dữ liệu
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("https://ads.eposh.io.vn/api/v1/settings/products")
        if (res.data?.data?.length > 0) {
          setProduct(res.data.data[0]) // chỉ có 1 item duy nhất
        }
      } catch (err) {
        console.error("Error fetching product section:", err)
        setError("Failed to load product section.")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="success" />
      </div>
    )
  }

  if (error) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger">{error}</Alert>
      </Container>
    )
  }

  if (!product) return null

  return (
    <section className="product-detail-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left - Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <motion.img
              src={`https://ads.eposh.io.vn/${product.image}`}
              alt={product.title}
              className="img-fluid rounded-4 product-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Col>

          {/* Right - Content */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <motion.p
              className="section-subtitle text-uppercase fw-semibold text-success"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {product.title}
            </motion.p>

            <motion.h2
              className="text-green-title text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {product.subTitle}
            </motion.h2>

            <div className="divider mb-4 mx-auto"></div>

            {/* ✅ Hiển thị HTML từ API */}
            <motion.div
              className="product-description"
              dangerouslySetInnerHTML={{ __html: product.description }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeIntroduceSeciton
