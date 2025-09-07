"use client"
import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./RelatedProducts.css"

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?category=${category}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [category])

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
