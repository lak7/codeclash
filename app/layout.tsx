import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codeclash 2.0",
  description: "Created with love and passion",
  generator: "lak7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
