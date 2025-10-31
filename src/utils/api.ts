/*
  API helper:
  - Use VITE_API_BASE_URL (preferred) or VITE_API_URL (legacy) baked at build time.
  - If empty => use relative paths (works with Vite proxy / same-origin).
  - Returns parsed JSON (or text) and throws on network / HTTP error.
*/
export function getApiBaseUrl(): string {
  const env = (import.meta.env as any) || {};
  const raw = (env.VITE_API_BASE_URL ?? env.VITE_API_URL ?? "").toString().trim();
  if (!raw) return ""; // use relative /api paths

  // normalize trailing slash
  return raw.replace(/\/$/, "");
}

export async function apiFetch(input: string, init?: RequestInit) {
  const base = getApiBaseUrl();
  const url = base ? `${base}${input}` : input; // input should start with /api

  try {
    const res = await fetch(url, {
      // default to CORS for cross-origin requests; callers can override
      mode: "cors",
      ...(init || {}),
    });

    // network-level failure
    if (!res) throw new Error("No response");

    // non-2xx -> try parse body for error details
    if (!res.ok) {
      let body = "";
      try { body = await res.text(); } catch {}
      throw new Error(`HTTP ${res.status} ${res.statusText} - ${body || url}`);
    }

    // parse JSON when available
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) return res.json();
    return res.text();
  } catch (err: any) {
    console.error("apiFetch failed for:", url, "err:", err);
    throw new Error(`Failed to fetch ${url}: ${err?.message || String(err)}`);
  }
}