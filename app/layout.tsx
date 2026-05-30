import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Bot Dashboard – Visual Analytics for Server Health",
  description: "Track member engagement, message sentiment, and channel activity with actionable insights for community managers and Discord server owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="69aabaa9-7635-40be-bc4e-97f92c7e976d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
