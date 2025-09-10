"use client"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import growthIcon from "../../assets/images/home_feature_1_img.jpg"
import originIcon from "../../assets/images/home_feature_2_img.jpg"
import factoryIcon from "../../assets/images/home_feature_3_img.jpg"
import qualityIcon from "../../assets/images/home_feature_4_img.jpg"
import "./FeaturesSection.css"

const FeaturesSection = () => {
    const features = [
        {
            icon: growthIcon,
            title: "Sự phát triển",
            description:
                "Chúng tôi yêu gia vị của Việt Nam và rất mong muốn đưa sản phẩm chất lượng cao ra toàn thế giới.Với niềm đam mê trong công việc và sự hiểu biết sâu sắc về nền nông nghiệp Việt Nam.",
        },
        {
            icon: originIcon,
            title: "Nguồn gốc",
            description:
                "Nhà máy chúng tôi đặt tại trung tâm cung cấp nguyên liệu lớn nhất tại Việt Nam và chúng tôi hoàn toàn chủ động nguồn nguyên liệu.",
        },
        {
            icon: factoryIcon,
            title: "Sản xuất",
            description:
                "Nhà máy sản xuất áp dụng công nghệ mới nhất, có dây chuyền sản xuất tự động và phòng thí nghiệm được trang bị đầy đủ. Chúng tôi áp dụng thương mại công bằng để đảm bảo chất lượng cao và ổn định.",
        },
        {
            icon: qualityIcon,
            title: "Chất lượng",
            description:
                "Chúng tôi cam kết cung cấp sản phẩm hạt tiêu đạt tiêu chuẩn quốc tế, không thông qua trung gian nhằm kiểm soát chặt chẽ chất lượng tiêu từ nông trại cho đến thị trường.",
        },
    ]

    return (
        <section className="features-section" style={{ padding: "4% 0" }}>
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <p className="section-subtitle">Hành trình của</p>
                        <img src="/images/saniLogo.png" alt="Logo" style={{ width: "14%" ,marginTop:"2%" }} />
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
