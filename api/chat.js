export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  console.log('DEBUG - apiKey value:', apiKey);

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const contents = messages.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{
              text: 'You are a helpful assistant for IdentityShield, an Identity and Access Management (IAM) company. Answer questions about IAM solutions, services, and general identity security queries concisely and helpfully. Keep answers short (2-4 sentences) unless more detail is explicitly asked for.'
            }],
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', data);
      return res.status(response.status).json({ error: data.error?.message || 'Failed to get response' });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure how to respond to that.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}