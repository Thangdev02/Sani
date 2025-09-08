// api/products.js
import { products as allProducts } from './data';

export default function handler(req, res) {
    try {
      let products = allProducts;
      const { category } = req.query;
      if (category) {
        products = products.filter(p => p.category === category);
      }
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
