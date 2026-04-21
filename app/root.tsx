import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
// Self-hosted Poppins (Latin subset only — avoids external Google Fonts dependency)
import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-900.css";
import logoUrl from "./assets/logo-short.webp";
import { Scripts as AnalyticsScripts } from "./scripts";

export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    href: "/images/hero-800.webp",
    as: "image",
    type: "image/webp",
  },
  {
    rel: "icon",
    type: "image/png",
    href: logoUrl,
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <AnalyticsScripts />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Restore path saved by 404.html before React Router reads window.location */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var r=sessionStorage.getItem('spa_redirect');if(r){sessionStorage.removeItem('spa_redirect');try{var u=new URL(r);if(u.pathname!==window.location.pathname||u.search!==window.location.search){history.replaceState(null,'',u.pathname+u.search+u.hash);}}catch(e){}}})();` }} />
        <Meta />
        <Links />
        <Scripts />
      </head>
      <body>
        {children}
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
