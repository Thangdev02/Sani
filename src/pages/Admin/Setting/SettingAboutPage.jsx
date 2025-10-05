"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form, Spinner } from "react-bootstrap";
import axios from "axios";

const API_BASE = "https://ads.eposh.io.vn/api/v1/settings";

const SettingAboutPage = () => {
  const [introductions, setIntroductions] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(""); // intro | quantity | section

  const handleClose = () => setShow(false);
  const handleShow = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
    setShow(true);
  };

  // Fetch all data
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [introRes, quantityRes, sectionRes] = await Promise.all([
          axios.get(`${API_BASE}/about-introductions`),
          axios.get(`${API_BASE}/quantity-products`),
          axios.get(`${API_BASE}/about-sections`),
        ]);
        setIntroductions(introRes.data.data);
        setQuantities(quantityRes.data.data);
        setSections(sectionRes.data.data);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // ✅ Upload ảnh (dùng chung cho 3 modal)
  const handleUpload = async (e, fieldName) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("Folder", "AboutImage");

    try {
      const res = await axios.post(
        "https://ads.eposh.io.vn/api/v1/uploads/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const filePath = res.data.filePath;
      setSelectedItem((prev) => ({
        ...prev,
        [fieldName]: filePath,
      }));
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
    }
  };

  // ✅ Save changes
  const handleSave = async () => {
    try {
      let url = "";
      let payload = {};
  
      if (modalType === "intro") {
        url = `${API_BASE}/about-introductions/${selectedItem.id}`;
        payload = {
          id: selectedItem.id,
          title: selectedItem.title,
          subTitle: selectedItem.subTitle,
          imageUrl: selectedItem.imageUrl,
          description: selectedItem.description,
        };
      }
  
      if (modalType === "quantity") {
        url = `${API_BASE}/quantity-products/${selectedItem.id}`;
        payload = {
          id: selectedItem.id,
          sectionTitle: selectedItem.sectionTitle,
          description: selectedItem.description,
          mainImageUrl: selectedItem.mainImageUrl,
        };
      }
  
      if (modalType === "section") {
        url = `${API_BASE}/about-sections/${selectedItem.id}`;
        payload = {
          id: selectedItem.id,
          title: selectedItem.title,
          image: selectedItem.image,
          description: selectedItem.description,
          date: selectedItem.date,
        };
      }
  
      const res = await axios.put(url, payload);
      console.log("✅ Update response:", res.data);
      alert("✅ Update successful!");
      setShow(false);
      window.location.reload();
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      alert("❌ Update failed!");
    }
  };
  
  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="py-4">
      <h2 className="mb-4 fw-bold">⚙️ About Page Settings</h2>

      {/* --- Section 1: About Introductions --- */}
      <section className="mb-5">
        <h4 className="mb-3 text-primary">Giới thiệu</h4>
        <Row>
          {introductions.map((item) => (
            <Col md={6} key={item.id} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={`https://ads.eposh.io.vn/${item.imageUrl}`}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.subTitle}</Card.Title>
                  <Card.Subtitle className="text-muted">{item.title}</Card.Subtitle>
                  <Card.Text className="mt-2">{item.description}</Card.Text>
                  <Button variant="outline-primary" onClick={() => handleShow(item, "intro")}>
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* --- Section 2: Quantity Products --- */}
      <section className="mb-5">
        <h4 className="mb-3 text-success">Chất lượng sản phẩm</h4>
        <Row>
          {quantities.map((item) => (
            <Col md={4} key={item.id} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={`https://ads.eposh.io.vn/${item.mainImageUrl}`}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.sectionTitle}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="outline-success" onClick={() => handleShow(item, "quantity")}>
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* --- Section 3: About Sections --- */}
      <section>
        <h4 className="mb-3 text-warning">Về chúng tôi</h4>
        <Row>
          {sections.map((item) => (
            <Col md={6} key={item.id} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={`https://ads.eposh.io.vn/${item.image}`}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <small className="text-muted">
                    {new Date(item.date).toLocaleDateString("vi-VN")}
                  </small>
                  <br />
                  <Button variant="outline-warning" className="mt-2" onClick={() => handleShow(item, "section")}>
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* --- Edit Modal --- */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>✏️ Edit {modalType.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <Form>
              {/* --- About Introduction --- */}
              {modalType === "intro" && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      value={selectedItem.title}
                      onChange={(e) => setSelectedItem({ ...selectedItem, title: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Sub Title</Form.Label>
                    <Form.Control
                      value={selectedItem.subTitle}
                      onChange={(e) => setSelectedItem({ ...selectedItem, subTitle: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={selectedItem.description}
                      onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={(e) => handleUpload(e, "imageUrl")} />
                    {selectedItem.imageUrl && (
                      <img
                        src={`https://ads.eposh.io.vn/${selectedItem.imageUrl}`}
                        alt="preview"
                        style={{ width: "100%", borderRadius: 8, marginTop: 10 }}
                      />
                    )}
                  </Form.Group>
                </>
              )}

              {/* --- Quantity Products --- */}
              {modalType === "quantity" && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Section Title</Form.Label>
                    <Form.Control
                      value={selectedItem.sectionTitle}
                      onChange={(e) => setSelectedItem({ ...selectedItem, sectionTitle: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={selectedItem.description}
                      onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Main Image</Form.Label>
                    <Form.Control type="file" onChange={(e) => handleUpload(e, "mainImageUrl")} />
                    {selectedItem.mainImageUrl && (
                      <img
                        src={`https://ads.eposh.io.vn/${selectedItem.mainImageUrl}`}
                        alt="preview"
                        style={{ width: "100%", borderRadius: 8, marginTop: 10 }}
                      />
                    )}
                  </Form.Group>
                </>
              )}

              {/* --- About Sections --- */}
              {modalType === "section" && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      value={selectedItem.title}
                      onChange={(e) => setSelectedItem({ ...selectedItem, title: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={selectedItem.description}
                      onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      value={selectedItem.date?.slice(0, 16)}
                      onChange={(e) => setSelectedItem({ ...selectedItem, date: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={(e) => handleUpload(e, "image")} />
                    {selectedItem.image && (
                      <img
                        src={`https://ads.eposh.io.vn/${selectedItem.image}`}
                        alt="preview"
                        style={{ width: "100%", borderRadius: 8, marginTop: 10 }}
                      />
                    )}
                  </Form.Group>
                </>
              )}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SettingAboutPage;
