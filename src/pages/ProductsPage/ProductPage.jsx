"use client"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button, Card, Badge, Dropdown } from "react-bootstrap"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import "./ProductPage.css"
import { products as allProducts } from "../../../api/data" // import trực tiếp

const sortOptions = [
  { label: "Mới nhất", value: "newest" },
  { label: "Cũ nhất", value: "oldest" },
  { label: "Giá: Tăng dần", value: "priceAsc" },
  { label: "Giá: Giảm dần", value: "priceDesc" },
  { label: "Tên: A-Z", value: "az" },
  { label: "Tên: Z-A", value: "za" },
  { label: "Bán chạy nhất", value: "bestseller" },
]

const ProductPage = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const navigate = useNavigate()

  // Load dữ liệu từ data.js
  useEffect(() => {
    setProducts(allProducts)
    setFilteredProducts(allProducts)
  }, [])

  // Lọc và sắp xếp
  useEffect(() => {
    let temp = [...products]
    if (activeCategory !== "all") {
      temp = temp.filter((p) => p.category === activeCategory)
    }

    switch (sortBy) {
      case "priceAsc":
        temp.sort((a, b) => a.price - b.price)
        break
      case "priceDesc":
        temp.sort((a, b) => b.price - a.price)
        break
      case "az":
        temp.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "za":
        temp.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "oldest":
        temp.sort((a, b) => a.id - b.id)
        break
      case "newest":
        temp.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    setFilteredProducts(temp)
  }, [activeCategory, sortBy, products])

  return (
    <section className="products-page" style={{ padding: "4% 0", fontFamily: "Monserrat" }}>
      <Container>
        {/* Header */}
        <Row className="mb-4 align-items-center">
          <Col>
            <h2 className="section-title">Tất cả sản phẩm</h2>
            <p className="section-subtitle">{filteredProducts.length} sản phẩm</p>
          </Col>
          <Col className="text-end">
            <Dropdown onSelect={(val) => setSortBy(val || "newest")}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Sắp xếp theo: {sortOptions.find((s) => s.value === sortBy)?.label}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {sortOptions.map((opt) => (
                  <Dropdown.Item key={opt.value} eventKey={opt.value}>
                    {opt.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Category filter */}
        <Row className="justify-content-center mb-4">
          {["all","gao","nui","bun","banhcanh","hutieu","pho"].map((cat) => (
            <Col xs="auto" key={cat}>
              <Button
                variant={activeCategory === cat ? "danger" : "outline-secondary"}
                onClick={() => setActiveCategory(cat)}
                className="category-btn"
              >
                {cat === "all" ? "Tất cả" : cat.charAt(0).toUpperCase() + cat.slice(1)}
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
                <Card
                  className="product-card h-100 shadow-sm"
                  onClick={() => navigate(`/san-pham/${product.id}`)}
                  style={{ cursor: "pointer" }}
                >
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
                      <span className="new-price">{product.price.toLocaleString()}₫</span>
                      {product.oldPrice && (
                        <span className="old-price ms-2">{product.oldPrice.toLocaleString()}₫</span>
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

export default ProductPage
