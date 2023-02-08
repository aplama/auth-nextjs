"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function StarterNav() {
  const { data: session } = useSession();

  return (
    <div className="px-12 flex flex-row justify-between items-center py-6">
      <Link href={"/"}>Your Logo</Link>
      <nav className="flex flex-rowitems-center">
        <ul className="flex flex-row items-center space-x-4 mr-16">
          <li>
            <Link href={"/protected"}>Protected</Link>
          </li>
          <li>
            <Link href={"/unprotected"}>Unprotected</Link>
          </li>
        </ul>
        <div className="flex">
          {session && (
            <button onClick={() => signOut()} className="border px-4 py-2">
              Sign out
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
