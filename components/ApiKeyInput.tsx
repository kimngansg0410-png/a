import { useEffect, useState } from "react";

export default function ApiKeyInput() {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const savedKey = sessionStorage.getItem("GEMINI_API_KEY");
    if (savedKey) setApiKey(savedKey);
  }, []);

  const handleSave = () => {
    if (!apiKey.trim()) {
      alert("Cậu ơi, nhập API key trước đã nhé!");
      return;
    }
    sessionStorage.setItem("GEMINI_API_KEY", apiKey.trim());
    alert("Đã lưu API key rồi nè 👍");
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        background: "#f9f9f9",
      }}
    >
      <h3>🔑 Nhập Gemini API Key</h3>
      <input
        type="password"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Dán API key vào đây (AIza...)"
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 8,
        }}
      />
      <button onClick={handleSave}>Lưu API Key</button>
    </div>
  );
}
