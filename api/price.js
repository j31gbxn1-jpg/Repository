// api/price.js
export default async function handler(req, res) {
  // 1. 获取前端传来的搜索参数（比如硬件型号）
  const { model } = req.query;

  try {
    // 2. 调用第三方电商/价格API（填入你后续申请的接口 + 环境变量密钥）
    // const result = await fetch(第三方价格接口URL, { ... });
    // const priceData = await result.json();

    // 模拟实时价格数据（先跑通结构，后续替换真实接口）
    const priceData = {
      model: model || "RTX 4070",
      price: "3299",
      source: "demo"
    };

    // 3. 返回 JSON 数据给前端
    res.status(200).json(priceData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}