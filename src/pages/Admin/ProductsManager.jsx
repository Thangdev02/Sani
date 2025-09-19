// src/pages/admin/ProductsManager.jsx
import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Row, Col, Spinner, Alert } from "react-bootstrap";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/api";
import { useLanguage } from "../../LanguageContext";

const DEFAULT_VALUES = {
  returnPolicy: "Default return policy",
  termsOfService: "Default terms",
  faq: "Default faq",
};

const emptyForm = {
  name: "",
  price: 0,
  category: "",
  oldPrice: 0,
  discount: 0,
  image: "",
  description: "",
};

export default function ProductsManager() {
  const { language } = useLanguage ? useLanguage() : { language: "vi" };
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const data = await getProducts(1, 100, language);
      setProducts(data);
    } catch (err) {
      setError("Không thể tải sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [language]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    setForm({
      name: item.name || "",
      price: item.price || 0,
      category: item.category || "",
      oldPrice: item.oldPrice || 0,
      discount: item.discount || 0,
      image: item.image || "",
      description: item.description || "",
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    // luôn merge thêm default trước khi gửi
    const payload = { ...form, ...DEFAULT_VALUES };
    console.log("Payload gửi:", payload);

    setSaving(true);
    try {
      if (editing) {
        await updateProduct(editing.id, payload);
      } else {
        await createProduct(payload);
      }
      setShowModal(false);
      await load();
    } catch (err) {
      alert("Lỗi lưu dữ liệu");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa?")) return;
    try {
      await deleteProduct(id);
      await load();
    } catch {
      alert("Xóa không thành công");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Quản lý sản phẩm</h4>
        <div>
          <Button onClick={openCreate}>Tạo sản phẩm mới</Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5"><Spinner /></div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Giá</th>
              <th>Category</th>
              <th>Discount</th>
              <th>Ảnh</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price?.toLocaleString()}₫</td>
                <td>{p.category}</td>
                <td>{p.discount ? `${p.discount}%` : "-"}</td>
                <td style={{ width: 120 }}>
                  {p.image ? <img src={p.image} alt={p.name} style={{ width: "80px" }} /> : null}
                </td>
                <td>
                  <Button size="sm" variant="outline-primary" onClick={() => openEdit(p)}>Sửa</Button>{" "}
                  <Button size="sm" variant="outline-danger" onClick={() => handleDelete(p.id)}>Xóa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{editing ? "Sửa sản phẩm" : "Tạo sản phẩm"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Tên</Form.Label>
                  <Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Giá</Form.Label>
                  <Form.Control type="number" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Danh mục</Form.Label>
                  <Form.Select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option value="">-- Chọn danh mục --</option>
                    <option value="gao">Gạo</option>
                    <option value="banhcanh">Bánh Canh</option>
                    <option value="hutieu">Hủ Tiếu</option>
                    <option value="bun">Bún</option>
                    <option value="pho">Phở</option>
                    <option value="nui">Nui</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Ảnh (URL)</Form.Label>
                  <Form.Control value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Giá cũ</Form.Label>
                  <Form.Control type="number" value={form.oldPrice} onChange={(e) => setForm({ ...form, oldPrice: Number(e.target.value) })} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Giảm (%)</Form.Label>
                  <Form.Control
                    type="number"
                    value={form.discount}
                    onChange={(e) => setForm({ ...form, discount: Number(e.target.value) })}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Mô tả ngắn</Form.Label>
                  <Form.Control value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Hủy</Button>
          <Button variant="primary" onClick={handleSave} disabled={saving}>{saving ? "Đang lưu..." : "Lưu"}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
