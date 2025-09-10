"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, EffectCoverflow, EffectFlip, EffectCube } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import "./HeroSection.css"

import Slide2 from "../../assets/images/slider_2_img.jpg"
import Slide3 from "../../assets/images/slider_3_img.jpg"
import Slide4 from "../../assets/images/slider_4_img.jpg"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Autoplay, EffectCube]}
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
        <SwiperSlide>
          <img src={Slide2} alt="Slide 2" className="hero-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="Slide 3" className="hero-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="Slide 4" className="hero-slide-img" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroSection
