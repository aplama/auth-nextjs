"use client";
// import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function ProvidersWrapper({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
