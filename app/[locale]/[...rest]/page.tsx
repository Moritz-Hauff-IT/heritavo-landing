import { notFound } from "next/navigation";

// Unbekannte Pfade unter /<locale>/ landen hier, damit die lokalisierte
// not-found-Seite des [locale]-Layouts greift statt der Next-Standardseite.
export default function CatchAllPage() {
  notFound();
}
