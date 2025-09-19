"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import "./NewsDetailPage.css"
import RelatedPosts from "../../components/RelatedPosts/RelatedPosts"
import RelatedDetailPosts from "../../components/RelatedDetailPosts/RelatedDetailPosts"

const NewsDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [sections, setSections] = useState([])
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPostAndSections = async () => {
      try {
        // 1. Lấy danh sách tất cả bài viết
        const res = await fetch(
          "https://ads.eposh.io.vn/api/v1/posts?pageNumber=1&pageSize=10&language=vi"
        )
        const data = await res.json()
        const items = data.data.items || []

        // 2. Lấy post hiện tại theo id
        const currentPost = items.find(p => p.id === id)
        setPost(currentPost)

        // 3. Lấy các bài viết liên quan
        const relatedPosts = items.filter(p => p.id !== id).slice(0, 3)
        setRelated(relatedPosts)

        // 4. Nếu có post thì gọi API sections
        if (currentPost) {
          const secRes = await fetch(
            `https://ads.eposh.io.vn/api/v1/sections?postId=${currentPost.id}&pageNumber=1&pageSize=10&language=vi`
          )
          const secData = await secRes.json()
          setSections(secData.data.items || [])
        }
      } catch (error) {
        console.error("Lỗi khi load bài viết:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPostAndSections()
  }, [id])

  if (loading) return <p className="loading">Đang tải bài viết...</p>
  if (!post) return <p className="loading">Không tìm thấy bài viết</p>

  return (
    <Container className="news-detail my-5" style={{ fontFamily: "Monserrat" }}>
      <Row>
        <Col md={8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="detail-title">{post.title}</h2>
            <p className="news-meta">
              bởi <span>{post.author}</span> •{" "}
              {new Date(post.date).toLocaleDateString("vi-VN")}
            </p>
            <motion.img
              src={post.image}
              alt={post.title}
              className="img-fluid rounded mb-4 detail-image"
              style={{ width: "100%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          {/* render sections */}
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.id}
              className="detail-section mb-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h4>{sec.heading}</h4>
              <p>{sec.content}</p>
              {sec.image && (
                <motion.img
                  src={sec.image}
                  alt={sec.heading}
                  className="img-fluid rounded mt-3"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </Col>

        <Col md={4}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <RelatedPosts posts={related} title="Bài viết liên quan" showIndex={false} />
          </motion.div>
        </Col>

        <div className="related-section mt-5">
          <RelatedDetailPosts posts={related} />
        </div>
      </Row>
    </Container>
  )
}

export default NewsDetail
