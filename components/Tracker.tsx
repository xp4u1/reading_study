"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface Datapoint {
  path: string;
  timestamp: number;
}

export default function Tracker() {
  const pathname = usePathname();
  const trackingData: Datapoint[] = JSON.parse(
    typeof window !== "undefined"
      ? sessionStorage.getItem("tracker") || "[]"
      : "[]"
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
  }, [pathname, trackingData]);

  return null;
}
