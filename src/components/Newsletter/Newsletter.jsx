import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <p className="newsletter-subtitle">
          Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt và thông tin giảm giá khác.
        </p>

        <h2 className="newsletter-title">Đăng ký nhận bản tin</h2>

        <div className="newsletter-line">
          <span></span>
        </div>

        <form className="newsletter-form">
          <div className="newsletter-input-wrapper">
            <span className="newsletter-icon">📧</span>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="newsletter-input"
            />
          </div>
          <button type="submit" className="newsletter-button">
            ĐĂNG KÝ
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
