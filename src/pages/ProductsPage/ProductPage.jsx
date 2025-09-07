"use client"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"

const ProductsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      <Container>
        <Row>
          <Col>
            <h1 className="text-brown mb-4">Sản phẩm</h1>
            <p>Trang sản phẩm đang được phát triển...</p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default ProductsPage
