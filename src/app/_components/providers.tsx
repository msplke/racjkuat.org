"use client";

import { Analytics } from "./analytics";
import { TailwindIndicator } from "./tailwind-indicator";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}

      <Analytics />
      <TailwindIndicator />
    </ThemeProvider>
  );
}
