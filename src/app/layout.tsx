import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vincent Nicholas Buzali | Software Engineering Portfolio",
  description:
    "Professional portfolio focused on business software, technology, and AI work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}