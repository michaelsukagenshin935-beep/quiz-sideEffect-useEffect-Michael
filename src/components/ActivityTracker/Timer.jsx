import { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer cleanup done");
    };
  }, []);

  return (
    <div style={{ marginBottom: "20px", border: "1px solid #ff0606", padding: "10px", borderRadius: "8px" }}>
      <h2>Timer</h2>
      <p>Timer: <strong>{timer}</strong> seconds</p>
    </div>
  );
}
