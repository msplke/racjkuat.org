import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // Browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use Vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // Dev SSR should use localhost
}

export function absoluteUrl(path: string) {
  return `${getBaseUrl()}${path}`;
}
