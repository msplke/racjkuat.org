type SiteConfig = {
  name: string;
  url: string;
  description: string;
  creator: string;
  authors: { name: string; url: string }[];
  keywords: string[];
  ogImage?: string;
  links: {
    github: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "RacJkuat",
  url: "https://racjkuat.vercel.app",
  description: "Home to the Rotaract Club of Jkuat. Create Hope in the World.",
  creator: "Peter Kibuchi",
  authors: [{ name: "Peter Kibuchi", url: "https://www.peterkibuchi.com" }],
  keywords: ["Rotaract", "Rotary"],
  links: {
    github: "https://github.com/msplke/racjkuat.org",
    instagram: "https://instagram.com/racjkuat",
    tiktok: "https://tiktok.com/@racjkuat",
    youtube: "https://youtube.com/@racjkuat",
  },
};
