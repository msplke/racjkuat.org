import { Inter as FontSans } from "next/font/google";
import LocalFont from "next/font/local";

import "~/styles/globals.css";

import { cn, constructMetadata } from "~/lib/utils";
import { Providers } from "./_components/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = LocalFont({
  src: "../styles/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <Providers>
          <div className="flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
