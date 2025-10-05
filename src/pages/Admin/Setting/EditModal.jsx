"use client"
import { useState, useEffect } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import axios from "axios"

const EditModal = ({ show, onHide, data, apiUrl, onSuccess }) => {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (data) {
      setFormData(data)
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // ✅ Upload ảnh
  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)
    formData.append("Folder", "PostImage") // thử "PostImage" hoặc "Post_Images"

    try {
      const res = await axios.post(
        "https://ads.eposh.io.vn/api/v1/uploads/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )

      console.log("Upload success:", res.data)

      const filePath = res.data.filePath
      setFormData((prev) => ({
        ...prev,
        imageUrl: filePath,
      }))
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message)
    }
  }

  const handleSave = async () => {
    try {
      if (formData.id) {
        await axios.put(`${apiUrl}/${formData.id}`, formData)
      } else {
        await axios.post(apiUrl, formData)
      }
      if (onSuccess) onSuccess()
      onHide()
    } catch (err) {
      console.error("Save error:", err)
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{formData?.id ? "Edit Item" : "Create Item"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Title */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Subtitle */}
          <Form.Group className="mb-3">
            <Form.Label>Subtitle</Form.Label>
            <Form.Control
              type="text"
              name="subtitle"
              value={formData.subtitle || ""}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Upload ảnh */}
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={handleUpload} />
            {formData.imageUrl && (
              <img
                src={
                  formData.imageUrl.startsWith("http")
                    ? formData.imageUrl
                    : `https://ads.eposh.io.vn/${formData.imageUrl}`
                }
                alt="preview"
                style={{ marginTop: 10, width: "100%", borderRadius: 8 }}
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditModal
