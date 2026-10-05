import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** 1200x630 share card used for WhatsApp, Facebook and X link previews. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "linear-gradient(135deg, #005aaa 0%, #04284a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 120, height: 10, borderRadius: 6, background: "#ffc20e" }} />
        <div style={{ display: "flex", marginTop: 36, fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>
          Kishor Career Point
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 40, color: "#ffc20e", fontWeight: 700 }}>
          NEET | IIT-JEE | Foundation
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "rgba(255,255,255,0.85)" }}>
          Coaching in Ichalkaranji, Kolhapur, Sangli, Karad and Hatkanangale
        </div>
      </div>
    ),
    ogSize,
  );
}
