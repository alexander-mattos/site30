function toBase64(str: string) {
    return typeof window === "undefined"
        ? Buffer.from(str).toString("base64")
        : window.btoa(str);
}

export function blurDataURLShimmer(w: number, h: number) {
    const svg = `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#1a1a1a" offset="20%"/>
        <stop stop-color="#2a2a2a" offset="50%"/>
        <stop stop-color="#1a1a1a" offset="70%"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#0f0f0f"/>
    <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
  </svg>`;

    return `data:image/svg+xml;base64,${toBase64(svg)}`;
}
