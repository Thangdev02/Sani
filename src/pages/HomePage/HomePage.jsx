"use client"
import HeroSection from "../../components/HeroSection/HeroSection"
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection"
import ProductsSection from "../../components/ProductsSection/ProductsSection"
import "./HomePage.css"
import ProductsIntroSection from "../../components/ProductsIntroSection/ProductsIntroSection"
import ProductsMainSection from "../../components/ProductsMainSection/ProductsMainSection"
import HomeIntroduceSeciton from "../../components/HomeIntroduceSeciton/HomeIntroduceSeciton"
import BrandProductsSection from "../../components/BrandProductsSection/BrandProductsSection"
import NewsSection from "../../components/NewsSection/NewsSection"
import Newsletter from "../../components/Newsletter/Newsletter"

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ProductsIntroSection/>
      <ProductsMainSection/>
      <HomeIntroduceSeciton/>
      <BrandProductsSection/>
      <NewsSection/>
      <Newsletter/>
    </div>
  )
}

export default HomePage
