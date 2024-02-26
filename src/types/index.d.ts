import { type LucideIcon } from "lucide-react";

export type MainNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type FooterItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon: LucideIcon;
};
