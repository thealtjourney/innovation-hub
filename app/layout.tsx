import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innovation Hub — Social Housing ICT Portfolio",
  description:
    "A portfolio of digital products advancing innovation in social housing — from operational tools to digital twin platforms.",
  openGraph: {
    title: "Innovation Hub",
    description:
      "A portfolio of digital products advancing innovation in social housing.",
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
      <body>{children}</body>
    </html>
  );
}
