import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

/** Unterseiten (Blog, Presse, Rechtliches): gemeinsamer Kopf und Fuss. */
export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
