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
    title: "club-hangout-2023",
    href: "/images/landing/club-hangout-2023.jpg",
  },
  {
    title: "muthiga-2022",
    href: "/images/landing/muthiga-2022.jpg",
  },
  {
    title: "fancied-friends",
    href: "/images/landing/muthiga-2023.jpg",
  },
  {
    title: "maisha-safe-house-2024",
    href: "/images/landing/maisha-safe-house-2024.jpg",
  },
  {
    title: "beautiful-people",
    href: "/images/landing/installation-2024.jpg",
  },
  {
    title: "beautiful-smiles",
    href: "/images/landing/installation-2024-2.jpg",
  },
  {
    title: "membership-drive-2024",
    href: "/images/landing/membership-drive-2024.jpg",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Develop Leadership Skills",
    description:
      "Gain hands-on experience in leadership roles, enhancing your ability to lead projects, manage teams, and inspire others.",
  },
  {
    title: "Make a Positive Impact",
    description:
      "Engage in impactful service projects that address the needs of your community.",
  },
  {
    title: "Professional Development",
    description:
      "Access workshops, seminars, and networking events that help you enhance your professional skills and career prospects.",
  },
  {
    title: "Build Professional Networks",
    description:
      "Connect with like-minded young professionals and mentors who can offer guidance, support, and opportunities for career advancement.",
  },
  {
    title: "Experience Personal Growth",
    description:
      "Develop confidence, resilience, and a sense of purpose through active participation in Rotaract’s diverse activities.",
  },
  {
    title: "Friendship and Fun",
    description:
      "Build lasting friendships and enjoy social activities that create a sense of community and belonging.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    classification: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "The next-saas-stripe-starter repo has truly revolutionized my development workflow. With its comprehensive features and seamless integration with Stripe, I've been able to build and deploy projects faster than ever before. The documentation is clear and concise, making it easy to navigate through the setup process. I highly recommend next-saas-stripe-starter to any developer.",
  },
  {
    name: "Alice Smith",
    classification: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  },
  {
    name: "David Johnson",
    classification: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I was able to streamline the entire process and get payments up and running in no time. ",
  },
  {
    name: "Michael Wilson",
    classification: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "I'm impressed by the quality of code and clear documentation of next-saas-stripe-starter. Kudos to the team!",
  },
  {
    name: "Sophia Garcia",
    classification: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "next-saas-stripe-starter provided me with the tools I needed to efficiently manage user data. Thank you so much!",
  },
  {
    name: "Emily Brown",
    classification: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "next-saas-stripe-starter has been an invaluable asset in my role as a marketing manager. With its seamless integration with Stripe, I've been able to launch targeted marketing campaigns with built-in payment functionality, allowing us to monetize our products and services more effectively.",
  },
  {
    name: "Jason Stan",
    classification: "Web Designer",
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
