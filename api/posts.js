import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    if (!fs.existsSync(filePath)) {
      return res.status(500).json({ error: "db.json not found" });
    }
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const { id } = req.query;

    let data = jsonData.posts || []; // Fallback nếu posts không tồn tại

    if (id) {
      const found = data.find((p) => p.id.toString() === id.toString());
      data = found ? [found] : []; // Trả array với 1 item hoặc rỗng
    }

    res.status(200).json(data); // Luôn trả array
  } catch (e) {
    console.error("API Error:", e);
    res.status(500).json({ error: "Server error", data: [] });
  }
}