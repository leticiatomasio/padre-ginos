import { createRootRoute, Outlet } from "@tanstack/react-router";
import AppShell from "../components/AppShell/AppShell";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppShell>
          <Outlet />
        </AppShell>
        <TanStackRouterDevtools />
      </>
    );
  },
});
