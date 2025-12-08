import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",         // Permite ver la página principal de marketing.
    "/sign-in(.*)", // Rutas de Login de Clerk.
    "/sign-up(.*)"  // Rutas de Registro de Clerk.
  ],
  ignoredRoutes: ["/api/webhooks"],
});