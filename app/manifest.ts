import type { MetadataRoute } from "next";

// Favicon, SVG-Icon und Apple-Touch-Icon kommen per Datei-Konvention aus
// app/ (favicon.ico, icon.svg, apple-icon.png); das Manifest liefert die
// grossen Icons fuer Android ("Zum Startbildschirm hinzufuegen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Heritavo",
    short_name: "Heritavo",
    description: "Damit deine Familie weiss, was sie wissen muss.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#1B4332",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
