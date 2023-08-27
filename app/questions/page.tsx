interface Question {
  id: string;
  text: string;
  answers: string[];
}

const questions: Question[] = [
  {
    id: "hauptunterschied-empirie-theorie",
    text: "Was ist der Hauptunterschied zwischen Empirie und Theorie?",
    answers: [
      "Empirie basiert auf Deduktion, während Theorie auf Beobachtung beruht.",
      "Empirie stützt sich auf sinnliche Erfahrungen, während Theorie abstrakte Konzepte umfasst.",
      "Empirie verwendet experimentelle Daten, während Theorie mathematische Modelle nutzt.",
      "Empirie wird durch Induktion bestätigt, während Theorie auf Intuition basiert.",
    ],
  },
  {
    id: "wichtigste-methode-objektiv",
    text: "Was ist eine wichtige Methode, um sicherzustellen, dass empirische Daten objektiv sind?",
    answers: [
      "Deduktion",
      "Abstraktion",
      "Systematische Beobachtung",
      "Intuition",
    ],
  },
  {
    id: "rolle-vorhersagen",
    text: "Welche Rolle spielen Vorhersagen in der Überprüfung von Theorien mithilfe empirischer Methoden?",
    answers: [
      "Vorhersagen sind in der empirischen Wissenschaft nicht relevant.",
      "Vorhersagen werden durch Deduktion aus Theorien abgeleitet.",
      "Vorhersagen werden durch Induktion aus Beobachtungen abgeleitet.",
      "Vorhersagen haben keine Bedeutung für die Wissenschaftstheorie.",
    ],
  },
];

export default function QuestionsPage() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-7 pb-32 lg:py-20 relative">
      <form id="form" className="prose prose-lg dark:prose-invert">
        <h2>Fragen</h2>
        <p>
          Versuche die Fragen zu beantworten. Falls du dir unsicher bist, kannst
          du jederzeit zum Text zurückkehren. Nutze dafür die Pfeile in deinem
          Browser.
        </p>

        {questions.map((question, index) => (
          <>
            <h3>Frage {index + 1}</h3>
            <p>{question.text}</p>

            <div className="mt-4 space-y-4">
              {question.answers.map((answer, index) => (
                <div className="flex items-center">
                  <input
                    id={question.id + "-" + index}
                    name={question.id}
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
      </form>

      <button
        type="button"
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
    </main>
  );
}
