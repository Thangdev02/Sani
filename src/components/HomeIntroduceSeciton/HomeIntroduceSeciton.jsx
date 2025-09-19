"use client"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import "./HomeIntroduceSeciton.css"

const HomeIntroduceSeciton = () => {
  const { t } = useTranslation()

  const details = [
    {
      title: t("safe"),
      description: t("safe_desc"),
    },
    {
      title: t("clean_products"),
      description: t("clean_products_desc"),
    },
    {
      title: t("packaging"),
      description: t("packaging_desc"),
    },
  ]

  return (
    <section className="product-detail-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left - image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <motion.img
              src="/images/pkr.png"
              alt={t("pepper_alt")}
              className="img-fluid product-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Col>

          {/* Right - content */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("details_packaging")}
            </motion.p>
            <motion.h2
              className="text-green-title text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t("sani_products")}
            </motion.h2>
            <div className="divider mb-4 mx-auto"></div>

            <ul className="list-unstyled">
              {details.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="d-flex mb-4 gap-4 align-items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/images/checkIcon.png"
                    alt="check"
                    className="check-icon me-3"
                    style={{ width: "10%", height: "10%" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-1">{item.title}</h5>
                    <p className="mb-0 text-muted">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomeIntroduceSeciton
