import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const WINE = "#9b1b30";
const PAPER = "#f2e9d8";
const INK = "#241b12";
const MUSTARD = "#d4a017";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: PAPER,
          color: INK,
          fontFamily: "serif",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 46, height: 4, backgroundColor: MUSTARD }} />
            <span style={{ fontSize: 26, letterSpacing: 6, color: WINE }}>
              LA TABERNA
            </span>
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            Cocina italiana de autor,<br />
            <span style={{ color: WINE, fontStyle: "italic" }}>
              hecha en casa.
            </span>
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 30,
            color: INK,
          }}
        >
          <span>Lomas de Zamora · desde hace más de 20 años</span>
          <span style={{ color: WINE }}>4.7 en Google · N.º 2 en TripAdvisor</span>
        </div>
      </div>
    ),
    { ...size },
  );
}