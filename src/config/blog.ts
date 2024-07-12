export const BLOG_AUTHORS: Record<
  string,
  {
    name: string;
    image: string;
    link?: string;
  }
> = {
  kibuchi: {
    name: "Peter Kibuchi",
    image:
      "https://gravatar.com/avatar/6b24bb0221d58ff25a5279fe6d5aec339681fcf96d1650f6b54eb5675e377af1?d=retro",
    link: "https://github.com/peterkibuchi",
  },
  wamweru: {
    name: "Peninah Wamweru",
    image:
      "https://gravatar.com/avatar/25249cd395309ed59b3b22785f0e61f35926e31b0b8d67af68847d4bb5c4f6b7?d=retro",
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
