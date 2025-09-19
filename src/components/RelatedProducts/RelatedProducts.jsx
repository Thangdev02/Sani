"use client"
import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { useNavigate } from "react-router-dom"
import "./RelatedProducts.css"

// ✅ dùng fetch API
const RelatedProducts = ({ category, language = "vi" }) => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://ads.eposh.io.vn/api/v1/products?pageNumber=1&pageSize=20&language=${language}`
        )
        const data = await res.json()
        if (data && data.items) {
          // lọc theo category
          const filtered = data.items.filter(
            (p) => p.category === category
          )
          setProducts(filtered)
        }
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error)
      }
    }

    fetchProducts()
  }, [category, language])

  const handleClick = (id) => {
    navigate(`/san-pham/${id}`)
  }

  return (
    <div className="related-products">
      <div className="flex justify-between items-center mb-4">
        <h3>Sản phẩm đã xem</h3>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="product-card cursor-pointer"
              onClick={() => handleClick(item.id)}
            >
              <img src={item.image} alt={item.name} className="product-img" />
              <h4 className="product-name">{item.name}</h4>
              <div className="product-price">
                <span className="new-price">{item.price}₫</span>
                {item.oldPrice && (
                  <span className="old-price">{item.oldPrice}₫</span>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default RelatedProducts
