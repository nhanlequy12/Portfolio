import React from "react";
import { T } from "./ui";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem", textAlign: "center", borderTop: "1px solid rgba(201,169,110,0.1)", background: T.dark }}>
      <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.75rem", color: T.muted, letterSpacing: "1px" }}>
        © 2026 Nhan Le Quy — AI Engineer · Ho Chi Minh City
      </p>
    </footer>
  );
}
