import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Plus, Dash } from "react-bootstrap-icons";
import "./NewsListPage.css";
import RelatedPosts from "../../components/RelatedPosts/RelatedPosts";

const NewsList = () => {
  const [posts, setPosts] = useState([]);
  const [activeKey, setActiveKey] = useState("0");

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Sắp xếp bài mới nhất
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <Container className="news-list my-5">
      <Row>
        {/* Danh sách tin tức */}
        <Col md={8}>
          <h2 className="section-title">Tin tức</h2>
          <Row>
            {posts.map(post => (
              <Col md={4} key={post.id} className="mb-4">
                 <Link style={{textDecoration:"none"}}
                      to={`/tin-tuc/${post.id}`}
                    >
                <Card className="news-card h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={post.image || "/images/no-image.png"}
                    alt={post.title}
                  />
                  <Card.Body>
                    <Card.Title className="news-title">{post.title}</Card.Title>
                    <Card.Text className="news-excerpt">{post.excerpt}</Card.Text>
                    <p className="news-meta">
                      bởi <span>{post.author}</span> •{" "}
                      {new Date(post.date).toLocaleDateString("vi-VN")}
                    </p>
                   
                  </Card.Body>
                </Card>
                </Link>

              </Col>
            ))}
          </Row>
        </Col>

        {/* Sidebar */}
        <Col md={4}>
          {/* Bài viết mới nhất */}
          <RelatedPosts posts={latestPosts} title="Bài viết mới nhất" />

        </Col>
      </Row>
    </Container>
  );
};

export default NewsList;
