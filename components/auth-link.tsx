import type { AnchorHTMLAttributes } from "react";

const APP_ORIGIN = "https://app.heritavo.com";

type AuthLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: "/login" | "/register";
  /** Umami-Event-Property: wo auf der Seite der Link sitzt (header, hero, …). */
  trackingPosition: string;
};

/**
 * Link zu Login/Registrierung in der App (app.heritavo.com).
 *
 * Bewusst ein plain <a> statt next/link: dessen RSC-Prefetch liefe ueber den
 * 308 auf die App-Origin und wuerde an connect-src der CSP scheitern.
 *
 * Jeder Klick wird als Umami-Event gezaehlt (data-umami-event, vom Tracker
 * automatisch erfasst — kein eigenes JS noetig), damit sich die Conversion
 * je Position auswerten laesst.
 */
export default function AuthLink({ href, trackingPosition, ...props }: AuthLinkProps) {
  return (
    <a
      href={`${APP_ORIGIN}${href}`}
      data-umami-event={href === "/register" ? "cta-register" : "cta-login"}
      data-umami-event-position={trackingPosition}
      {...props}
    />
  );
}
