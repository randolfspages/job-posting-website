"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { logout } from "@/lib/auth";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-white shadow-sm fixed left-0 right-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="text-stone-900 flex items-center">
            <Link href="/">
              <span className="font-semibold">&Gamma;&Delta;&Beta;</span>
              <small className="ml-2 font-semibold text-stone-900">
                jobs
              </small>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Browse
            </Link>
            {session ? (
              <>
                <Link
                  href="/jobs/post"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Post
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Board
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
