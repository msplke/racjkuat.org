export const BLOG_AUTHORS = {
  mickasmt: {
    name: "mickasmt",
    image: "/images/avatars/shadcn.png",
    twitter: "miickasmt",
  },
  shadcn: {
    name: "shadcn",
    image: "/images/avatars/shadcn.png",
    twitter: "shadcn",
  },
};

export const BLOG_CATEGORIES: {
  title: string;
  slug: "news" | "articles";
  description: string;
}[] = [
  {
    title: "News",
    slug: "news",
    description: "Updates and announcements from the Rotaract Club of Jkuat.",
  },
  {
    title: "Articles",
    slug: "articles",
    description: "Articles by members of the community.",
  },
];
