import { useState, useEffect } from "react";

export default function TrackingToggle() {
  const [tracking, setTracking] = useState(false);

  useEffect(() => {
    if (!tracking) return; 
    console.log("Tracking active");
  }, [tracking]);

  const toggleTracking = () => setTracking((prev) => !prev);

  return (
    <div style={{ marginBottom: "20px", border: "1px solid #f90606", padding: "10px", borderRadius: "8px" }}>
      <h2>Tracking</h2>
      <p>Status: <strong>{tracking ? "ON" : "OFF"}</strong></p>
      <button
        onClick={toggleTracking}
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: tracking ? "#c81717" : "#4caf50",
          color: "#fff",
          cursor: "pointer", 
        }}
      >
        {tracking ? "Stop Tracking" : "Start Tracking"}
      </button>
    </div>
  );
}
