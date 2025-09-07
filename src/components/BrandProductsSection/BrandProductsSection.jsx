"use client"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./BrandProductsSection.css"

const BrandProductsSection = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // ✅ Call API (fake JSON server hoặc API backend bạn đã có)
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err))
  }, [])

  return (
    <section className="brand-products-section py-5">
      <Container>
        <p className="section-subtitle">Sản phẩm nổi bật</p>
        <h2 className="section-title">NHÃN HÀNG RIÊNG CỦA CHÚNG TÔI</h2>
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
                  <span className="badge-discount">
                    -{product.discount}%
                  </span>
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
            XEM TẤT CẢ NHÃN HÀNG RIÊNG CỦA CHÚNG TÔI
          </button>
        </div>
      </Container>
    </section>
  )
}

export default BrandProductsSection
