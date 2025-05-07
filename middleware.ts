import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const origin = requestHeaders.get("origin") ?? "";

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const allowedOrigins = [
    "http://localhost:3000",
    "https://ryanadhi.tech",
    "https://personal-sites-dor.pages.dev",
  ];

  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "*");

  return response;
}
