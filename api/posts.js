import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    res.status(200).json(data.posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
