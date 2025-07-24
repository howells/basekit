import { SidebarLayout } from "@/components/sidebar-layout";
import { ReactQueryProvider } from "@/lib/react-query";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patternmode",
  description: "Patternmode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <ReactQueryProvider>
          <div className="isolate">
            <SidebarLayout>{children}</SidebarLayout>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
