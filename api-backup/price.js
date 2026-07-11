// api/price.js
export default async function handler(req, res) {
  const { model } = req.query;

  try {
    const result = {
      model: model || "RTX 4070",
      price: "3299",
      source: "demo",
      updateTime: new Date().toLocaleString()
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}