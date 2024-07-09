import { type LucideIcon } from "lucide-react";

export type MainNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SidebarNavItem = {
  title: string;
  icon: LucideIcon;
  disabled?: boolean;
  external?: boolean;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type PreviewImage = {
  title: string;
  href: string;
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  job: string;
  image: string;
  review: string;
};

export type FooterItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon: LucideIcon | ((props: LucideProps) => JSX.Element);
};
