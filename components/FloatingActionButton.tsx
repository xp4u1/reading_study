"use client";

import { floatingButtonClassName } from "./FloatingButton";

/**
 * Floating button on the bottom right corner with primary color.
 *
 * Add an icon by nesting it as child:
 * ```tsx
 * <FloatingActionButton>
 *   <svg>
 *     ...
 *   </svg>
 * </FloatingActionButton>
 * ```
 */
export default function FloatingActionButton({
  callback,
  children,
}: {
  callback: Function;
  children: JSX.Element;
}) {
  return (
    <button
      type="button"
      className={floatingButtonClassName}
      onClick={() => callback()}
    >
      {children}
    </button>
  );
}
