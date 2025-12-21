// src/app/blog/[slug]/social-image/route.ts
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

// Instagram Feed 4:5
const size = { width: 1080, height: 1350 };

function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function clampText(s: string, max: number) {
  const t = (s ?? "").trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).trimEnd() + "…";
}

// quebra em linhas por "tamanho aproximado" pra evitar o título trepar no excerpt
function wrapLines(text: string, maxCharsPerLine: number, maxLines: number) {
  const words = (text ?? "").trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";

  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (test.length <= maxCharsPerLine) {
      line = test;
    } else {
      if (line) lines.push(line);
      line = w;
      if (lines.length >= maxLines - 1) break;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);

  // se sobrou palavra, reticências na última linha
  const usedWords = lines.join(" ").split(/\s+/).length;
  if (usedWords < words.length) {
    lines[lines.length - 1] = clampText(lines[lines.length - 1], maxCharsPerLine - 1);
  }
  return lines;
}

async function fetchAsDataUrl(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") || "image/png";
    const buffer = await res.arrayBuffer();

    let binary = "";
    const bytes = new Uint8Array(buffer);
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    const base64 = btoa(binary);
    return `data:${ct};base64,${base64}`;
  } catch {
    return null;
  }
}

function categoryLabel(cat?: string | null) {
  const map: Record<string, string> = {
    "seguros-profissionais": "Seguros Profissionais",
    auto: "Seguro Auto",
    frota: "Seguro de Frotas",
    empresarial: "Seguro Empresarial",
    vida: "Seguro de Vida",
    "seguro-saude": "Seguro Saúde",
  };
  return cat ? map[cat] ?? cat : "Blog";
}

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ slug: string }> }
) {
  const { slug } = await ctx.params;

  const metaRes = await fetch(absoluteUrl(`/api/blog/${slug}`), { cache: "no-store" });
  if (!metaRes.ok) {
    return new ImageResponse(
      <div
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(900px 700px at 15% 25%, rgba(196,22,44,0.35) 0%, rgba(196,22,44,0) 55%), linear-gradient(135deg, #3a0a12 0%, #1a0b10 55%, #12070b 100%)",
          color: "#F5F5F5",
          fontSize: 46,
          fontWeight: 800,
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        Integro Seguros
      </div>,
      size
    );
  }

  const post = (await metaRes.json()) as {
    title: string;
    excerpt?: string | null;
    imageUrl?: string | null;
    category?: string | null;
  };

  const cat = categoryLabel(post.category);
  const title = clampText(post.title, 120);
  const excerpt = post.excerpt ? clampText(post.excerpt, 220) : "";

  // fundo: usa imagem do post se existir, senão brand background
  const postImageUrl = post.imageUrl ? absoluteUrl(post.imageUrl) : null;
  const postImageDataUrl = postImageUrl ? await fetchAsDataUrl(postImageUrl) : null;

  // logo completa
  const logoDataUrl = await fetchAsDataUrl(absoluteUrl("/images/brand/logo-og.svg"));

  // SAFE AREA (centro) — evita cortes em previews e mantém hierarquia
  const safePadding = 90; // margem externa
  const safeW = size.width - safePadding * 2;   // 900
  const safeH = size.height - safePadding * 2;  // 1170

  // tipografia: título em 3–4 linhas no máximo
  const titleLines = wrapLines(title, 28, 4);

  return new ImageResponse(
    (
      <div
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          background: "#12070b",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        {/* background */}
        {postImageDataUrl ? (
          <>
            <img
              src={postImageDataUrl}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(20,10,14,0.40) 0%, rgba(20,10,14,0.86) 60%, rgba(20,10,14,0.94) 100%)",
              }}
            />
          </>
        ) : (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(900px 700px at 18% 22%, rgba(196,22,44,0.35) 0%, rgba(196,22,44,0) 60%), radial-gradient(700px 520px at 90% 18%, rgba(245,245,245,0.10) 0%, rgba(245,245,245,0) 60%), linear-gradient(135deg, #3a0a12 0%, #1a0b10 55%, #12070b 100%)",
              }}
            />
            {/* “placas” sutis */}
            <div
              style={{
                position: "absolute",
                top: 140,
                left: -140,
                width: 560,
                height: 360,
                background: "rgba(245,245,245,0.06)",
                transform: "rotate(-12deg)",
                borderRadius: 28,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 210,
                right: -160,
                width: 600,
                height: 380,
                background: "rgba(0,0,0,0.10)",
                transform: "rotate(14deg)",
                borderRadius: 28,
                border: "1px solid rgba(245,245,245,0.06)",
              }}
            />
          </>
        )}

        {/* barra lateral */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "16px",
            height: "100%",
            background: "#C4162C",
          }}
        />

        {/* SAFE FRAME */}
        <div
          style={{
            position: "relative",
            margin: `${safePadding}px`,
            width: `${safeW}px`,
            height: `${safeH}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          {/* topo */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: "#C4162C",
                  }}
                />
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(245,245,245,0.22)",
                    color: "rgba(245,245,245,0.92)",
                    fontSize: 18,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    background: "rgba(0,0,0,0.16)",
                  }}
                >
                  {cat}
                </div>
              </div>

              <div
                style={{
                  width: 140,
                  height: 3,
                  borderRadius: 999,
                  background: "rgba(196,22,44,0.85)",
                }}
              />
            </div>

            {logoDataUrl ? (
              <img
                src={logoDataUrl}
                alt="Integro Seguros"
                style={{ height: 54, opacity: 0.98 }}
              />
            ) : (
              <div style={{ color: "#F5F5F5", fontSize: 24, fontWeight: 800 }}>
                Integro Seguros
              </div>
            )}
          </div>

          {/* miolo */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* título */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {titleLines.map((ln, idx) => (
                <div
                  key={idx}
                  style={{
                    color: "#F5F5F5",
                    fontSize: 78,
                    fontWeight: 900,
                    lineHeight: 1.02,
                    letterSpacing: "-0.03em",
                    fontFamily: "serif", // “editorial” (fica premium)
                    textShadow: "0 14px 32px rgba(0,0,0,0.28)",
                  }}
                >
                  {ln}
                </div>
              ))}
            </div>

            {/* excerpt */}
            {excerpt ? (
              <div
                style={{
                  color: "rgba(245,245,245,0.86)",
                  fontSize: 30,
                  lineHeight: 1.32,
                  maxWidth: 920,
                  textShadow: "0 10px 22px rgba(0,0,0,0.22)",
                }}
              >
                {excerpt}
              </div>
            ) : null}
          </div>

          {/* rodapé (sempre “ancorado” embaixo) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "rgba(245,245,245,0.78)",
              fontSize: 22,
            }}
          >
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <span>integroseguros.com.br</span>
              <span style={{ opacity: 0.55 }}>•</span>
              <span>Proteção inteligente</span>
            </div>

            <div
              style={{
                padding: "10px 16px",
                borderRadius: 16,
                border: "1px solid rgba(196,22,44,0.55)",
                background: "rgba(196,22,44,0.16)",
                color: "#F5F5F5",
                fontWeight: 800,
              }}
            >
              Blog
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
