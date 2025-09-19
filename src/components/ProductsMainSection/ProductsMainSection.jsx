"use client"
import { useState, useEffect } from "react"
import { Container, Row, Col, Button, Card, Badge, Spinner } from "react-bootstrap"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import "./ProductsMainSection.css"
import { getProducts } from "../../services/api"

const ProductsMainSection = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("all")
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const categories = [
    { label: "Tất cả", value: "all" },
    { label: "Gạo", value: "gao" },
    { label: "Nui", value: "nui" },
    { label: "Bún", value: "bun" },
    { label: "Bánh Canh", value: "banhcanh" },
    { label: "Hủ Tiếu", value: "hutieu" },
    { label: "Phở", value: "pho" }
  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getProducts(1, 50)
        setProducts(data)
      } catch (err) {
        console.error("Error fetching products:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // lọc sản phẩm theo category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category?.toLowerCase() === activeCategory)

  return (
    <section className="products-section" style={{ padding: "4% 0" }}>
      <Container>
        {/* Header */}
        <Row className="text-center mb-4">
          <Col>
            <p className="section-subtitle">{t("high_quality_products")}</p>
            <h2 className="text-green-title">{t("clean_safe_foods")}</h2>
            <div className="divider mx-auto"></div>
          </Col>
        </Row>

        {/* Filter buttons */}
        <Row className="justify-content-center mb-4">
          {categories.map((cat) => (
            <Col xs="auto" key={cat.value}>
              <Button
                variant={activeCategory === cat.value ? "danger" : "outline-secondary"}
                className="category-btn mb-3"
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </Button>
            </Col>
          ))}
        </Row>

        {/* Products grid */}
        <Row>
          {loading ? (
            <Col className="text-center">
              <Spinner animation="border" />
            </Col>
          ) : filteredProducts.length === 0 ? (
            <Col className="text-center">
              <p>{t("no_products")}</p>
            </Col>
          ) : (
            filteredProducts.map((product, index) => (
              <Col lg={4} md={6} className="mb-4" key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="product-card shadow-sm" style={{ height: "600px" }}>
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
            ))
          )}
        </Row>
      </Container>
    </section>
  )
}

export default ProductsMainSection
