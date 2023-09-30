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
  let allowNextStep = false;

  try {
    const [{ test: test_group_member }] = await sql`
      INSERT INTO users (id, fingerprint, test)
      VALUES (${userId}, ${fingerprint},
          (SELECT
              CASE
                  WHEN (
                      SELECT COUNT(*) FROM users WHERE test = true
                  ) > (
                      SELECT COUNT(*) FROM users WHERE test = false
                  ) THEN false
                  ELSE true
              END
          )
      )
      RETURNING test;
    `;

    if (test_group_member) cookies().set("testGroup", "true");

    allowNextStep = true;
  } catch (error) {
    // If inserting fails, try updating.
    await sql`
      UPDATE users SET fingerprint=${fingerprint}
      WHERE id = ${userId}
    `;

    allowNextStep = true;
  }

  // TODO: Dynamic Redirect
  if (allowNextStep) redirect(`/${content[0].id}/reading`);
}

export async function uploadTrackingData(trackingData: string) {
  if (!cookies().has("userId")) redirect("/intro");
  const userId = cookies().get("userId")?.value!;

  const data = {
    user_id: userId,
    data: trackingData,
  };

  await sql`
    insert into tracking ${sql(data)}
  `;
}
