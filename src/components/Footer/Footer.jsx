import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1 */}
        <div className="footer-column">
          <h3 className="footer-title">Về Sani</h3>
          <p className="footer-text">
            Với các giải pháp công nghệ tốt nhất, Haravan là tất cả những gì bạn cần để xây dựng thương hiệu online,
            thành công trong bán lẻ và marketing đột phá.
          </p>
        </div>

        {/* Cột 2 */}
        <div className="footer-column">
          <h3 className="footer-title">Thông tin liên hệ</h3>
          <p style={{color:'#666666'}}>
            <strong>Địa chỉ:</strong> Tầng 4, tòa nhà ABC, số 1234, đường Nguyễn Thị Minh Khai,
            phường 4, quận 3, Tp. Hồ Chí Minh.
          </p>
          <p><strong>Điện thoại:</strong> 1900.636.000</p>
          <p><strong>Fax:</strong> 1900.636.000</p>
          <p><strong>Email:</strong> hi@sani.info</p>
        </div>

        {/* Cột 3 */}
        <div className="footer-column">
          <h3 className="footer-title">Nhóm liên kết</h3>
          <ul className="footer-list">
            <li>Sản phẩm khuyến mãi</li>
            <li>Sản phẩm nổi bật</li>
            <li>Tất cả sản phẩm</li>
          </ul>
        </div>

        {/* Cột 4 */}
        <div className="footer-column">
          <h3 className="footer-title">Nhóm liên kết</h3>
          <ul className="footer-list">
            <li>Tìm kiếm</li>
            <li>Giới thiệu</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản dịch vụ</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2025. Powered by Sani</p>
      </div>
    </footer>
  );
};

export default Footer;
