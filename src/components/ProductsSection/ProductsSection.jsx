"use client"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import "./ProductsSection.css"
import InforImage from "../../assets/images/home_info_img_center.jpg"
import InforImage1 from "../../assets/images/home_info_1_img.jpg"
import InforImage2 from "../../assets/images/home_info_2_img.jpg"
import InforImage3 from "../../assets/images/home_info_3_img.jpg"
import InforImage4 from "../../assets/images/home_info_4_img.jpg"
import InforImage5 from "../../assets/images/home_info_5_img.jpg"
import InforImage6 from "../../assets/images/home_info_6_img.jpg"
import InforImage7 from "../../assets/images/home_info_7_img.jpg"
import InforImage8 from "../../assets/images/home_info_8_img.jpg"

const ProductsSection = () => {
    const leftValues = [
        {
            title: "Niềm đam mê",
            desc: "Chúng tôi yêu thích công việc kinh doanh và các mặt hàng gia vị của mình.",
            icon: InforImage1,
        },
        {
            title: "Chất lượng cao",
            desc: "Một điều rất quan trọng đối với chúng tôi là hạt tiêu không bị phun thuốc trừ sâu.",
            icon: InforImage2,
        },
        {
            title: "An toàn",
            desc: "Một điều rất quan trọng đối với chúng tôi là hạt tiêu không bị phun thuốc trừ sâu.",
            icon: InforImage3,
        },
        {
            title: "Con người là trung tâm",
            desc: "Chúng tôi quan tâm phát triển tinh thần đồng đội và nâng cao chất lượng sống của mỗi thành viên trong công ty.",
            icon: InforImage4,
        },
    ]

    const rightValues = [
        {
            title: "Gia vị hữu cơ",
            desc: "100% Tiêu sọ hữu cơ, dùng làm gia vị trong các món ăn",
            badge: InforImage5,
        },
        {
            title: "Gia vị tự nhiên",
            desc: "100% Tiêu sọ hữu cơ, dùng làm gia vị trong các món ăn",
            badge: InforImage6,
        },
        {
            title: "Gia vị kết hợp",
            desc: "100% Tiêu sọ hữu cơ, dùng làm gia vị trong các món ăn",
            badge: InforImage7,
        },
        {
            title: "Lá gia vị",
            desc: "100% Tiêu sọ hữu cơ, dùng làm gia vị trong các món ăn",
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
                            GIÁ TRỊ CỐT LÕI
                        </motion.h6>
                        <motion.h2
                            className="section-title text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            ĐIỀU QUAN TRỌNG NHẤT VỚI SANI
                        </motion.h2>
                        <div className="section-divider"></div>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    {/* Left values */}
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
                                <div className="icon-circle">
                                    <img src={item.icon} alt={item.title} className="icon-img" />
                                </div>
                            </motion.div>
                        ))}
                    </Col>


                    {/* Center image */}
                    <Col md={4} className="text-center">
                        <motion.img
                            src={InforImage}
                            alt="Pepper Grinder"
                            className="core-image"
                            initial={{ opacity: 0, scale: 0.3 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.4 }}
                            viewport={{ once: true }}
                            style={{marginBottom:'15%'}}
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
