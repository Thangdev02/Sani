import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    if (!fs.existsSync(filePath)) {
      return res.status(500).json({ error: "db.json not found" });
    }

    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const { id, _sort, _order } = req.query;

    let data = jsonData.posts || [];

    if (id) {
      const found = data.find((p) => p.id.toString() === id.toString());
      data = found ? [found] : [];
    }

    // hỗ trợ sort/order giống json-server
    if (_sort) {
      data = data.sort((a, b) => {
        if (_order === "desc") {
          return new Date(b[_sort]) - new Date(a[_sort]);
        }
        return new Date(a[_sort]) - new Date(b[_sort]);
      });
    }

    res.status(200).json(data);
  } catch (e) {
    console.error("API Error:", e);
    res.status(500).json({ error: "Server error", data: [] });
  }
}
