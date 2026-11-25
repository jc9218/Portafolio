import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#090a0f",
          borderRadius: "36px",
          border: "4px solid #10b981",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "68px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#ffffff",
          }}
        >
          <span style={{ color: "#10b981", fontSize: "52px" }}>&lt;</span>
          <span>JL</span>
          <span style={{ color: "#10b981", fontSize: "52px" }}>&gt;</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
