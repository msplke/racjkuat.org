import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";

import type { BenefitItem, FooterItem, MarketingConfig } from "~/types";
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

export const benefits: BenefitItem[] = [
  {
    title: "GitHub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "GitHub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "GitHub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "GitHub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "GitHub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "GitHub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

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
