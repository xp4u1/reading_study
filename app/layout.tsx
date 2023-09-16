import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import Tracker from "@/components/Tracker";
import Guard from "@/components/Guard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prototyp",
  description: "Prototyp für UI/UX",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0d9488",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}

        <Suspense>
          <Tracker />
          <Guard />
        </Suspense>
      </body>
    </html>
  );
}
