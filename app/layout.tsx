import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Pablo Gracia",
  description: "Welcome to my personal page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <div className="flex w-full">
          <Layout>{children}</Layout>
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
