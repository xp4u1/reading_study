"use server";

import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { sql } from "@/lib/database";
import { content } from "@/content/Content";

export async function createUUID() {
  if (!cookies().get("userId")) {
    cookies().set("userId", randomUUID(), {
      // one year
      expires: Date.now() + 31536000000,
    });
  }
}

export async function saveForm(formId: string, formData: FormData) {
  // How did they get here?
  if (!cookies().has("userId")) redirect("/intro");

  // The string must exist now.
  const userId = cookies().get("userId")?.value!;

  const questions = Array.from(formData.keys());
  const answers = Array.from(formData.values()).map((entry) => `${entry}`);
  const data: any = {};

  questions.forEach((question, index) => {
    data[question] = answers[index];
  });
  data["user_id"] = userId;

  await sql`
    insert into ${sql.unsafe(formId)} ${sql(data)}
  `
    // Update if insert fails.
    .catch(async () => {
      await sql`
        update ${sql.unsafe(formId)} set ${sql(data)}
        where user_id = ${userId}
      `;
    });
}

export async function createUser() {
  const userId = cookies().get("userId")?.value!;
  const fingerprint = cookies().get("fingerprint")?.value!;

  const [{ test: test_group, control: control_group }]: [
    { test: number; control: number }
  ] = await sql`
    SELECT 
        SUM(CASE WHEN test = true THEN 1 ELSE 0 END) AS test,
        SUM(CASE WHEN test = false THEN 1 ELSE 0 END) AS control
    FROM users;
  `;

  // Try to keep both groups equal in size.
  // If there are equal numbers, the test group is assigned.
  let test = true;
  if (test_group > control_group) test = false;

  if (test) cookies().set("testGroup", "true");

  await sql`
    insert into users (id, fingerprint, test)
    values (${userId}, ${fingerprint}, ${test})
  `;

  // TODO: Dynamic Redirect
  redirect(`/${content[0].id}/reading`);
}
