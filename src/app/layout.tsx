import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Sorrawit Kwanja",
  description: "Portfolio website of Sorrawit Kwanja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
