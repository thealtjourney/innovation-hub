import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innovation Hub — A Home for Better Ideas",
  description:
    "Explore ideas, applications and experiments for better social housing. Step inside the house to discover tools for residents, homes and communities.",
  openGraph: {
    title: "Innovation Hub",
    description:
      "A working collection of ideas for better homes, stronger communities and thoughtful digital services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
