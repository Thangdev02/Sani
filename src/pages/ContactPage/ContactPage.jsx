"use client"
import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import { GeoAltFill, TelephoneFill, ClockFill, EnvelopeFill } from "react-bootstrap-icons"
import "./ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <motion.section
    style={{marginBottom:'5%'}}
      className="contact-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Google Map */}
      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2462612795857!2d106.74090661111173!3d10.868864989240842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527f47a3bef4f%3A0xbd66929099d1abc6!2zMTUxLzUwLzUsIDE1MSDEkC4gVGFtIENow6J1LCBLaHUgcGjhu5EgMiwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1757529910989!5m2!1svi!2s" style= {{border:0, height:'450px', width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* Form + Contact Info */}
      <Container className="contact-container">
        <Row style={{ marginTop: "4%" }}>
          {/* Form */}
          <Col md={7}>
            <h3>Gửi thắc mắc cho chúng tôi</h3>
            <p>
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
            </p>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Tên của bạn"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email của bạn"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Số điện thoại của bạn"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              </Row>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Nội dung"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <p style={{ fontSize: "0.8rem", color: "gray" }}>This site is protected by reCAPTCHA and the Google <span style={{ color: "blue" }}>Privacy Policy</span> and <span style={{ color: "blue" }}>Terms of Service</span> apply.</p>
              <Button className="contact-button" type="submit">
                GỬI CHO CHÚNG TÔI
              </Button>
            </Form>
          </Col>

          {/* Contact Info */}
          <Col md={5}>
            <h3>Thông tin liên hệ</h3>
            <ul className="contact-info">
              <li>
                <span className="icon-circle"><GeoAltFill  /></span>
                <div>
                  <b>Địa chỉ:</b><br />
                  151/24A Đường Tam Châu, Khu Phố 2, Phường Tam Bình, TP Hồ Chí Minh
                </div>
              </li>
              <li>
                <span className="icon-circle"><TelephoneFill /></span>
                <div>
                  <b>Điện thoại:</b><br />
                  1900.000.XXX
                </div>
              </li>
              <li>
                <span className="icon-circle"><ClockFill /></span>
                <div>
                  <b>Thời gian làm việc:</b><br />
                  Thứ 2 đến Thứ 6: từ 8h00 đến 18h00<br />
                  Thứ 7 và Chủ nhật: từ 8h00 đến 17h00
                </div>
              </li>
              <li>
                <span className="icon-circle"><EnvelopeFill /></span>
                <div>
                  <b>Email:</b><br />
                  hi@powerdrink.com
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.section>
  )
}

export default ContactPage
