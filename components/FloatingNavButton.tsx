"use client";

import { useRouter } from "next/navigation";
import FloatingActionButton from "./FloatingActionButton";

/**
 * Floating button on the bottom right corner with primary color.
 *
 * Add an icon by nesting it as child:
 * ```tsx
 * <FloatingNavButton link="/route">
 *   <svg>
 *     ...
 *   </svg>
 * </FloatingNavButton>
 * ```
 */
export default function FloatingNavButton({
  link,
  children,
}: {
  link: string;
  children: JSX.Element;
}) {
  const router = useRouter();

  return (
    <FloatingActionButton callback={() => router.push(link)}>
      {children}
    </FloatingActionButton>
  );
}
