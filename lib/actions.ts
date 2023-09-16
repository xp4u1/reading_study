"use server";

import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { sql } from "@/lib/database";

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
