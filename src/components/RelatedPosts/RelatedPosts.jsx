import React from "react";
import { Link } from "react-router-dom";
import "./RelatedPosts.css";

const RelatedPosts = ({ posts, title = "Bài viết liên quan", showIndex = true }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="related-posts sidebar-box">
      <h5 className="sidebar-title">{title}</h5>
      {posts.map((post, index) => (
        <div key={post.id} className="latest-post-item">
          {showIndex && <span className="latest-number">{index + 1}</span>}
          <Link
            to={`/tin-tuc/${post.id}`}
            className="d-flex align-items-center text-decoration-none"
          >
            <img
              src={post.image || "/images/no-image.png"}
              alt={post.title}
              className="latest-thumb"
            />
            <div className="ms-2">
              <p className="mb-1 latest-title">{post.title}</p>
              <small className="text-muted">
                Tin tức • {new Date(post.date).toLocaleDateString("vi-VN")}
              </small>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RelatedPosts;
