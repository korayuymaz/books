"use server";

import type { Book } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import paths from "@/paths";

interface BookData {
  id: number;
  state: string;
}

export async function updateBookState({ id, state }: BookData) {
  try {
    const updatedBook = await db.book.updateMany({
      where: {
        id: id,
      },
      data: {
        state: state,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: { _form: [err.message] },
      };
    } else {
      return {
        errors: { _form: ["Something went wrong"] },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.home());
}
