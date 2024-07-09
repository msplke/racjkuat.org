import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import type {
  BenefitItem,
  FooterItem,
  MarketingConfig,
  PreviewImage,
  Testimonial,
} from "~/types";

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

export const previewImages: PreviewImage[] = [
  {
    title: "club-hangout",
    href: "/images/landing/club-hangout-2023.jpg",
  },
  {
    title: "muthiga",
    href: "/images/landing/muthiga-2022.jpg",
  },
  {
    title: "maisha-safe-house",
    href: "/images/landing/maisha-safe-house-2024.jpg",
  },
  {
    title: "fancied-friends",
    href: "/images/landing/muthiga-2023.jpg",
  },
];

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

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    job: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "The next-saas-stripe-starter repo has truly revolutionized my development workflow. With its comprehensive features and seamless integration with Stripe, I've been able to build and deploy projects faster than ever before. The documentation is clear and concise, making it easy to navigate through the setup process. I highly recommend next-saas-stripe-starter to any developer.",
  },
  {
    name: "Alice Smith",
    job: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  },
  {
    name: "David Johnson",
    job: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I was able to streamline the entire process and get payments up and running in no time. ",
  },
  {
    name: "Michael Wilson",
    job: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "I'm impressed by the quality of code and clear documentation of next-saas-stripe-starter. Kudos to the team!",
  },
  {
    name: "Sophia Garcia",
    job: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "next-saas-stripe-starter provided me with the tools I needed to efficiently manage user data. Thank you so much!",
  },
  {
    name: "Emily Brown",
    job: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "next-saas-stripe-starter has been an invaluable asset in my role as a marketing manager. With its seamless integration with Stripe, I've been able to launch targeted marketing campaigns with built-in payment functionality, allowing us to monetize our products and services more effectively.",
  },
  {
    name: "Jason Stan",
    job: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
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
    title: "TikTok",
    href: siteConfig.links.tiktok,
    icon: Icons.tiktok,
  },
  {
    title: "Twitter",
    href: siteConfig.links.twitter,
    icon: Icons.twitter,
  },
  {
    title: "YouTube",
    href: siteConfig.links.youtube,
    icon: Icons.youtube,
  },
];
