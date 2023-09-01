import { content } from "@/content/Content";
import { notFound } from "next/navigation";

export default function QuestionsPage({
  params,
}: {
  params: { textId: string };
}) {
  const text = content.find((text) => text.id == params.textId);
  if (!text) notFound();

  async function submitForm(formData: FormData) {
    "use server";

    // TODO: handle submit
    console.debug(formData);
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

      {/* Cannot use FloatingActionButton here, since it only works in client components */}
      <button
        type="submit"
        className="absolute bottom-10 right-10 inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:ring-offset-black"
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
    </form>
  );
}
