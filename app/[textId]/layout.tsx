export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-7 pb-32 lg:py-20 relative">
      {children}
    </main>
  );
}
