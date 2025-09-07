"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./HeroSection.css"
import Slide1 from "../../assets/images/slide_1_img.jpg"
import Slide2 from "../../assets/images/slide_2_img.jpg"
const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <img src={Slide1} alt="Slide 1" className="hero-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="Slide 2" className="hero-slide-img" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroSection
