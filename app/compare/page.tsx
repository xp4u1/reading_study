import Empirie from "../content/empirie.mdx";
import EmpirieBionic from "../content/empirie-bionic.mdx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-24 space-x-28">
      <article className="prose prose-lg dark:prose-invert">
        <Empirie />
      </article>

      <article className="prose prose-lg dark:prose-invert">
        <EmpirieBionic />
      </article>
    </main>
  );
}
