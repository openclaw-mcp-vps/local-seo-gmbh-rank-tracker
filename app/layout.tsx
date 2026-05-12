import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMB Rank Tracker — Track Google My Business Rankings",
  description: "Monitor local search rankings for your Google My Business listings across different zip codes and keywords. Built for local business owners and SEO agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b5a1b221-a7c5-4b7c-a7e7-09cee4e54950"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
