import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "db.json");

    if (!fs.existsSync(filePath)) {
      return res.status(500).json({ error: "db.json not found" });
    }

    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const { id, category } = req.query;

    let data = jsonData.products || [];

    if (category) {
      data = data.filter((p) => p.category === category);
    }

    if (id) {
      const found = data.find((p) => p.id.toString() === id.toString());
      data = found ? [found] : [];
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: "Server error", data: [] });
  }
}
