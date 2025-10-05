// src/pages/admin/AdminLayout.jsx
import React, { useState } from "react";
import { Outlet, NavLink, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Form, Alert } from "react-bootstrap";
import DashboardHome from "./DashboardHome";
import ProductsManager from "./ProductsManager";
import PostsManager from "./PostsManager";
import { useAuth } from "../../context/AuthContext";
import "./AdminLayouts.css";
import SettingHomePage from "./Setting/SettingHomePage";
import SettingAboutPage from "./Setting/SettingAboutPage";

export default function AdminLayout() {
  const { logout, user } = useAuth();

  // modal xác thực admin
  const [showModal, setShowModal] = useState(true);
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputKey === "sani2025") {
      setShowModal(false); // chỉ khi nhập đúng thì mới tắt modal
    } else {
      setError("Key không chính xác!");
    }
  };

  return (
    <div className="admin-app d-flex">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div>
          <div className="brand p-3">
            <h4>ADMIN SANI</h4>
            <small>{user?.username}</small>
          </div>
          <nav className="nav flex-column p-2">
            <NavLink to="/admin" end className="nav-link1">Dashboard</NavLink>
            <NavLink to="/admin/products" className="nav-link1">Quản Lý Sản Phẩm</NavLink>
            <NavLink to="/admin/posts" className="nav-link1">Quản Lý Bài Viết</NavLink>
            <NavLink to="/admin/sthome" className="nav-link1">Cài Đặt Trang Chủ</NavLink>
            <NavLink to="/admin/stintro" className="nav-link1">Cài Đặt Giới Thiệu</NavLink>
          </nav>
        </div>
        <div className="sidebar-footer p-3">
          <Button variant="outline-danger" size="sm" onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="admin-main flex-fill">
        <main className="admin-content p-4">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/products" element={<ProductsManager />} />
            <Route path="/posts" element={<PostsManager />} />
            <Route path="/sthome" element={<SettingHomePage />} />
            <Route path="/stintro" element={<SettingAboutPage />} />

          </Routes>
        </main>
      </div>

      {/* Modal bắt buộc nhập key */}
      <Modal
        show={showModal}
        backdrop="static" // không cho click ra ngoài
        keyboard={false} // không cho ESC
        centered
      >
        <Modal.Header>
          <Modal.Title>Xác thực Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nhập Key</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập key admin..."
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit" variant="primary" className="w-100">
              Xác nhận
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
