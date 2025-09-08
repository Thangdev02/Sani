"use client"
import { useState } from "react"
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap"
import { motion } from "framer-motion"
import "./ProductsMainSection.css"

// import trực tiếp data
import { products as allProducts } from "../../../api/data" // tùy đường dẫn file data.js

const categories = [
  { label: "Tiêu", value: "tieu" },
  { label: "Quế", value: "que" },
  { label: "Nghệ", value: "nghe" },
  { label: "Các sản phẩm hữu cơ", value: "huuco" }
]

const ProductsMainSection = () => {
  const [activeCategory, setActiveCategory] = useState("tieu")

  // lọc sản phẩm theo category
  const filteredProducts = allProducts.filter(p => p.category === activeCategory)

  return (
    <section className="products-section" style={{ padding: "4% 0" }}>
      <Container>
        {/* Header */}
        <Row className="text-center mb-4">
          <Col>
            <p className="section-subtitle">Sản phẩm đạt chất lượng cao</p>
            <h2 className="section-title">Gia vị sạch & An Toàn</h2>
            <div className="divider mx-auto"></div>
          </Col>
        </Row>

        {/* Filter buttons */}
        <Row className="justify-content-center mb-4">
          {categories.map((cat) => (
            <Col xs="auto" key={cat.value}>
              <Button
                variant={activeCategory === cat.value ? "danger" : "outline-secondary"}
                className="category-btn"
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </Button>
            </Col>
          ))}
        </Row>

        {/* Products grid */}
        <Row>
          {filteredProducts.map((product, index) => (
            <Col lg={4} md={6} className="mb-4" key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="product-card h-100 shadow-sm">
                  {/* discount badge */}
                  {product.discount && (
                    <Badge bg="danger" className="discount-badge">
                      -{product.discount}%
                    </Badge>
                  )}

                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="p-3"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="product-name">{product.name}</Card.Title>
                    <Card.Text className="product-price">
                      <span className="new-price">
                        {product.price.toLocaleString()}₫
                      </span>
                      {product.oldPrice && (
                        <span className="old-price ms-2">
                          {product.oldPrice.toLocaleString()}₫
                        </span>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProductsMainSection
