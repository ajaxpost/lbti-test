export function getSiteUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "https://lbti.example.com";
}

export const SITE_NAME = "LBTI";
export const AUTHOR_NAME = "LBTI";
export const AUTHOR_URL = "#";
