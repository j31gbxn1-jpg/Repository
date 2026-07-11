// api/price.js
export default async function handler(req, res) {
  // 读取 URL 参数 model
  const { model } = req.query;

  try {
    // 模拟价格数据（后续替换为真实API请求）
    const result = {
      model: model || "RTX 4070",
      price: "3299",
      source: "demo",
      updateTime: new Date().toLocaleString()
    };

    // 返回 JSON
    res.status(200).json(result);
  } catch (error) {
    // 错误返回
    res.status(500).json({ error: error.message });
  }
}