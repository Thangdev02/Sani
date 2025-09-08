import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { motion } from "framer-motion";
import "./NewsDetailPage.css";
import RelatedPosts from "../../components/RelatedPosts/RelatedPosts";
import RelatedDetailPosts from "../../components/RelatedDetailPosts/RelatedDetailPosts";

const NewsDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get(`/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));

    axios.get("/api/posts")
      .then(res => setRelated(res.data.filter(p => p.id !== parseInt(id)).slice(0, 3)))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <p className="loading">Đang tải bài viết...</p>;

  return (
    <Container className="news-detail my-5" style={{fontFamily: "Monserrat" }}>
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
               style={{width:'100%'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          {post.sections.map((sec, idx) => (
            <motion.div
              key={idx}
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
  );
};

export default NewsDetail;
