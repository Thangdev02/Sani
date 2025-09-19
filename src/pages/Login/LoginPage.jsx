// src/pages/admin/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { loginLocal } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = await loginLocal(username.trim(), password);
      if (res.ok) {
        login(res.user);
        navigate("/admin");
      } else {
        setErr(res.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      setErr("Lỗi hệ thống");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="admin-auth min-vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="card p-4">
            <h3 className="mb-3">Admin Login</h3>
            {err && <Alert variant="danger">{err}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Tài khoản</Form.Label>
                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center">
                <Button type="submit" disabled={loading}>
                  {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
