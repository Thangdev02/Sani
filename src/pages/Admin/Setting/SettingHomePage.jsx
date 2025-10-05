"use client"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import EditModal from "./EditModal"
import CoreValueEditModal from "./CoreValueEditModal"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import ProductEditModal from "./ProductEditModal"
import SectionEditModal from "./\bSectionEditModal"

const SettingHomePage = () => {
  // Sliders
  const [sliders, setSliders] = useState([])
  // Core values
  const [coreValues, setCoreValues] = useState([])
  // Product section (single)
  const [productSetting, setProductSetting] = useState(null)
  // Sections (2 intro sections)
  const [sections, setSections] = useState([])

  // Modals
  const [showSliderModal, setShowSliderModal] = useState(false)
  const [currentSlider, setCurrentSlider] = useState(null)
  const [showCoreModal, setShowCoreModal] = useState(false)
  const [currentCoreValue, setCurrentCoreValue] = useState(null)
  const [showProductModal, setShowProductModal] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [showSectionModal, setShowSectionModal] = useState(false)
  const [currentSection, setCurrentSection] = useState(null)
  const [hero, setHero] = useState(null);
  const heroApi = "https://ads.eposh.io.vn/api/v1/settings/hero";
  // APIs
  const sliderApi = "https://ads.eposh.io.vn/api/v1/settings/sliders"
  const coreApi = "https://ads.eposh.io.vn/api/v1/settings/core-values"
  const productApi = "https://ads.eposh.io.vn/api/v1/settings/products"
  const sectionApi = "https://ads.eposh.io.vn/api/v1/settings/sections"

  // Load APIs
  const fetchSliders = async () => {
    try {
      const res = await fetch(sliderApi)
      const data = await res.json()
      setSliders(data?.data || [])
    } catch (err) {
      console.error("Load sliders error:", err)
    }
  }

  const fetchHero = async () => {
    try {
      const res = await fetch(heroApi);
      const data = await res.json();
      setHero(data?.data || null);
    } catch (err) {
      console.error("Load hero error:", err);
    }
  };
  const fetchCoreValues = async () => {
    try {
      const res = await fetch(coreApi)
      const data = await res.json()
      setCoreValues(data?.data || [])
    } catch (err) {
      console.error("Load core values error:", err)
    }
  }

  const fetchProductSetting = async () => {
    try {
      const res = await fetch(productApi)
      const data = await res.json()
      setProductSetting(data?.data?.[0] || null)
    } catch (err) {
      console.error("Load product setting error:", err)
    }
  }

  const fetchSections = async () => {
    try {
      const res = await fetch(sectionApi)
      const data = await res.json()
      setSections(data?.data || [])
    } catch (err) {
      console.error("Load sections error:", err)
    }
  }

  useEffect(() => {
    fetchSliders()
    fetchCoreValues()
    fetchProductSetting()
    fetchSections()
    fetchHero()
  }, [])

  return (
    <div>
      {/* ================= SLIDER SECTION ================= */}
      <section className="hero-section">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="hero-swiper"
        >
          {sliders.map((s) => (
            <SwiperSlide key={s.id} style={{ position: "relative" }}>
              <img
                src={
                  s.imageUrl?.startsWith("http")
                    ? s.imageUrl
                    : `https://ads.eposh.io.vn/${s.imageUrl}`
                }
                alt={s.title || "slider"}
                className="hero-slide-img"
              />

              <div
                style={{ position: "absolute", top: 20, left: 20, color: "white" }}
              >
                <h3>{s.title}</h3>
                <p>{s.subtitle}</p>
              </div>

              <button
                onClick={() => {
                  setCurrentSlider(s)
                  setShowSliderModal(true)
                }}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 10,
                  background: "orange",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="core-values-section">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              {coreValues.slice(0, 4).map((item) => (
                <motion.div
                  key={item.id}
                  className="value-item left"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{ position: "relative" }}
                >
                  <div className="value-text">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                  <div className="badge-circle">
                    <img src={item.icon} alt={item.title} className="badge-icon" />
                  </div>
                  <button
                    onClick={() => {
                      setCurrentCoreValue(item)
                      setShowCoreModal(true)
                    }}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      zIndex: 10,
                      background: "orange",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </motion.div>
              ))}
            </Col>

            <Col md={4} className="text-center position-relative">
              {hero && (
                <>
                  <motion.img
                    src={
                      hero.imageUrl?.startsWith("http")
                        ? hero.imageUrl
                        : `https://ads.eposh.io.vn/${hero.imageUrl}`
                    }
                    alt="Core Hero"
                    className="core-image"
                    initial={{ opacity: 0, scale: 0.3 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    style={{
                      width: "100%",
                      maxWidth: "380px",
                      borderRadius: "12px",
                      marginBottom: "10%",
                    }}
                  />

                  <h3 className="mt-3">{hero.title}</h3>
                  <p>{hero.subTitle}</p>

                  <button
                    onClick={() => {
                      setCurrentSection(hero);
                      setShowSectionModal(true);
                    }}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      zIndex: 10,
                      background: "orange",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
            </Col>


            <Col md={4}>
              {coreValues.slice(4, 8).map((item) => (
                <motion.div
                  key={item.id}
                  className="value-item right"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{ position: "relative" }}
                >
                  <div className="badge-circle">
                    <img src={item.icon} alt={item.title} className="badge-icon" />
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentCoreValue(item)
                      setShowCoreModal(true)
                    }}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      zIndex: 10,
                      background: "orange",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </motion.div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section className="product-detail-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              {productSetting && (
                <img
                  src={
                    productSetting.image?.startsWith("http")
                      ? productSetting.image
                      : `https://ads.eposh.io.vn/${productSetting.image}`
                  }
                  alt={productSetting.title}
                  className="img-fluid product-image"
                  style={{ width: "100%", borderRadius: 12 }}
                />
              )}
            </Col>

            <Col md={6} className="d-flex flex-column justify-content-center position-relative">
              {productSetting && (
                <>
                  <h6 className="section-subtitle">{productSetting.title}</h6>
                  <h2 className="text-green-title text-center mb-4">
                    {productSetting.subTitle}
                  </h2>
                  <div className="divider mb-4 mx-auto"></div>
                  <div
                    className="text-start mb-3"
                    dangerouslySetInnerHTML={{
                      __html: productSetting.description,
                    }}
                  />
                  <div style={{ position: "absolute", top: 10, right: 10 }}>
                    <button
                      onClick={() => {
                        setCurrentProduct(productSetting)
                        setShowProductModal(true)
                      }}
                      style={{
                        background: "orange",
                        border: "none",
                        padding: "6px 10px",
                        borderRadius: 6,
                        cursor: "pointer",
                        color: "#fff",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= NEW SECTIONS ================= */}
      <section className="products-intro-section py-5">
        <Container>
          {sections.map((sec, idx) => (
            <Row
              key={sec.id}
              className={`align-items-center justify-content-center ${idx % 2 !== 0 ? "flex-md-row-reverse" : ""
                } mb-5`}
            >
              <Col md={6} style={{ padding: 0 }}>
                <motion.img
                  src={
                    sec.url?.startsWith("http")
                      ? sec.url
                      : `https://ads.eposh.io.vn/${sec.url}`
                  }
                  alt={sec.title}
                  className="img-fluid shadow"
                  style={{ width: "100%", borderRadius: "20px" }}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </Col>

              <Col md={6} style={{ padding: "5%", position: "relative" }}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h3 className="mb-3 text-green-title">{sec.title}</h3>
                  <p>{sec.description}</p>
                </motion.div>

                <button
                  onClick={() => {
                    setCurrentSection(sec)
                    setShowSectionModal(true)
                  }}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "orange",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* Modals */}
      <EditModal
        show={showSliderModal}
        onHide={() => setShowSliderModal(false)}
        data={currentSlider}
        apiUrl={sliderApi}
        onSuccess={fetchSliders}
      />
      <CoreValueEditModal
        show={showCoreModal}
        onHide={() => setShowCoreModal(false)}
        data={currentCoreValue}
        apiUrl={coreApi}
        onSuccess={fetchCoreValues}
      />
      <ProductEditModal
        show={showProductModal}
        onHide={() => setShowProductModal(false)}
        data={currentProduct}
        apiUrl={productApi}
        onSuccess={fetchProductSetting}
      />
      <SectionEditModal
        show={showSectionModal}
        onHide={() => setShowSectionModal(false)}
        data={currentSection}
        apiUrl={sectionApi}
        onSuccess={fetchSections}
      />
    </div>
  )
}

export default SettingHomePage
