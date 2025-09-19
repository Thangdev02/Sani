"use client"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import "./ProductsIntroSection.css"

const ProductsIntroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="products-intro-section py-5" style={{ marginTop: '4%' }}>
      <Container>
        {/* Row 1 */}
        <Row className="align-items-center justify-content-center ">
          <Col md={6} style={{ padding: 0 }}>
            <motion.img
              src="/images/pepper1.jpg"
              alt={t("intro_quality_alt")}
              className="img-fluid shadow"
              style={{ width: '100%', borderRadius: '20px' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Col>
          <Col md={6} style={{ padding: '5%' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <h3 className="mb-3 text-green-title">{t("intro_quality_title")}</h3>
              <p>{t("intro_quality_desc")}</p>
              <button className="mt-3 bt-or">{t("see_now")}</button>
            </motion.div>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row className="align-items-center flex-md-row-reverse">
          <Col md={6} style={{ padding: 0 }}>
            <motion.img
              src="/images/pepper2.jpg"
              alt={t("intro_origin_alt")}
              className="img-fluid shadow"
              style={{ width: '100%', borderRadius: '20px' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Col>
          <Col md={6} style={{ padding: '5%' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <h3 className="mb-3 text-green-title">{t("intro_origin_title")}</h3>
              <p>{t("intro_origin_desc")}</p>
              <button className="mt-3 bt-g">{t("see_now")}</button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductsIntroSection
