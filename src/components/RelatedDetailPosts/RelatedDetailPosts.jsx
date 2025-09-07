import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./RelatedDetailPosts.css";

const RelatedDetailPosts = ({ posts, title = "Bài viết liên quan" }) => {
  return (
    <div className="related-detail-posts mt-5">
      <h3 className="related-detail-title">{title}</h3>
      <Row>
        {posts.map((post, index) => (
          <Col md={4} key={post.id} className="mb-4">
            <motion.div
              className="related-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link to={`/tin-tuc/${post.id}`} className="text-decoration-none">
                <div className="related-img-wrapper">
                  <img
                    src={post.image || "/images/no-image.png"}
                    alt={post.title}
                    className="related-img"
                  />
                </div>
                <div className="related-content mt-3">
                  <h5 className="related-title">{post.title}</h5>
                  <p className="related-excerpt">{post.excerpt}</p>
                  <p className="related-date">
                    {new Date(post.date).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RelatedDetailPosts;
