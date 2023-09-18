import { redirect } from "next/navigation";

import FloatingSubmitButton from "@/components/FloatingSubmitButton";
import { Question } from "@/content/Content";
import { saveForm } from "@/lib/actions";

const questions: Question[] = [
  {
    id: "schneller",
    text: "Hast du den Text schneller als herkömmliche Texte gelesen?",
    answers: [
      "Deutlich schneller",
      "Schneller",
      "Kein Unterschied",
      "Langsamer",
      "Deutlich langsamer",
    ],
  },
  {
    id: "leichter",
    text: "War der Text für dich leichter zu lesen?",
    answers: [
      "Deutlich leichter",
      "Leichter",
      "Kein Unterschied",
      "Schwerer",
      "Deutlich schwerer",
    ],
  },
  {
    id: "textverstaendnis",
    text: "Hat dir die Formatierung beim Textverständnis geholfen?",
    answers: ["Überhaupt nicht", "Ein wenig", "Viel", "Sehr viel"],
  },
  {
    id: "woerter_finden",
    text: "Hat dir die Formatierung beim Lösen der Aufgaben geholfen, Wörter im Text zu finden?",
    answers: ["Überhaupt nicht", "Ein wenig", "Viel", "Sehr viel"],
  },
  {
    id: "mehr_texte",
    text: "Würdest du Texte mit dieser Formatierung lesen?",
    answers: ["Ja", "Nein"],
  },
  {
    id: "in_schule",
    text: "Würdest du dir wünschen, dass in der Schule Texte so formatiert werden?",
    answers: ["Ja", "Nein"],
  },
];

export default function BionicPage() {
  async function submitForm(formData: FormData) {
    "use server";

    saveForm(`evaluation_bionic`, formData);
    redirect("/evaluation/personal");
  }

  return (
    <form
      id="form"
      className="prose prose-lg dark:prose-invert"
      action={submitForm}
    >
      <h2>Fragen zur Darstellung</h2>
      <p>
        In deinem Text waren bestimmte Teile von Wörtern fett markiert. Wir
        interessieren uns für deine Erfahrungen mit dieser speziellen
        Formatierung.
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

      <h3>Anmerkungen</h3>
      <p>
        Hier kannst du noch weitere Eindrücke mit uns teilen, musst aber nicht.
      </p>

      <textarea
        id="anmerkungen"
        name="anmerkungen"
        className="form-textarea w-full h-48 border-gray-300 focus:border-primary-500 focus:ring-primary-500 rounded-md"
      ></textarea>

      <FloatingSubmitButton />
    </form>
  );
}
