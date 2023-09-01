"use client";

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
      className="absolute bottom-10 right-10 inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:ring-offset-black"
      onClick={() => callback()}
    >
      {children}
    </button>
  );
}
