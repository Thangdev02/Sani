"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import "./HeroSection.css"

const BASE_URL = "https://ads.eposh.io.vn/"

// ✅ Hàm chuẩn hóa đường dẫn ảnh
const getFullImageUrl = (url) => {
  if (!url) return ""
  if (url.startsWith("http")) return url
  return BASE_URL + url.replace(/^\/+/, "")
}

const HeroSection = () => {
  const [sliders, setSliders] = useState([])

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await fetch("https://ads.eposh.io.vn/api/v1/settings/sliders")
        const data = await res.json()
        setSliders(data?.data || [])
      } catch (err) {
        console.error("Load sliders error:", err)
      }
    }
    fetchSliders()
  }, [])

  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
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
          <SwiperSlide key={s.id}>
            <img
              src={getFullImageUrl(s.imageUrl)}
              alt={s.title || "slider"}
              className="hero-slide-img"
            />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
