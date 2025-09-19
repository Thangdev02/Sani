"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NewsListPage.css";
import RelatedPosts from "../../components/RelatedPosts/RelatedPosts";
import { getPosts } from "../../services/api";
import { useLanguage } from "../../LanguageContext";
import { useTranslation } from "react-i18next"; // 👈 import i18n

const NewsList = () => {
  const { language } = useLanguage(); // 👈 lấy ngôn ngữ hiện tại (vi/en)
  const { t } = useTranslation(); // 👈 hook dịch
  const [posts, setPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPosts(1, 10, language); // 👈 truyền language
        setPosts(data);

        // ✅ Sắp xếp mới nhất theo `date`
        const sorted = [...data].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setLatestPosts(sorted.slice(0, 4));
      } catch (err) {
        setError(t("newsList.error")); // 👈 dịch error
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [language, t]);

  return (
    <Container className="news-list my-5">
      <Row>
        {/* Danh sách tin tức */}
        <Col md={8}>
          <h2 className="section-title">{t("newsList.title")}</h2>

          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" />
            </div>
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <Row>
              {posts.map((post) => (
                <Col md={4} key={post.id} className="mb-4">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/tin-tuc/${post.id}`}
                  >
                    <Card className="news-card h-100 shadow-sm">
                      <Card.Img
                        variant="top"
                        src={post.image || "/images/no-image.png"}
                        alt={post.title}
                      />
                      <Card.Body>
                        <Card.Title className="news-title">
                          {post.title}
                        </Card.Title>
                        <Card.Text className="news-excerpt">
                          {post.excerpt}
                        </Card.Text>
                        <p className="news-meta">
                          {t("newsList.by")} <span>{post.author}</span> •{" "}
                          {new Date(post.date).toLocaleDateString(
                            language === "vi" ? "vi-VN" : "en-US"
                          )}
                        </p>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        </Col>

        {/* Sidebar */}
        <Col md={4}>
          <RelatedPosts
            posts={latestPosts}
            title={t("newsList.latestPosts")}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsList;
