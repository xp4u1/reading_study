import { content } from "@/content/Content";
import { notFound, redirect } from "next/navigation";

export async function generateStaticParams() {
  return content.map((text) => {
    textId: text.id;
  });
}

export default function Page({ params }: { params: { textId: string } }) {
  const text = content.find((text) => text.id == params.textId);
  if (!text) notFound();

  redirect(`/${params.textId}/reading`);
}
