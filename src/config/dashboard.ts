import { Icons } from "~/components";
import { type DashboardConfig } from "~/types";

export const dashboardConfig: DashboardConfig = {
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
  sidebarNav: [
    {
      title: "Posts",
      href: "/dashboard",
      icon: Icons.post,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Icons.settings,
    },
  ],
};
