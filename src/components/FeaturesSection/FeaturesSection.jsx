import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import growthIcon from "../../assets/images/home_feature_1_img.jpg"
import originIcon from "../../assets/images/home_feature_2_img.jpg"
import factoryIcon from "../../assets/images/home_feature_3_img.jpg"
import qualityIcon from "../../assets/images/home_feature_4_img.jpg"
import "./FeaturesSection.css"
import { useTranslation } from "react-i18next"

const FeaturesSection = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: growthIcon,
      title: t("feature_growth_title"),
      description: t("feature_growth_desc"),
    },
    {
      icon: originIcon,
      title: t("feature_origin_title"),
      description: t("feature_origin_desc"),
    },
    {
      icon: factoryIcon,
      title: t("feature_factory_title"),
      description: t("feature_factory_desc"),
    },
    {
      icon: qualityIcon,
      title: t("feature_quality_title"),
      description: t("feature_quality_desc"),
    },
  ]

  return (
    <section className="features-section" style={{ padding: "4% 0" }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <p className="section-subtitle">{t("home")}</p>
            <img src="/images/saniLogo.png" alt="Logo" style={{ width: "14%", marginTop: "2%" }} />
            <div className="divider mx-auto"></div>
          </Col>
        </Row>

        <Row className="text-center">
          {features.map((feature, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <motion.div
                className="feature-item px-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon mb-3">
                  <motion.img
                    src={feature.icon}
                    alt={feature.title}
                    width="60"
                    height="60"
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default FeaturesSection
