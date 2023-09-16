"use client";

import { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";

import { createUUID } from "@/lib/actions";

/**
 * Creates the `userId` cookie and prevents normies from participating multiple times.
 */
export default function Guard() {
  const pathname = usePathname();

  useEffect(() => {
    createUUID();

    if (localStorage.getItem("done") && pathname !== "/thanks")
      redirect("/thanks");
  }, [pathname]);

  return null;
}
