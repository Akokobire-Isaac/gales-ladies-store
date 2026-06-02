"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { PageLoader } from "@/components/layout/page-loader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <PageLoader />
      {children}
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          classNames: {
            toast: "font-sans border border-border/60 shadow-lg",
          },
        }}
      />
    </ThemeProvider>
  );
}
