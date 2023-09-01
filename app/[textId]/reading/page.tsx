import { notFound } from "next/navigation";

import { content } from "@/content/Content";
import FloatingNavButton from "@/components/FloatingNavButton";

export default function ReadingPage({
  params,
}: {
  params: { textId: string };
}) {
  const text = content.find((text) => text.id == params.textId);
  if (!text) notFound();

  return (
    <>
      <article className="prose prose-lg dark:prose-invert">
        {text.bionicComponent}
      </article>

      {/* <p className="absolute bottom-5 left-5 text-slate-500">00:20</p> */}
      <FloatingNavButton link="./questions">
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
      </FloatingNavButton>
    </>
  );
}
