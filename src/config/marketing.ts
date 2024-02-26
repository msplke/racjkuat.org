import { Icons } from "~/components";
import { siteConfig } from "~/config/site";
import type { BenefitItem, FooterItem, MarketingConfig } from "~/types";

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
    icon: Icons.gitHub,
  },
  {
    title: "Instagram",
    href: siteConfig.links.instagram,
    icon: Icons.instagram,
  },
  {
    title: "Twitter",
    href: siteConfig.links.twitter,
    icon: Icons.twitter,
  },
];
