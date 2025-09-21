"use client"
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { useTranslation } from "react-i18next"
import { getPosts } from "../../services/api"  // gọi API thật

import "swiper/css"
import "swiper/css/navigation"
import "./NewsSection.css"

const NewsSection = () => {
  const { t } = useTranslation()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(1, 3, "vi") // lấy 6 bài viết
        setPosts(data)
      } catch (err) {
        console.error("Error loading posts:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section className="news-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">{t("latest_posts")}</h2>
            <div className="divider mx-auto"></div>
          </Col>
        </Row>

        {loading ? (
          <p className="text-center">{t("loading")}</p>
        ) : posts.length === 0 ? (
          <p className="text-center">{t("no_posts_found")}</p>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            className="news-swiper"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="news-card" style={{ height: "360px" }}>
                  <img
                    src={post.image || "/default-news.jpg"} // fallback ảnh
                    alt={post.title}
                    className="news-image"
                  />
                  <div className="p-3">
                    <h5 className="news-title">{post.title}</h5>
                    <p className="news-desc">{post.excerpt || ""}</p>
                    <div className="news-footer d-flex justify-content-between align-items-center">
                      <span className="news-date">
                        {post.createdAt?.slice(0, 10) || ""}
                      </span>
                      <a href={`/tin-tuc/${post.id}`} className="news-more">
                        {t("read_more")}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom buttons */}
        <div className="swiper-button-prev-custom">‹</div>
        <div className="swiper-button-next-custom">›</div>
      </Container>
    </section>
  )
}

export default NewsSection
