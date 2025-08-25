import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanvi Portfolio",
  description: "Portfolio website of Tanvi Kanaiya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
