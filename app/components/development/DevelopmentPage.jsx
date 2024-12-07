import React from "react";
import Link from "next/link";
import Navbar from "../common/NavBar";

export default function DevelopmentPage() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
            <div className="text-6xl text-yellow-400 mb-4">🚧</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Page Under Construction
            </h1>
            <p className="text-gray-600 mb-6">
              "This page is still in the oven. Thank you for your patience! 🍪"
            </p>
            <div className="mb-2">
              <Link
                href="/"
                className="px-6 py-3 bg-rose-600 text-white rounded-lg shadow-md hover:bg-rose-500 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
