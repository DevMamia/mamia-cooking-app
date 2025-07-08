"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to mamas page
    router.push('/mamas');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-64">
      <div className="text-center">
        <h1 className="text-mobile-xl font-bold mb-2" style={{ color: 'var(--terracotta)' }}>
          Welcome to MAMIA
        </h1>
        <p className="text-gray-600 text-mobile">
          Redirecting to The Mamas...
        </p>
      </div>
    </div>
  );
}
