import Empirie from "./empirie.mdx";
import EmpirieBionic from "./empirie-bionic.mdx";

import Lehrerin from "./lehrerin.mdx";
import LehrerinBionic from "./lehrerin-bionic.mdx";

import Schwimmen from "./schwimmen.mdx";
import SchwimmenBionic from "./schwimmen-bionic.mdx";

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
    id: "lehrerin",
    component: <Lehrerin />,
    bionicComponent: <LehrerinBionic />,
    questions: [
      {
        // Lösung: B
        id: "gefuehle_beruf",
        text: "Was empfindet die Autorin, wenn sie ihren Beruf nennt?",
        answers: [
          "Sie fühlt sich besonders wichtig.",
          "Sie hat gemischte Gefühle.",
          "Sie ist wütend auf die Fragenden.",
          "Sie empfindet nichts.",
        ],
      },
      {
        // Lösung: A
        id: "warum_lehrer",
        text: "Warum ergriff die Autorin den Lehrerberuf?",
        answers: [
          "Sie wollte jungen Menschen etwas fürs Leben mitgeben.",
          "Sie suchte eine Arbeit, die viel Freiraum bietet.",
          "Ihr gefiel die Sicherheit des Arbeitsplatzes.",
          "Sie suchte eine Stelle mit Verantwortung.",
        ],
      },
      {
        // Lösung: C
        id: "oeffentlichkeit_meinung",
        text: "Wie steht nach Meinung der Autorin die Öffentlichkeit zum Beruf des Lehrers?",
        answers: [
          "Man gibt den Lehrern Schuld an gesellschaftlichen Missständen.",
          "Die vormals negative Beurteilung der Lehrer ist zurückgegangen.",
          "Die Beurteilung schwankt zwischen Anerkennung und harter Kritik.",
          "Man hält die Lehrer größtenteils für unfähig.",
        ],
      },
      {
        // Lösung: B
        id: "vorwurf_eltern",
        text: "Die Autorin wirft den Eltern vor, dass sie",
        answers: [
          "ihren Kindern bei Problemen nicht helfen.",
          "nicht mit den Lehrern reden wollen.",
          "ihre Kinder zu Ungehorsam auffordern.",
          "keine Ahnung vom Schulalltag haben.",
        ],
      },
      {
        // Lösung: A
        id: "internet",
        text: "Im Hinblick auf das Internet meint die Autorin, dass",
        answers: [
          "es für bösartige Angriffe die ideale Plattform ist. ",
          "ein richtiger Einsatz zu Verbesserungen führen kann.",
          "man beleidigende Seiten sperren müsste.",
          "man die dort eingestellten Inhalte genau prüfen muss.",
        ],
      },
    ],
  },
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
  {
    id: "schwimmen",
    component: <Schwimmen />,
    bionicComponent: <SchwimmenBionic />,
    questions: [
      {
        // Lösung: A
        id: "ziel_hilfsprojekt",
        text: "Eine Schule in Mainz unterstützt ein Hilfsprojekt, damit ...",
        answers: [
          "afrikanische Kinder die Schule besuchen können.",
          "in Mali ein Internat gebaut werden kann.",
          "eine Wasserleitung installiert werden kann.",
        ],
      },
      {
        // Lösung: C
        id: "ziel_turnier",
        text: "Bei dem Schwimmturnier war es wichtig, dass ...",
        answers: [
          "man als erster ins Ziel kommt.",
          "alle ein gutes Ergebnis erreichen.",
          "möglichst viele Bahnen geschwommen werden.",
        ],
      },
      {
        // Lösung: A
        id: "einnahmen_abhaengigkeit",
        text: "Wie viel Geld eingenommen wurde, war abhängig von ...",
        answers: [
          "den in der Sponsorenliste angegebenen Geldbeträgen.",
          "der Zeitdauer des Schwimmens.",
          "der Anzahl der in der Sponsorenliste eingetragenen Namen.",
        ],
      },
      {
        // Lösung: A
        id: "feststellung_lehrer",
        text: "Die Lehrer bemerkten bei dem Schwimmturnier, dass ...",
        answers: [
          "die Schüler motivierter waren als im normalen Schwimmunterricht.",
          "die Schüler über ihre erreichte Leistung staunten.",
          "manche Schüler keine guten Schwimmer sind.",
        ],
      },
      {
        // Lösung: A
        id: "grund_wiederholung",
        text: "Warum wird bald wieder ein Sportturnier stattfinden? Weil ...",
        answers: [
          "die Schüler sehr gerne daran teilnehmen.",
          "die Schule neue Erfahrungen ermöglicht.",
          "Sport einem guten Zweck dient.",
        ],
      },
      {
        // Lösung: B
        id: "rolle_lehrer",
        text: "Welche Rolle spielten die Lehrer während des Schwimmturniers? Die Lehrer ...",
        answers: [
          "bewerteten die Schwimmleistungen der Schüler.",
          "notierten die zurückgelegten Distanzen der Schüler.",
          "organisierten die Sponsorensuche für die Schüler.",
        ],
      },
    ],
  },
];
