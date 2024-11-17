export const BLOG_AUTHORS: Record<
  string,
  {
    name: string;
    image: string;
    link?: string;
  }
> = {
  eliza: {
    name: "Elizabeth Kamau",
    image: "/avatars/eliza.png",
  },
  hafsa: {
    name: "Hafsa Hajir",
    image: "/avatars/hafsa.png",
  },
  kibuchi: {
    name: "Peter Kibuchi",
    image: "/avatars/kibuchi.png",
    link: "https://github.com/peterkibuchi",
  },
  wamweru: {
    name: "Peninah Wamweru",
    image: "/avatars/wamweru.png",
  },
  wanjiru: {
    name: "Wanjiru Wanjiku",
    image: "/avatars/wanjiru.png",
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
