"use client"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import "./ProductsSection.css"
import InforImage1 from "../../assets/images/home_info_1_img.jpg"
import InforImage2 from "../../assets/images/home_info_2_img.jpg"
import InforImage3 from "../../assets/images/home_info_3_img.jpg"
import InforImage4 from "../../assets/images/home_info_4_img.jpg"
import InforImage5 from "../../assets/images/home_info_5_img.jpg"
import InforImage6 from "../../assets/images/home_info_6_img.jpg"
import InforImage7 from "../../assets/images/home_info_7_img.jpg"
import InforImage8 from "../../assets/images/home_info_8_img.jpg"
import { useTranslation } from "react-i18next"

const ProductsSection = () => {
  const { t } = useTranslation()

  const leftValues = [
    {
      title: t("left_1_title"),
      desc: t("left_1_desc"),
      icon: InforImage1,
    },
    {
      title: t("left_2_title"),
      desc: t("left_2_desc"),
      icon: InforImage2,
    },
    {
      title: t("left_3_title"),
      desc: t("left_3_desc"),
      icon: InforImage3,
    },
    {
      title: t("left_4_title"),
      desc: t("left_4_desc"),
      icon: InforImage4,
    },
  ]

  const rightValues = [
    {
      title: t("right_1_title"),
      desc: t("right_1_desc"),
      badge: InforImage5,
    },
    {
      title: t("right_2_title"),
      desc: t("right_2_desc"),
      badge: InforImage6,
    },
    {
      title: t("right_3_title"),
      desc: t("right_3_desc"),
      badge: InforImage7,
    },
    {
      title: t("right_4_title"),
      desc: t("right_4_desc"),
      badge: InforImage8,
    },
  ]

  return (
    <section className="core-values-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h6
              className="section-subtitle text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t("core_values")}
            </motion.h6>
            <motion.h2
              className="section-title2 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("core_values_subtitle")}
            </motion.h2>
            <div className="section-divider"></div>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Left values */}
          <Col md={4}>
            {leftValues.map((item, index) => (
              <motion.div
                key={index}
                className="value-item left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="value-text">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
                <div className="badge-circle">
                  <img src={item.icon} alt={item.title} className="badge-icon" />
                </div>
              </motion.div>
            ))}
          </Col>

          {/* Center image */}
          <Col md={4} className="text-center">
            <motion.img
              src="/images/plant_rice.png"
              alt="Pepper Grinder"
              className="core-image"
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              style={{ marginBottom: "15%" }}
            />
          </Col>

          {/* Right values */}
          <Col md={4}>
            {rightValues.map((item, index) => (
              <motion.div
                key={index}
                className="value-item right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="badge-circle">
                  <img src={item.badge} alt={item.title} className="badge-icon" />
                </div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductsSection
