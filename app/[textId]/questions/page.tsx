import { notFound, redirect } from "next/navigation";

import { content } from "@/content/Content";
import FloatingSubmitButton from "@/components/FloatingSubmitButton";
import { saveForm } from "@/lib/actions";
import { cookies } from "next/headers";

export default function QuestionsPage({
  params,
}: {
  params: { textId: string };
}) {
  const text = content.find((text) => text.id == params.textId);
  if (!text) notFound();

  async function submitForm(formData: FormData) {
    "use server";

    saveForm(`questions_${params.textId}`, formData);

    redirect(
      cookies().has("testGroup") ? "/evaluation/bionic" : "/evaluation/personal"
    );
  }

  return (
    <form
      id="form"
      className="prose prose-lg dark:prose-invert"
      action={submitForm}
    >
      <h2>Fragen</h2>
      <p>
        Versuche die Fragen zu beantworten. Falls du dir unsicher bist, kannst
        du jederzeit zum Text zurückkehren. Nutze dafür die Pfeile in deinem
        Browser.
      </p>

      {text.questions.map((question, index) => (
        <>
          <h3>Frage {index + 1}</h3>
          <p>{question.text}</p>

          <div className="mt-4 space-y-4">
            {question.answers.map((answer, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={question.id + "-" + index}
                  name={question.id}
                  value={index}
                  type="radio"
                  required
                  className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                />
                <label
                  htmlFor={question.id + "-" + index}
                  className="ml-3 block"
                >
                  {answer}
                </label>
              </div>
            ))}
          </div>
        </>
      ))}

      <FloatingSubmitButton />
    </form>
  );
}
