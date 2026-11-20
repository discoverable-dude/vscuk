import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "VSC UK: working with the charity sector to build a better world";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const img = (f: string, mime: string) => readFile(join(process.cwd(), "public/images", f)).then(b => `data:${mime};base64,${b.toString("base64")}`);
  const [logo, photo] = await Promise.all([img("vsc-logo.png", "image/png"), img("willesden.jpg", "image/jpeg")]);
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#1c2759", color: "#fff" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700, padding: "64px 56px 64px 72px" }}>
          <img src={logo} width={225} height={75} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", fontSize: 58, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1 }}>Working with the charity sector to build a better world.</div>
            <div style={{ display: "flex", fontSize: 26, color: "#d7dcf0" }}>Charity centres, leadership and training since 2004</div>
          </div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#7fc0ff" }}>vscuk.org</div>
        </div>
        <div style={{ display: "flex", flex: 1, borderTopLeftRadius: 28, overflow: "hidden", marginTop: 56 }}>
          <img src={photo} width={500} height={574} style={{ objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    size
  );
}
