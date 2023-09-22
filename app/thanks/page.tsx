"use client";

import { uploadTrackingData } from "@/lib/actions";
import { useEffect } from "react";

export default function Thanks() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    uploadTrackingData(localStorage.getItem("tracker")!);
    localStorage.setItem("done", "true");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="relative text-5xl font-bold">Danke!</h1>
      </div>

      <p className="text-md text-gray-600">
        Du kannst die Seite nun schließen.
      </p>
    </main>
  );
}
