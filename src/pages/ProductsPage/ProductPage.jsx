"use client"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button, Card, Badge, Dropdown, Spinner } from "react-bootstrap"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next" // 👈 thêm i18n
import "./ProductPage.css"
import { getProducts } from "../../services/api"
import { useLanguage } from "../../LanguageContext"

const ProductPage = () => {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // ✅ chuyển sang lấy label động từ i18n
  const sortOptions = [
    { label: t("sort.newest"), value: "newest" },
    { label: t("sort.oldest"), value: "oldest" },
    { label: t("sort.priceAsc"), value: "priceAsc" },
    { label: t("sort.priceDesc"), value: "priceDesc" },
    { label: t("sort.az"), value: "az" },
    { label: t("sort.za"), value: "za" },
    { label: t("sort.bestseller"), value: "bestseller" },
  ]

  const categories = [
    { label: t("categories.all"), value: "all" },
    { label: t("categories.gao"), value: "gao" },
    { label: t("categories.nui"), value: "nui" },
    { label: t("categories.banhcanh"), value: "banhcanh" },
    { label: t("categories.bun"), value: "bun" },
    { label: t("categories.pho"), value: "pho" },
    { label: t("categories.hutieu"), value: "hutieu" },
  ]

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await getProducts(1, 10, language)
        setProducts(data)
        setFilteredProducts(data)
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [language])

  useEffect(() => {
    let temp = [...products]
    if (activeCategory !== "all") {
      temp = temp.filter(
        (p) => p.category && p.category.toLowerCase() === activeCategory.toLowerCase()
      )
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
        temp.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
        break
      case "newest":
        temp.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
        break
      default:
        break
    }

    setFilteredProducts(temp)
  }, [activeCategory, sortBy, products])

  return (
    <section className="products-page" style={{ padding: "4% 0", fontFamily: "Montserrat" }}>
      <Container>
        {/* Header */}
        <Row className="mb-4 align-items-center">
          <Col>
            <h2 className="section-title">{t("productPage.allProducts")}</h2>
            <p className="section-subtitle">
              {filteredProducts.length} {t("productPage.products")}
            </p>
          </Col>
          <Col className="text-end">
            <Dropdown onSelect={(val) => setSortBy(val || "newest")}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {t("productPage.sortBy")}: {sortOptions.find((s) => s.value === sortBy)?.label}
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
          {categories.map((cat) => (
            <Col xs="auto" key={cat.value}>
              <Button
                variant={activeCategory === cat.value ? "danger" : "outline-secondary"}
                onClick={() => setActiveCategory(cat.value)}
                className="category-btn mb-3"
              >
                {cat.label}
              </Button>
            </Col>
          ))}
        </Row>

        {/* Loading state */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
            <p className="mt-3">{t("productPage.loading")}</p>
          </div>
        ) : (
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
                    className="product-card  shadow-sm"
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
                      style={{ height: "300px", objectFit: "contain" }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="product-name" style={{ fontSize: "1rem" }}>{product.name}</Card.Title>
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
        )}
      </Container>
    </section>
  )
}

export default ProductPage
