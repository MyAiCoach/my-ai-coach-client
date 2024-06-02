import { LoginToken } from "./app/contracts/token/LoginToken";
import { verifyJwtToken } from "./app/libs/auth/verifyToken";
import { NextResponse } from "next/server";

const AUTH_PAGES = ["/auth/login", "/auth/register"];

const isAuthPages = (url: string) =>
  AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request: any) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  const hasVerifiedToken: LoginToken = token && (await verifyJwtToken(token));

  const isAuthPageRequested = isAuthPages(nextUrl.pathname);
  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();

      return response;
    }

    const response = NextResponse.redirect(new URL("/panel", url));

    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);
    return NextResponse.redirect(new URL(`/auth/login?${searchParams}`, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/panel", "/createWorkout"],
};
