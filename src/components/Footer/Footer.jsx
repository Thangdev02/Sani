import React from "react";
import "./Footer.css";
import { Facebook, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
          <img src="/images/saniLogo.png" alt="Logo" />
        </div>
      <div className="footer-top">
        <ul className="footer-menu">
          <li>Về Sani</li>
          <li>Sản phẩm</li>
          <li>Tin tức</li>
          <li>Chính sách bán hàng</li>
          <li>Liên hệ</li>
        </ul>

        <div className="footer-social">
          <a href="#"><Facebook size={20} /></a>
          <a href="#"><Youtube size={20} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ fontWeight: "bold" ,fontSize:'2rem'}}>
          CÔNG TY CỔ PHẦN SAMADI
        </p>
        <p>
          Trụ sở: 151/24A Đường Tam Châu, Khu Phố 2, Phường Tam Bình, TP Hồ Chí Minh
        </p>
        <p>Copyright © 2024 - <a style={{textDecoration:'none',color:'black'}} href="/loginsani">Sani</a> </p>
      </div>
    </footer>
  );
};

export default Footer;
