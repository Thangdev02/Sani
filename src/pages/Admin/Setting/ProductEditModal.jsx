"use client"
import { useState, useEffect } from "react"
import { Modal, Button, Form, Spinner } from "react-bootstrap"
import ReactQuill from "react-quill-new"
import "react-quill-new/dist/quill.snow.css"
import axios from "axios"

const ProductEditModal = ({ show, onHide, data, apiUrl, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    image: "",
    id: null,
  })
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id || null,
        title: data.title || "",
        subTitle: data.subTitle || data.subTitle || "",
        description: data.description || "",
        image: data.image || data.mainImage || "",
      })
    } else {
      setFormData({ title: "", subTitle: "", description: "", image: "", id: null })
    }
  }, [data, show])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleQuillChange = (val) => {
    setFormData((prev) => ({ ...prev, description: val }))
  }

  // Upload with fallback for Folder value
  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const candidateFolders = [
      "HomeSectionSettings",
      "PostImage",
      "Post_Images",
      "SliderImage",
      "PostImages",
      "HomeSection", // a few tries for server config variance
    ]

    let uploadedPath = null
    for (const folder of candidateFolders) {
      try {
        const fd = new FormData()
        fd.append("file", file)
        fd.append("Folder", folder)

        const res = await axios.post(
          "https://ads.eposh.io.vn/api/v1/uploads/upload",
          fd,
          { headers: { "Content-Type": "multipart/form-data" } }
        )

        // possible shapes: { filePath: "images/..." } or res.data.filePath
        const filePath =
          res?.data?.filePath ||
          (typeof res?.data === "string" ? res.data : res?.data?.url) ||
          null

        if (filePath) {
          uploadedPath = filePath
          break
        }
      } catch (err) {
        const errData = err.response?.data
        // If server explicitly complains about Folder, try next candidate.
        if (errData?.errors && errData.errors.Folder) {
          // continue to next candidate
          continue
        } else {
          // other error — stop trying and show error
          console.error("Upload error (stop):", err.response?.data || err.message)
          break
        }
      }
    }

    setUploading(false)

    if (uploadedPath) {
      setFormData((prev) => ({
        ...prev,
        image: uploadedPath,
      }))
    } else {
      alert("Upload thất bại. Kiểm tra cấu hình Folder trên server.")
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const payload = {
        title: formData.title,
        subTitle: formData.subTitle,
        description: formData.description,
        image: formData.image,
      }

      if (formData.id) {
        await axios.put(`${apiUrl}/${formData.id}`, payload)
      } else {
        // If API expects array for create like sliders, adapt here.
        // API for products likely expects object, but if it needs array, change accordingly.
        await axios.post(apiUrl, payload)
      }

      if (onSuccess) await onSuccess()
      onHide()
    } catch (err) {
      console.error("Save product setting error:", err.response?.data || err.message)
      alert("Lưu không thành công")
    } finally {
      setSaving(false)
    }
  }

  const getPreviewSrc = (img) => {
    if (!img) return ""
    return img.startsWith("http") ? img : `https://ads.eposh.io.vn/${img}`
  }

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{formData?.id ? "Edit Product Section" : "Create Product Section"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sub Title</Form.Label>
            <Form.Control
              type="text"
              name="subTitle"
              value={formData.subTitle}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <ReactQuill
              theme="snow"
              value={formData.description || ""}
              onChange={handleQuillChange}
            />
            <small className="text-muted">Bạn có thể chỉnh sửa nội dung HTML ở đây.</small>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleUpload} />
            {uploading && <div className="mt-2"><Spinner size="sm" animation="border" /> Uploading...</div>}
            {formData.image && (
              <img
                src={getPreviewSrc(formData.image)}
                alt="preview"
                style={{ width: "100%", marginTop: 10, borderRadius: 8 }}
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} disabled={saving || uploading}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={saving || uploading}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProductEditModal
