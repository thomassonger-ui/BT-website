import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = "Bear Team Real Estate — Central Florida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default Open Graph image, generated at request time. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #14171A 0%, #23282D 60%, #113E3B 100%)",
          color: "#FDFCF8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#D3B876" }}>
          Bear Team Real Estate
        </div>
        <div style={{ fontSize: 72, marginTop: 24, lineHeight: 1.1, maxWidth: 900 }}>
          Find Your Place in Central Florida.
        </div>
        <div style={{ fontSize: 30, marginTop: 32, color: "#F6F1E7", opacity: 0.85 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
