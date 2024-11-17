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
    href: "https://utfs.io/a/cxjgggfg3h/NiN0ZwlP2DtRIHtkpPdpC4aPEXDMFLft6r78qoUj50WRcKJl",
  },
  {
    title: "muthiga-2022",
    href: "https://utfs.io/a/cxjgggfg3h/NiN0ZwlP2DtR3nNlH0fYvPkRr24G8XYsKtfDiM0IcEOBaqmn",
  },
  {
    title: "fancied-friends",
    href: "https://utfs.io/a/cxjgggfg3h/NiN0ZwlP2DtRTuWTPlgCmpvGYPOEhbiyQHuUZLCS34JaIq0t",
  },
  {
    title: "maisha-safe-house-2024",
    href: "https://utfs.io/a/cxjgggfg3h/NiN0ZwlP2DtRUX9yS5tPTBKkqpXz2Y40IvSDGhCWAJj5lyex",
  },
  {
    title: "beautiful-people",
    href: "https://utfs.io/a/cxjgggfg3h/NiN0ZwlP2DtRTNYiEvCmpvGYPOEhbiyQHuUZLCS34JaIq0tc",
  },
  {
    title: "beautiful-smiles",
    href: "https://utfs.io/a/cxjgggfg3h/NiN0ZwlP2DtRYjvxXDO2tkZI0sJEzmL5UQ8iXNHS7ahMnF9u",
  },
  {
    title: "membership-drive-2024",
    href: "https://utfs.io/a/cxjgggfg3h/NiN0ZwlP2DtR54Mdlha02fpy48GBsHbhDYP3kwugqExmTMNK",
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
    name: "Denise Mbugua",
    classification: "Marine Engineering",
    image: "/avatars/denise.png",
    review:
      "Being a part of Rac JKUAT has been the best experience in my university life. ❤️",
  },
  {
    name: "Mitchelle Mose",
    classification: "Architecture",
    image: "/avatars/mose.png",
    review:
      "Rotaract has really helped me keep my sanity in University which really hasn't been easy. The people, their energy, love, togetherness and fun keeps me going though they may not be aware of this. I'm thankful for the society and hope it blesses many more people.",
  },
  {
    name: "Traicy Akinyi",
    classification: "Applied Mathematics and Statistics",
    image: "/avatars/traicy.png",
    review:
      "Personally I'm a very social person, an extrovert labda. But despite that, kukuwa extrovert has not helped me so much kwa side ya kumeet new people. Yes I'm good with crowds and all that but sasa ikifika the time nafaa kuapproach people and get to know them ile ya kabisa, the introverted side of me tends to come out. I joined Rotaract because my close friend was the club president at that time and alikuwa amenipush sana to come for their meetings, and I'm glad I did. Rotaract has helped me so much to not feel afraid to express myself in front of people. Watu wa Rotaract ni watu very social, hutaboeka. So most of the times huwa najipata nimecreate bonds with people ata I couldn't expect nikuwe friends na wao. That has been a big step for me and I'm proud of myself. I'm really grateful for that.",
  },
  {
    name: "Christine Thomas",
    classification: "Mathematics and Computer Science",
    image: "/avatars/tina.png",
    review:
      "Rac JKUAT has been everything for me. My mantra in life has been, 'Our main purpose is to help others in life and if you can't, at the very least don't hurt them.' Rac JKUAT has enabled me to be more compassionate, kind, empathetic, less selfish, and above all to be of service to the community and people around me, therefore living my mantra. The best part of it all is that I get to do this while having fun which is amazing❗️ Rac JKUAT has been amazing. 💯",
  },
  {
    name: "Hilda Chepkirui",
    classification: "Electronics and Computer Engineering",
    image: "/avatars/hilda.png",
    review:
      "Rac JKUAT means family, friends, service and fun wrapped in one. I've have grown professionally, gained leadership skills, built networks and friendships. I still have more to gain and a lot to learn.",
  },
  {
    name: "Miles Mwere",
    classification: "Statistics",
    image: "/avatars/miles.png",
    review:
      "It gave me a place to live, I don't usually interact with that many people but it has been a platform for meeting new people, making new memories, having fun and generally being a better version of myself. I love that it is a community that focuses on giving back and helping those in need, and that part really sits tight with me. My only regret is that I didn't join sooner. 😂😭 But all in all I LOVE IT OVER HERE. ❤️",
  },
  {
    name: "Faith Mwangi",
    classification: "Civil Engineering",
    image: "/avatars/aisee.png",
    review:
      "I've gained amazing friendships from Rotaract. It's such a loving community. ❤️ It amazes me how young people come together to serve and who have such fun while at it. 🥹❤️",
  },
  {
    name: "Peter Kibuchi",
    classification: "Computer Science",
    image: "/avatars/kibuchi.png",
    review:
      "I mean, what can I say? I'm lost for words. Through this club I have been able to give back to the community, and have more impact than I ever could, had I been working alone. I have met countless wonderful people and professionals, many of whom have gone on to become close friends and associates. I have grown, both professionally and personally, beyond anything my wildest imagination could have conceived when I first joined. But perhaps most importantly, the club has empowered me to express my creativity, to create something out of nothing, to push the limits of what I thought possible, and to discover my innermost authentic self. For this and for much more I didn't capture here, I will be eternally grateful.",
  },
  {
    name: "Julian Ndile",
    classification: "Architecture",
    image: "/avatars/julian.png",
    review:
      "Kidogo nipate mtu alafu akaniponyoka... lakini kuna mwingine ako mahali nimemark... Jokes aside, community service at Muthiga is super fulfilling, the talks we have are enlightening, and the fun we have in service and development is unmatched. 🥂",
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
