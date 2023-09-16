import Empirie from "./empirie.mdx";
import EmpirieBionic from "./empirie-bionic.mdx";

export interface Question {
  id: string;
  text: string;
  answers: string[];
}

export interface Text {
  id: string;
  component: JSX.Element;
  bionicComponent: JSX.Element;
  questions: Question[];
}

export const content: Text[] = [
  {
    id: "empirie",
    component: <Empirie />,
    bionicComponent: <EmpirieBionic />,
    questions: [
      {
        id: "hauptunterschied_empirie_theorie",
        text: "Was ist der Hauptunterschied zwischen Empirie und Theorie?",
        answers: [
          "Empirie basiert auf Deduktion, während Theorie auf Beobachtung beruht.",
          "Empirie stützt sich auf sinnliche Erfahrungen, während Theorie abstrakte Konzepte umfasst.",
          "Empirie verwendet experimentelle Daten, während Theorie mathematische Modelle nutzt.",
          "Empirie wird durch Induktion bestätigt, während Theorie auf Intuition basiert.",
        ],
      },
      {
        id: "wichtigste_methode_objektiv",
        text: "Was ist eine wichtige Methode, um sicherzustellen, dass empirische Daten objektiv sind?",
        answers: [
          "Deduktion",
          "Abstraktion",
          "Systematische Beobachtung",
          "Intuition",
        ],
      },
      {
        id: "rolle_vorhersagen",
        text: "Welche Rolle spielen Vorhersagen in der Überprüfung von Theorien mithilfe empirischer Methoden?",
        answers: [
          "Vorhersagen sind in der empirischen Wissenschaft nicht relevant.",
          "Vorhersagen werden durch Deduktion aus Theorien abgeleitet.",
          "Vorhersagen werden durch Induktion aus Beobachtungen abgeleitet.",
          "Vorhersagen haben keine Bedeutung für die Wissenschaftstheorie.",
        ],
      },
    ],
  },
];
