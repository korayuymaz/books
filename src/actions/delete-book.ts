"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import paths from "@/paths";

interface BookData {
  id: number;
}

export async function deleteBookState({ id }: BookData) {
  console.log("Delete girdi");
  try {
    const deleteBook = await db.book.delete({
      where: {
        id: id,
      },
    });
  } catch (err: unknown) {
    alert("Something went wrong");
  }

  revalidatePath("/");
  redirect(paths.home());
}
