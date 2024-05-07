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
    title: "Networking",
    description:
      "Rotaract clubs bring together people ages 18 and older to exchange ideas with each other and leaders in the community.",
  },
  {
    title: "Professional and Leadership Skills",
    description:
      "Rotaract provides an opportunity for young people to develop their professional and leadership skills through organizing projects and holding leadership positions within the club.",
  },
  {
    title: "Personal Growth",
    description:
      "Rotaract encourages personal growth by offering opportunities for members to step out of their comfort zones, take on new challenges, and develop interpersonal and communication skills.",
  },
  {
    title: "Community Service",
    description:
      "Rotaract clubs engage in meaningful community service projects, allowing members to have a positive impact on their local communities and contribute to important causes.",
  },
  {
    title: "International Connections",
    description:
      "Rotaract is a global organization, providing opportunities for members to connect with young adults from different countries and cultures, fostering cross-cultural understanding and collaboration.",
  },
  {
    title: "Access to Resources",
    description:
      "Being part of a larger international organization like Rotary International provides Rotaract clubs with access to resources, funding, and support for their projects and initiatives.",
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
    title: "YouTube",
    href: siteConfig.links.youtube,
    icon: Icons.youtube,
  },
];
