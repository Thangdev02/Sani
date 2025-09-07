"use client"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"

const AboutPage = () => {
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
            <h1 className="text-brown mb-4">Giới thiệu</h1>
            <p>Trang giới thiệu đang được phát triển...</p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default AboutPage
