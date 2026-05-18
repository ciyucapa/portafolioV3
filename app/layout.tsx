import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cindy Dev",
  description: "Portfolio Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {/* ✨ NOISE OVERLAY */}
        <div className="noise" />

        {/* 🌌 MAIN CONTENT */}
        {children}
      </body>
    </html>
  );
}