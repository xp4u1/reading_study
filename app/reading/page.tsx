"use client";

import { useRouter } from "next/navigation";

import EmpirieBionic from "@/content/empirie-bionic.mdx";

export default function ReadingPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-7 pb-32 lg:py-20 relative">
      <article className="prose prose-lg dark:prose-invert">
        <EmpirieBionic />
      </article>

      {/* <p className="absolute bottom-5 left-5 text-slate-500">00:20</p> */}
      <button
        type="button"
        className="absolute bottom-10 right-10 inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:ring-offset-black"
        onClick={() => router.push("/questions")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </button>
    </main>
  );
}
