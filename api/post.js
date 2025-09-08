import fs from "fs"
import path from "path"

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "db.json")
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"))

  const { id } = req.query

  let data = jsonData.posts

  if (id) {
    data = data.find((p) => p.id.toString() === id.toString())
  }

  res.status(200).json(data)
}
