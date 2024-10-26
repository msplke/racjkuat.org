import { Inter as FontSans } from "next/font/google";
import LocalFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontHeading = LocalFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-heading",
});
