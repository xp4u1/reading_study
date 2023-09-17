"use client";

import { useState } from "react";

import FloatingActionButton from "@/components/FloatingActionButton";
import { createUser } from "@/lib/actions";

export default function IntroPage() {
  const [consent, setConsent] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-7 pb-32 lg:py-20 relative">
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
        <FloatingActionButton callback={createUser}>
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
        </FloatingActionButton>
      )}
    </main>
  );
}
