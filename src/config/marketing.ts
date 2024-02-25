import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";

import { type FooterItem, type MarketingConfig } from "~/types";
import { siteConfig } from "./site";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};

export const footerItems: FooterItem[] = [
  {
    title: "GitHub",
    href: siteConfig.links.github,
    icon: GithubIcon,
  },
  {
    title: "Instagram",
    href: siteConfig.links.instagram,
    icon: InstagramIcon,
  },
  {
    title: "Twitter",
    href: siteConfig.links.twitter,
    icon: TwitterIcon,
  },
];
