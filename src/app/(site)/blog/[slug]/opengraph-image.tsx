import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

function absoluteUrl(path: string) {
    return new URL(path, SITE_URL).toString();
}

function clampText(s: string, max: number) {
    const t = (s ?? "").trim();
    if (t.length <= max) return t;
    return t.slice(0, max - 1).trimEnd() + "…";
}

function pickTitleStyle(title: string) {
    const len = (title ?? "").length;

    // Ajuste fino: esses thresholds batem bem pra 1200x630
    if (len <= 52) {
        return { fontSize: 64, maxHeight: 64 * 1.05 * 3 }; // até ~3 linhas
    }
    if (len <= 74) {
        return { fontSize: 56, maxHeight: 56 * 1.06 * 3 };
    }
    if (len <= 96) {
        return { fontSize: 50, maxHeight: 50 * 1.08 * 3 };
    }
    return { fontSize: 44, maxHeight: 44 * 1.10 * 3 };
}

function pickExcerptStyle(title: string) {
    const len = (title ?? "").length;

    // Se o título for muito longo, diminui ou até some com o excerpt.
    if (len > 110) {
        return { show: false, fontSize: 0, maxHeight: 0 };
    }
    if (len > 90) {
        return { show: true, fontSize: 22, maxHeight: 22 * 1.35 * 2 }; // ~2 linhas
    }
    return { show: true, fontSize: 26, maxHeight: 26 * 1.35 * 2 };
}


function categoryLabel(cat?: string | null) {
    const map: Record<string, string> = {
        "seguros-profissionais": "Seguro RC Profissional",
        auto: "Seguro Auto",
        frota: "Seguro de Frotas",
        empresarial: "Seguro Empresarial",
        vida: "Seguro de Vida",
        "seguro-saude": "Seguro Saúde",
    };
    return cat ? map[cat] ?? cat : "Blog";
}

type OgTheme = "dark" | "light";

function getTheme(sp?: { theme?: string }): OgTheme {
    const t = (sp?.theme ?? "").toLowerCase();
    return t === "light" ? "light" : "dark";
}

// Edge-safe base64
async function fetchAsDataUrl(url: string) {
    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return null;

        const ct = res.headers.get("content-type") || "image/svg+xml";
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

export default async function OpenGraphImage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ theme?: string }>;
}) {
    const { slug } = await params;
    const sp = (await searchParams) ?? {};
    const theme = getTheme(sp);

    // meta via API (nodejs)
    const metaRes = await fetch(absoluteUrl(`/api/blog/${slug}`), { cache: "no-store" });

    const fallbackTitle = "Integro Seguros";

    if (!metaRes.ok) {
        return new ImageResponse(
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: theme === "light" ? "#F7F6F5" : "#2A050B",
                    color: theme === "light" ? "#0B0B0B" : "#FAFAFA",
                    fontSize: 52,
                    fontWeight: 800,
                }}
            >
                Integro Seguros
            </div>,
            size
        );
    }

    const post = metaRes.ok
        ? ((await metaRes.json()) as {
            title: string;
            excerpt?: string | null;
            imageUrl?: string | null;
            category?: string | null;
        })
        : { title: fallbackTitle };

    const title = clampText(post.title || fallbackTitle, 140);
    const excerpt = clampText(post.excerpt ?? "", 180);
    const titleStyle = pickTitleStyle(title);
    const excerptStyle = pickExcerptStyle(title);
    const cat = categoryLabel(post.category);

    // Assets
    const logoDataUrl = await fetchAsDataUrl(absoluteUrl("/images/brand/logo-og.png"));
    const postImgUrl = post.imageUrl ? absoluteUrl(post.imageUrl) : null;
    const postImgDataUrl = postImgUrl ? await fetchAsDataUrl(postImgUrl) : null;

    // Fonts local (recomendado)
    // Coloque em public/fonts:
    // - PlayfairDisplay-Black.ttf
    // - Inter-SemiBold.ttf
    const [playfair, inter] = await Promise.all([
        fetch(absoluteUrl("/fonts/PlayfairDisplay-Black.ttf")).then((r) => r.arrayBuffer()),
        fetch(absoluteUrl("/fonts/Inter-SemiBold.ttf")).then((r) => r.arrayBuffer()),
    ]);

    const isLight = theme === "light";

    // Tokens visuais por tema
    const bg = isLight
        ? "linear-gradient(135deg, #FAF8F6 0%, #F4F1EE 55%, #FBFBFA 100%)"
        : "linear-gradient(135deg, #2A050B 0%, #3A070F 40%, #1E0307 100%)";

    const accent = "#C4162C";

    const titleColor = isLight ? "#111111" : "#FAFAFA";
    const borderSoft = isLight ? "rgba(18,18,18,0.14)" : "rgba(245,245,245,0.18)";
    const pillText = isLight ? "rgba(17,17,17,0.78)" : "rgba(255,255,255,0.85)";

    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    position: "relative",
                    display: "flex",
                    overflow: "hidden",
                    background: bg,
                }}
            >
                {/* PHOTO BACKGROUND (opcional) */}
                {postImgDataUrl ? (
                    <div style={{ position: "absolute", inset: 0, display: "flex" }}>
                        <img
                            src={postImgDataUrl}
                            style={{
                                width: "1200px",
                                height: "630px",
                                objectFit: "cover",
                                display: "flex",
                            }}
                        />
                        {/* overlay para manter identidade */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                background: isLight
                                    ? "linear-gradient(90deg, rgba(250,248,246,0.92) 0%, rgba(250,248,246,0.78) 55%, rgba(250,248,246,0.55) 100%)"
                                    : "linear-gradient(90deg, rgba(42,5,11,0.92) 0%, rgba(30,3,7,0.82) 55%, rgba(30,3,7,0.62) 100%)",
                            }}
                        />
                    </div>
                ) : null}

                {/* Formas diagonais “editorial” */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        background: isLight
                            ? "linear-gradient(135deg, rgba(196,22,44,0.10) 0%, rgba(196,22,44,0) 48%)"
                            : "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%)",
                        opacity: 1,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        left: "-220px",
                        top: "170px",
                        width: "780px",
                        height: "220px",
                        transform: "rotate(-18deg)",
                        background: isLight ? "rgba(196,22,44,0.08)" : "rgba(255,255,255,0.06)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: "-250px",
                        top: "60px",
                        width: "740px",
                        height: "220px",
                        transform: "rotate(-18deg)",
                        background: isLight ? "rgba(196,22,44,0.06)" : "rgba(255,255,255,0.05)",
                        display: "flex",
                    }}
                />

                {/* Conteúdo */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "74px 56px",
                        minHeight: "520px",
                        justifyContent: "space-between",
                    }}
                >
                    {/* TOP */}
                    <div
                        style={{
                            height: "104px",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: "24px",
                        }}
                    >
                        {/* Badge desenhado */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: 999,
                                        background: accent,
                                    }}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        borderRadius: "999px",
                                        border: `1px solid ${borderSoft}`,
                                        padding: "10px 14px",
                                        color: pillText,
                                        fontSize: "18px",
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        background: isLight ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.12)",
                                    }}
                                >
                                    {cat}
                                </div>
                            </div>

                            {/* “linha editorial” sutil */}
                            <div
                                style={{
                                    width: "220px",
                                    height: "3px",
                                    background: accent,
                                    opacity: 0.75,
                                    borderRadius: "999px",
                                    display: "flex",
                                }}
                            />
                        </div>

                        {/* Logo completa */}
                        {logoDataUrl ? (
                            <img
                                src={logoDataUrl}
                                style={{
                                    width: "320px",
                                    height: "72px",
                                    objectFit: "contain",
                                    display: "flex",
                                    flexShrink: 0,
                                    opacity: isLight ? 0.95 : 0.98,
                                }}
                            />
                        ) : (
                            <div
                                style={{
                                    display: "flex",
                                    color: titleColor,
                                    fontSize: 26,
                                    fontWeight: 700,
                                    fontFamily: "Inter",
                                }}
                            >
                                Integro Seguros
                            </div>
                        )}
                    </div>

                    {/* TITLE + EXCERPT */}
                    <div
                        style={{
                            maxWidth: "980px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                        }}
                    >
                        <div
                            style={{
                                color: "#F5F5F5",
                                fontSize: titleStyle.fontSize,
                                fontWeight: 850,
                                lineHeight: 1.05,
                                letterSpacing: "-0.03em",
                                textShadow: "0 10px 30px rgba(0,0,0,0.35)",

                                // 🔒 impede “trepar” no excerpt
                                maxHeight: `${titleStyle.maxHeight}px`,
                                overflow: "hidden",
                            }}
                        >
                            {title}
                        </div>

                        {excerpt && excerptStyle.show ? (
                            <div
                                style={{
                                    color: "rgba(245,245,245,0.86)",
                                    fontSize: excerptStyle.fontSize,
                                    lineHeight: 1.35,
                                    maxWidth: "920px",

                                    // 🔒 excerpt também fica contido
                                    maxHeight: `${excerptStyle.maxHeight}px`,
                                    overflow: "hidden",
                                }}
                            >
                                {excerpt}
                            </div>
                        ) : null}
                    </div>

                    {/* FOOTER */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            color: isLight ? "rgba(17,17,17,0.65)" : "rgba(255,255,255,0.72)",
                            fontSize: 22,
                            fontFamily: "Inter",
                            fontWeight: 600,
                        }}
                    >
                        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                            <span style={{ display: "flex" }}>integroseguros.com.br</span>
                            <span style={{ display: "flex", opacity: 0.55 }}>•</span>
                            <span style={{ display: "flex", opacity: 0.95 }}>Proteção inteligente</span>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                padding: "10px 14px",
                                borderRadius: "14px",
                                border: `1px solid ${isLight ? "rgba(196,22,44,0.35)" : "rgba(196,22,44,0.55)"}`,
                                background: isLight ? "rgba(196,22,44,0.08)" : "rgba(196,22,44,0.14)",
                                color: titleColor,
                                fontWeight: 700,
                            }}
                        >
                            Blog
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: "Playfair Display", data: playfair, weight: 900, style: "normal" },
                { name: "Inter", data: inter, weight: 600, style: "normal" },
            ],
        }
    );
}
