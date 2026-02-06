import PageLoadLogger from "./PageLoadLogger";
import Counter from "./Counter";
import Timer from "./Timer";
import TrackingToggle from "./TrackingToggle";

export default function ActivityTracker() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>User Activity Tracker</h1>
      <PageLoadLogger />
      <Counter />
      <Timer />
      <TrackingToggle />
    </div>
  );
}
 