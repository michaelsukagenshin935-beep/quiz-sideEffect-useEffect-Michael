import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) return; 
    console.log("Count updated");
  }, [count]);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ marginBottom: "20px", border: "1px solid #f60404", padding: "10px", borderRadius: "8px" }}>
      <h2>Button Click Counter</h2>
      <p>Count: <strong>{count}</strong></p>
      <button
        onClick={handleIncrease}
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#2196f3",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
    </div>
  );
}
