import React from "react";

export default function GuestLayout({ children }) {
  return (
    <div style={{ backgroundColor: "red", height: "100vh", width: "100%" }}>
      {children}
    </div>
  );
}
