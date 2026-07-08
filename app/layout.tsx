import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heritavo – was zählt, bleibt.",
  description: "Heritavo sichert dein digitales Erbe – Ende-zu-Ende verschlüsselt, automatisch aktiviert und diskret übergeben.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
