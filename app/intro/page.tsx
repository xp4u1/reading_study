"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function IntroPage() {
  const [consent, setConsent] = useState(false);
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-24">
      <article className="prose prose-lg dark:prose-invert">
        <h1>Willkommen</h1>

        <p>
          Gleich wirst du einen Text lesen und danach ein paar Fragen dazu
          beantworten. Nimm dir bitte einen Moment Zeit, um den Text aufmerksam
          zu lesen. Deine Teilnahme bedeutet uns sehr viel – danke schon im
          Voraus!
        </p>

        <div className="flex items-center">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="focus:ring-primary-500 h-5 w-5 text-primary-600 border-gray-300 rounded dark:bg-black focus:dark:ring-offset-black"
            onChange={(event) => setConsent(event.target.checked)}
          />
          <label htmlFor="consent" className="ml-3 block font-medium">
            Ich bin damit einverstanden, dass meine Daten ausgewertet werden.
          </label>
        </div>
      </article>

      {consent && (
        <button
          type="button"
          className="absolute bottom-10 right-10 inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:ring-offset-black"
          onClick={() => router.push("/reading")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      )}
    </main>
  );
}
