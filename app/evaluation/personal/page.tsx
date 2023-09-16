import FloatingSubmitButton from "@/components/FloatingSubmitButton";
import { Question } from "@/content/Content";

const questions: Question[] = [
  {
    id: "freude-lesen",
    text: "Wie gerne liest du?",
    answers: [
      "Nicht sehr gerne",
      "Nicht gerne",
      "Neutral",
      "Gerne",
      "Sehr gerne",
    ],
  },
  {
    id: "haeufigkeit-lesen",
    text: "Wie oft liest du?",
    answers: ["Nicht sehr oft", "Nicht oft", "Gelegentlich", "Oft", "Sehr oft"],
  },
  {
    id: "ziel-lesen",
    text: "Willst du an der Häufigkeit etwas ändern?",
    answers: ["Nein", "Ich will mehr lesen", "Ich will weniger lesen"],
  },
];

export default function PersonalPage() {
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
      <h2>Fast fertig</h2>
      <p>
        Bitte beantworte noch diese Fragen, damit wir unsere Testgruppe besser
        verstehen können.
      </p>

      {questions.map((question, index) => (
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
