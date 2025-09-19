// src/pages/admin/DashboardHome.jsx
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import {
  ArrowUpCircle,
  ArrowDownCircle,
  Box,
  FileText,
  People,
} from "react-bootstrap-icons";
import { getProducts, getPosts } from "../../services/api"; // chỉ còn product + post
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default function DashboardHome() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const products = await getProducts(1, 100);
        const posts = await getPosts(1, 100);

        setStats([
          {
            title: "Tổng sản phẩm",
            value: products.length,
            change: "+12%",
            icon: <Box size={28} />,
            color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          },
          {
            title: "Tổng bài viết",
            value: posts.length,
            change: "-5%",
            icon: <FileText size={28} />,
            color: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
          },
          {
            title: "Người dùng",
            value: "3,420", // giả định (chưa có API)
            change: "+8%",
            icon: <People size={28} />,
            color: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
          },
        ]);
      } catch (err) {
        console.error("Error loading dashboard stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const chartData = {
    labels: stats.map((s) => s.title),
    datasets: [
      {
        label: "Số lượng",
        data: stats.map((s) => parseInt(s.value) || 0),
        backgroundColor: ["#667eea", "#f7971e", "#00c6ff"],
      },
    ],
  };

  const lineData = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
    datasets: [
      {
        label: "Người dùng mới",
        data: [120, 150, 180, 90, 200],
        borderColor: "#667eea",
        backgroundColor: "rgba(102,126,234,0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div>
      <h3 className="fw-bold mb-4">Admin Dashboard</h3>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row className="g-4">
            {stats.map((s, idx) => (
              <Col md={4} key={idx}>
                <Card
                  className="text-white shadow-sm border-0 h-100 dashboard-card"
                  style={{
                    background: s.color,
                    borderRadius: "20px",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="p-2 bg-white bg-opacity-25 rounded-circle">
                        {s.icon}
                      </div>
                      <div
                        className="small fw-bold"
                        style={{
                          color: s.change.startsWith("-")
                            ? "#ffdddd"
                            : "#d4ffd9",
                        }}
                      >
                        {s.change.startsWith("-") ? (
                          <ArrowDownCircle size={16} className="me-1" />
                        ) : (
                          <ArrowUpCircle size={16} className="me-1" />
                        )}
                        {s.change}
                      </div>
                    </div>
                    <h2 className="fw-bold">{s.value}</h2>
                    <p className="mb-0">{s.title}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-5">
            <Col md={6}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold mb-3">Thống kê dữ liệu</h5>
                  <div style={{ width: "400px", height: "370px", margin: "0 auto" }}>
  <Doughnut 
    data={chartData} 
    options={{ maintainAspectRatio: false }} 
  />
</div>

                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold mb-3">Người dùng theo tháng</h5>
                  <Line data={lineData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}
