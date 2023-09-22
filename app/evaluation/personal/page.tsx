import { redirect } from "next/navigation";

import FloatingSubmitButton from "@/components/FloatingSubmitButton";
import { Question } from "@/content/Content";
import { saveForm } from "@/lib/actions";

const questions: Question[] = [
  {
    id: "textverstaendnis",
    text: "Schwierige oder lange Texte zu verstehen ist für dich ...",
    answers: ["Leicht", "Eher leicht", "Ok", "Eher schwer", "Schwer"],
  },
  {
    id: "freude_lesen",
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
    id: "haeufigkeit_lesen",
    text: "Wie oft liest du?",
    answers: ["Nicht sehr oft", "Nicht oft", "Gelegentlich", "Oft", "Sehr oft"],
  },
  {
    id: "ziel_lesen",
    text: "Willst du an der Häufigkeit etwas ändern?",
    answers: ["Nein", "Ich will mehr lesen", "Ich will weniger lesen"],
  },
];

export default function PersonalPage() {
  async function submitForm(formData: FormData) {
    "use server";

    saveForm(`evaluation_personal`, formData);
    redirect("/thanks");
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

      <h3>Freiwillige Angabe</h3>
      <p>Du kannst dein Alter mit uns teilen, musst aber nicht.</p>

      <input
        id="alter"
        name="alter"
        type="number"
        className="form-input w-full max-w-xs focus:border-primary-500 focus:ring-primary-500 border-gray-300"
      />

      <FloatingSubmitButton />
    </form>
  );
}
