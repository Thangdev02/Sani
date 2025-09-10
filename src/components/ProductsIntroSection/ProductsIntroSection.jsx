"use client"
import { Container, Row, Col, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import PepperImg1 from "../../assets/images/home_banner_1_img.jpg"
import PepperImg2 from "../../assets/images/home_banner_2_img.jpg"
import "./ProductsIntroSection.css"

const ProductsIntroSection = () => {
  return (
    <section className="products-intro-section py-5" style={{ marginTop: '4%' }}>
      <Container>
        {/* Row 1 */}
        <Row className="align-items-center justify-content-center ">
          <Col md={6} style={{ padding: 0 }}>
            <motion.img
              src="/images/pepper1.jpg"
              alt="Chất lượng tiêu"
              className="img-fluid shadow"
              style={{ width: '100%',borderRadius:'20px' }}
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
              <h3 className="mb-3 text-green-title">Sự phát triển từ chất lượng</h3>
              <p>
                Chúng tôi yêu gia vị của Việt Nam và rất mong muốn đưa sản phẩm chất lượng cao ra toàn thế giới.
                Với niềm đam mê trong công việc và sự hiểu biết sâu sắc về nền nông nghiệp Việt Nam, sản lượng xuất khẩu
                của công ty đã tăng mạnh hàng năm và đạt nhiều thành tựu.
              </p>
              <button className="mt-3 bt-or">
                XEM NGAY
              </button>
            </motion.div>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row className="align-items-center flex-md-row-reverse">
          <Col md={6} style={{ padding: 0 }}>
            <motion.img
              src="/images/pepper2.jpg"
              alt="Nguồn gốc gia vị sạch"
              className="img-fluid  shadow"
              style={{ width: '100%',borderRadius:'20px' }}
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
              <h3 className="mb-3 text-green-title">Nguồn gốc gia vị sạch</h3>
              <p>
                Nhà máy chúng tôi đặt tại trung tâm cung cấp nguyên liệu lớn nhất tại Việt Nam và hoàn toàn chủ động
                nguyên liệu. Sản lượng tiêu được thu hoạch từ các nông trại tại Gia Lai và Đắk Lắk, đảm bảo chất lượng
                và vệ sinh an toàn thực phẩm.
              </p>
              <button className="mt-3 bt-g">
                XEM NGAY
              </button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductsIntroSection
