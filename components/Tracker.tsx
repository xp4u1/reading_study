"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface Datapoint {
  path: string;
  timestamp: number;
}

export default function Tracker() {
  if (typeof window === "undefined") return null;

  const pathname = usePathname();
  const trackingData: Datapoint[] = JSON.parse(
    sessionStorage.getItem("tracker") || "[]"
  );

  useEffect(() => {
    sessionStorage.setItem(
      "tracker",
      JSON.stringify([
        ...trackingData,
        {
          path: pathname,
          timestamp: Date.now(),
        },
      ])
    );
  }, [pathname]);

  return null;
}
