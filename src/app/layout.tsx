import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sorrawit Kwanja | Fullstack Engineer",
  description: "Portfolio of Sorrawit Kwanja, a Fullstack Engineer passionate about technology and continuous learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
