import { getBaseUrl } from "~/lib/utils";

type SiteConfig = {
  name: string;
  url: string;
  description: string;
  creator: string;
  authors: { name: string; url: string }[];
  keywords: string[];
  ogImage: string;
  links: {
    github: string;
    instagram: string;
    tiktok: string;
    twitter: string;
    youtube: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "RacJkuat",
  url: getBaseUrl(),
  description: "Home to the Rotaract Club of Jkuat. Create Hope in the World.",
  creator: "Peter Kibuchi",
  authors: [{ name: "Peter Kibuchi", url: "https://github.com/peterkibuchi" }],
  keywords: ["Rotaract", "Rotary"],
  ogImage: `${getBaseUrl()}/og.png`,
  links: {
    github: "https://github.com/peterkibuchi/racjkuat.org",
    instagram: "https://instagram.com/racjkuat",
    tiktok: "https://tiktok.com/@racjkuat",
    twitter: "https://x.com/racjkuat",
    youtube: "https://youtube.com/@racjkuat",
  },
};
