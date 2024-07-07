import type { Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "~/styles/globals.css";

import { fontHeading, fontSans } from "~/assets/fonts";
import { Toaster } from "~/components/ui/toaster";
import { cn, constructMetadata } from "~/lib/utils";
import { Analytics } from "./_components/analytics";
import { TailwindIndicator } from "./_components/tailwind-indicator";
import { ThemeProvider } from "./_components/theme-provider";

export const metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontHeading.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="flex-1">{children}</main>

            <Analytics />
            <TailwindIndicator />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
