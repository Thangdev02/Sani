"use client"
import { useState, useEffect } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import axios from "axios"

const CoreValueEditModal = ({ show, onHide, data, apiUrl, onSuccess }) => {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id,
        title: data.title || "",
        description: data.description || "",
      })
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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
        <Modal.Title>
          {formData?.id ? "Edit Core Value" : "Create Core Value"}
        </Modal.Title>
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

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
            />
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

export default CoreValueEditModal
