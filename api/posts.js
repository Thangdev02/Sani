// api/posts.js
import { posts } from '../data';

export default function handler(req, res) {
  try {
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
