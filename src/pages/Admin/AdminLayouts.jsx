// src/pages/admin/AdminLayout.jsx
import React from "react";
import { Outlet, NavLink, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import DashboardHome from "./DashboardHome";
import ProductsManager from "./ProductsManager";
import PostsManager from "./PostsManager";
import { useAuth } from "../../context/AuthContext";
import "./AdminLayouts.css"

export default function AdminLayout() {
  const { logout, user } = useAuth();

  return (
    <div className="admin-app d-flex">
      <aside className="admin-sidebar">
        <div>
        <div className="brand p-3">
          <h4> ADMIN SANI</h4>
          <small>{user?.username}</small>
        </div>
        <nav className="nav flex-column p-2">
          <NavLink to="/admin" end className="nav-link1">Dashboard</NavLink>
          <NavLink to="/admin/products" className="nav-link1">Quản lý sản phẩm</NavLink>
          <NavLink to="/admin/posts" className="nav-link1">Quản lý bài viết</NavLink>
        </nav>
        </div>
        <div className="sidebar-footer p-3">
          <Button variant="outline-danger" size="sm" onClick={() => logout()}>Logout</Button>
        </div>
      </aside>

      <div className="admin-main flex-fill">
    
        <main className="admin-content p-4">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/products" element={<ProductsManager />} />
            <Route path="/posts" element={<PostsManager />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
