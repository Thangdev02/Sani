import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const { category } = req.query;
    const filePath = path.join(process.cwd(), "db.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    let products = data.products || [];
    if (category) {
      products = products.filter(p => p.category === category);
    }
    res.status(200).json(products);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
