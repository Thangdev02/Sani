"use client"
import React, { useState, useEffect } from "react"
import { Modal, Button, Form, Spinner } from "react-bootstrap"
import axios from "axios"

const SectionEditModal = ({ show, onHide, data, apiUrl, onSuccess }) => {
  const [form, setForm] = useState(data || {})
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setForm(data || {})
  }, [data])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)
    formData.append("Folder", "HomeSectionSettings")

    try {
      setUploading(true)
      const res = await axios.post(
        "https://ads.eposh.io.vn/api/v1/uploads/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      const filePath = res.data.filePath
      setForm((prev) => ({ ...prev, url: filePath }))
    } catch (err) {
      console.error("Upload error:", err)
    } finally {
      setUploading(false)
    }
  }

  const handleSave = async () => {
    if (!form?.id) return
    try {
      setSaving(true)
      await axios.put(`${apiUrl}/${form.id}`, form)
      onSuccess?.()
      onHide()
    } catch (err) {
      console.error("Update section error:", err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Section</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={form.title || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              value={form.description || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <div className="d-flex align-items-center gap-3">
              <Form.Control type="file" onChange={handleFileUpload} />
              {uploading && <Spinner size="sm" animation="border" />}
            </div>
            {form.url && (
              <img
                src={
                  form.url.startsWith("http")
                    ? form.url
                    : `https://ads.eposh.io.vn/${form.url}`
                }
                alt="Preview"
                style={{ width: "100%", marginTop: 10, borderRadius: 8 }}
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SectionEditModal
