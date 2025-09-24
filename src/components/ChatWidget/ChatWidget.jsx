import { useState } from "react";
import { Button, Form, Card, Image, Badge } from "react-bootstrap";
import { ChatDots } from "react-bootstrap-icons";
import ReactMarkdown from "react-markdown";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Xin chào 👋! Sani có thể giúp gì cho bạn?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleProductClick = (productId) => {
    window.location.href = `/san-pham/${productId.toLowerCase()}`; // Chuyển ID thành chữ thường
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://chatbot.harmon.love:12443/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.promptResponse,
          products: data.products || null,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Lỗi khi gọi API, thử lại sau nhé." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Nút bong bóng chat */}
      <Button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          zIndex: 9999,
          border: "none",
          backgroundColor: "#ea4e2a",
        }}
      >
        <ChatDots size={28} />
      </Button>

      {/* Cửa sổ chat */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "420px",
            height: "500px",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              padding: "10px",
              background: "#ea4e2a",
              color: "white",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              fontWeight: "bold",
            }}
          >
            💬 Chat cùng Sani
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "14px",
            }}
          >
           {messages.map((msg, i) => (
  <div
    key={i}
    style={{
      display: "flex",
      justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
      alignItems: "flex-end",
      marginBottom: "10px",
      gap: "6px",
    }}
  >
    {/* Avatar bên trái cho bot */}
    {msg.sender === "bot" && (
      <Image
        src="/images/saniLogo.png" // đổi đường dẫn avatar bot
        roundedCircle
        style={{ width: "42px", height: "42px" }}
      />
    )}

    {/* Bubble chat */}
    <span
      style={{
        display: "inline-block",
        padding: "8px 12px",
        borderRadius: "16px",
        background: msg.sender === "user" ? "#ea4e2a" : "#f1f0f0",
        color: msg.sender === "user" ? "#fff" : "#000",
        maxWidth: "75%",
        textAlign: "left",
      }}
    >
      <ReactMarkdown>{msg.text}</ReactMarkdown>
    </span>

    {/* Avatar bên phải cho user */}
    {msg.sender === "user" && (
      <Image
        src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" // đổi đường dẫn avatar user
        roundedCircle
        style={{ width: "42px", height: "42px" }}
      />
    )}
  </div>
))}

            {loading && <p style={{ color: "#6c757d" }}>Đang trả lời...</p>}
          </div>

          {/* Input */}
          <Form onSubmit={sendMessage} style={{ display: "flex", padding: "8px" }}>
            <Form.Control
              type="text"
              value={input}
              placeholder="Nhập tin nhắn..."
              onChange={(e) => setInput(e.target.value)}
              style={{ borderRadius: "4px 0 0 4px" }}
            />
            <Button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: "#ea4e2a",
                marginLeft: "4px",
                border: "none",
                borderRadius: "0 4px 4px 0",
              }}
            >
              Gửi
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;