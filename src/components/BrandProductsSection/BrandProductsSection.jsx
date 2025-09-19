"use client"
import { Container } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./BrandProductsSection.css"

// ✅ Import trực tiếp data từ data.js
import { products as allProducts } from "../../../api/data"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const BrandProductsSection = () => {
  const { t } = useTranslation()
  const products = allProducts

  return (
    <section className="brand-products-section py-5">
      <Container>
        <p className="section-subtitle">{t("featured_products")}</p>
        <h2 className="text-green-title">{t("our_private_brand")}</h2>
        <div className="divider mb-4"></div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
          }}
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="product-card">
                {product.discount && (
                  <span className="badge-discount">-{product.discount}%</span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                <h6 className="product-name">{product.name}</h6>
                <div className="product-price">
                  <span className="new-price">{product.price}₫</span>
                  {product.oldPrice && (
                    <span className="old-price">{product.oldPrice}₫</span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-4">
          <button className="btn-view-all">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/san-pham">{t("view_all_private_brand")}</Link> 
          </button>
        </div>
      </Container>
    </section>
  )
}

export default BrandProductsSection
