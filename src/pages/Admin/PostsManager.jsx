// src/pages/admin/PostsManager.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getSections,
  createSection,
  updateSection,
  deleteSection,
} from "../../services/api";

export default function PostsManager() {
  // ================== POSTS ==================
  const emptyPost = { title: "", excerpt: "", date: "", author: "", image: "" };
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showPostModal, setShowPostModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [form, setForm] = useState(emptyPost);
  const [saving, setSaving] = useState(false);

  // ================== SECTIONS ==================
  const emptySection = { heading: "", image: "", content: "" };
  const [sections, setSections] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const [showSectionModal, setShowSectionModal] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [sectionForm, setSectionForm] = useState(emptySection);
  const [savingSection, setSavingSection] = useState(false);

  // ================== LOAD POSTS ==================
  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      console.error("Lỗi khi load posts", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // ================== CRUD POST ==================
  const openCreatePost = () => {
    setEditingPost(null);
    setForm(emptyPost);
    setShowPostModal(true);
  };

  const openEditPost = (post) => {
    setEditingPost(post);
    setForm(post);
    setShowPostModal(true);
  };

  const handleSavePost = async () => {
    setSaving(true);
    try {
      if (editingPost) {
        await updatePost(editingPost.id, form);
      } else {
        await createPost(form);
      }
      setShowPostModal(false);
      loadPosts();
    } catch (err) {
      console.error("Lỗi khi lưu post", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa bài viết này?")) return;
    try {
      await deletePost(id);
      loadPosts();
    } catch (err) {
      console.error("Lỗi khi xóa post", err);
    }
  };

  // ================== CRUD SECTION ==================
  const openManageSections = async (post) => {
    setSelectedPost(post);
    setShowSectionModal(true);
    setEditingSection(null);
    setSectionForm(emptySection);
    try {
      const data = await getSections(post.id);
      setSections(data);
    } catch (err) {
      console.error("Lỗi khi load sections", err);
    }
  };

  const openCreateSection = () => {
    setEditingSection(null);
    setSectionForm(emptySection);
  };

  const openEditSection = (section) => {
    setEditingSection(section);
    setSectionForm(section);
  };

  const handleSaveSection = async () => {
    if (!selectedPost) return;
    setSavingSection(true);
    try {
      if (editingSection) {
        await updateSection(editingSection.id, sectionForm);
      } else {
        await createSection({ ...sectionForm, postId: selectedPost.id });
      }
      const data = await getSections(selectedPost.id);
      setSections(data);
      setEditingSection(null);
      setSectionForm(emptySection);
    } catch (err) {
      console.error("Lỗi khi lưu section", err);
    } finally {
      setSavingSection(false);
    }
  };

  const handleDeleteSection = async (id) => {
    if (!window.confirm("Xóa nội dung này?")) return;
    try {
      await deleteSection(id);
      const data = await getSections(selectedPost.id);
      setSections(data);
    } catch (err) {
      console.error("Lỗi khi xóa section", err);
    }
  };

  // ================== RENDER ==================
  return (
    <Container className="mt-4">
      <h2>Quản lý Bài viết</h2>
      <Button className="mb-3" onClick={openCreatePost}>
        + Thêm bài viết
      </Button>

      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Tóm tắt</th>
              <th>Tác giả</th>
              <th>Ngày</th>
              <th>Ảnh</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.excerpt}</td>
                <td>{p.author}</td>
                <td>{p.date}</td>
                <td>
                  {p.image && (
                    <img src={p.image} alt="" style={{ width: 60 }} />
                  )}
                </td>
                <td>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => openManageSections(p)}
                  >
                    Quản lý nội dung
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="outline-primary"
                    onClick={() => openEditPost(p)}
                  >
                    Sửa
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleDeletePost(p.id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* ================== MODAL POST ================== */}
      <Modal
        show={showPostModal}
        onHide={() => setShowPostModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editingPost ? "Sửa bài viết" : "Thêm bài viết"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Tóm tắt</Form.Label>
              <Form.Control
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Tác giả</Form.Label>
              <Form.Control
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Ngày</Form.Label>
              <Form.Control
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Ảnh (URL)</Form.Label>
              <Form.Control
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPostModal(false)}>
            Hủy
          </Button>
          <Button onClick={handleSavePost} disabled={saving}>
            {saving ? "Đang lưu..." : "Lưu"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ================== MODAL SECTION ================== */}
      <Modal
        show={showSectionModal}
        onHide={() => setShowSectionModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Quản lý nội dung cho: {selectedPost?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form thêm/sửa section */}
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Tiêu Đề Mục</Form.Label>
              <Form.Control
                value={sectionForm.heading}
                onChange={(e) =>
                  setSectionForm({ ...sectionForm, heading: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Ảnh (URL)</Form.Label>
              <Form.Control
                value={sectionForm.image}
                onChange={(e) =>
                  setSectionForm({ ...sectionForm, image: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={sectionForm.content}
                onChange={(e) =>
                  setSectionForm({ ...sectionForm, content: e.target.value })
                }
              />
            </Form.Group>
          </Form>
          <Button
            className="mt-2"
            onClick={handleSaveSection}
            disabled={savingSection}
          >
            {editingSection ? "Cập nhật" : "Thêm"}{" "}
            {savingSection && <Spinner size="sm" animation="border" />}
          </Button>

          {/* Danh sách sections */}
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Tiêu Đề Mục</th>
                <th>Ảnh</th>
                <th>Nội dung</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((s) => (
                <tr key={s.id}>
                  <td>{s.heading}</td>
                  <td>
                    {s.image && (
                      <img src={s.image} alt="" style={{ width: 60 }} />
                    )}
                  </td>
                  <td>{s.content}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() => openEditSection(s)}
                    >
                      Sửa
                    </Button>{" "}
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleDeleteSection(s.id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
