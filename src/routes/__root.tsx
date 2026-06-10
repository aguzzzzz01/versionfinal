import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import ogImage from "../assets/logo_fixed_1779202163805_1779229384372.png";
import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/Cart";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Expo Store" },
      {
        name: "description",
        content:
          "Expo Store Prime is a mobile-optimized web catalog for EXPOSTORE, showcasing products and facilitating purchases.",
      },
      { name: "author", content: "EXPOSTORE" },
      { property: "og:title", content: "Expo Store" },
      {
        property: "og:description",
        content:
          "EXPOSTORE Lanús: Catálogo exclusivo de perfumes árabes, iPhones y cuidado capilar. Envíos a todo el país.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Expo Store" },
      {
        name: "twitter:description",
        content:
          "EXPOSTORE Lanús: Catálogo exclusivo de perfumes árabes, iPhones y cuidado capilar. Envíos a todo el país.",
      },
      {
        property: "og:image",
        content: ogImage,
      },
      {
        name: "twitter:image",
        content: ogImage,
      },
      { name: "description", content: "A deployment application for managing and" },
      { property: "og:description", content: "A deployment application for managing and" },
      { name: "twitter:description", content: "A deployment application for managing and" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/889d80e9-47f5-49f5-9429-7d6693e995b8/id-preview-e5ebe379--25ec3620-07eb-4345-8298-85ea4739596d.lovable.app-1779558574916.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/889d80e9-47f5-49f5-9429-7d6693e995b8/id-preview-e5ebe379--25ec3620-07eb-4345-8298-85ea4739596d.lovable.app-1779558574916.png" },
      { name: "description", content: "Swift Deployment automates the deployment of applications." },
      { property: "og:description", content: "Swift Deployment automates the deployment of applications." },
      { name: "twitter:description", content: "Swift Deployment automates the deployment of applications." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Outlet />
        <CartDrawer />
      </CartProvider>
      <Outlet />
    </QueryClientProvider>
  );
}
