import { useEffect } from "react";

export default function PageLoadLogger() {
  useEffect(() => {
    console.log("Page loaded");
  }, []);

  return null;
}
