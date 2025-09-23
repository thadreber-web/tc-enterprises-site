// Minimal chat proxy. If HUGGINGFACE_API_KEY is set, forwards to an inference endpoint; otherwise returns a placeholder.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed." });
  }
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ reply: "No message." });

  const key = process.env.HUGGINGFACE_API_KEY;
  const model = process.env.HF_MODEL || "mistralai/Mixtral-8x7B-Instruct-v0.1";

  if (!key) {
    return res.status(200).json({ reply: "Thanks! Live agent handoff coming soon. (Add HUGGINGFACE_API_KEY to enable AI.)" });
  }
  try {
    const resp = await fetch(`https://api-inference.huggingface.co/models/${encodeURIComponent(model)}`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: message, parameters: { max_new_tokens: 128 } })
    });
    const data = await resp.json();
    let text = Array.isArray(data) && data[0]?.generated_text ? data[0].generated_text : (data?.generated_text || JSON.stringify(data).slice(0, 500));
    return res.status(200).json({ reply: String(text) });
  } catch (e) {
    return res.status(500).json({ reply: "Upstream error." });
  }
}
