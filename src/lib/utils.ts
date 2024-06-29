import { type Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "~/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = "website",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    creator: siteConfig.creator,
    authors: siteConfig.authors,
    keywords: siteConfig.keywords,
    icons: {
      apple: "/apple-touch-icon.png",
      icon: "/android-chrome-192x192.png",
      shortcut: "/favicon.ico",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title,
      description,
      siteName: title,
      url,
      type,
      locale: "en-US",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      // creator: "@example",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
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
  if (typeof window !== "undefined") return window.location.origin; // Browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use Vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // Dev SSR should use localhost
}

export function absoluteUrl(path: string) {
  return `${getBaseUrl()}${path}`;
}
