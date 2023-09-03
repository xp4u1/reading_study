import PageWrapper from "@/components/PageWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageWrapper>{children}</PageWrapper>;
}
