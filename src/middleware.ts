import { clerkMiddleware } from "@clerk/nextjs/server";

import { NextResponse } from "next/server"; // Import NextResponse for redirection

// This middleware will protect specific routes like `/events` and redirect to the sign-in page if the user is not authenticated.
export default clerkMiddleware(async (auth, req) => {
  // The `auth()` function returns a promise, and we need to await the user data.
  const user = await auth();

  const protectedRoutes = ['/landing'];

  // Check if the requested URL is in the list of protected routes
  if (protectedRoutes.some(route => req.url?.startsWith(route))) {
    // If the user is not authenticated, redirect them to the sign-in page
    if (!user?.userId) {
      // Redirect to sign-in page with the original URL as a redirect URL
      return NextResponse.redirect(`/sign-in?redirect_url=${encodeURIComponent(req.url ?? '')}`);
    }
  }

  return NextResponse.next(); // Proceed if authenticated or on public routes
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};