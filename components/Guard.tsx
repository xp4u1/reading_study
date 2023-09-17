"use client";

import { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

import { createUUID } from "@/lib/actions";

/**
 * Creates the `userId` and `fingerprint` cookies and prevents normies from participating multiple times.
 */
export default function Guard() {
  const pathname = usePathname();

  useEffect(() => {
    createUUID();

    if (typeof window === "undefined") return;

    const calculateFingerprint = async () => {
      const fingerprint = await FingerprintJS.load();
      const { visitorId } = await fingerprint.get();

      document.cookie = `fingerprint=${visitorId}; expires=${new Date(
        Date.now() + 31536000000
      ).toUTCString()}`;
    };
    if (!document.cookie.includes("fingerprint")) calculateFingerprint();

    if (localStorage.getItem("done") && pathname !== "/thanks")
      redirect("/thanks");
  }, [pathname]);

  return null;
}
