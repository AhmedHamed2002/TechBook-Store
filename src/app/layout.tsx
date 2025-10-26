import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Providers } from "@/components/ui/providers";

export const metadata: Metadata = {
  title: "Book Store",
  description: "Online bookstore built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-900 transition-colors">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
