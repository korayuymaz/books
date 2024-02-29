"use server";

import type { Book } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import paths from "@/paths";
import { z } from "zod";

const createBookSchema = z.object({
  name: z.string().min(3),
  author: z.string().min(3),
  state: z.string().min(3),
  imageUrl: z.string().min(3),
});

interface CreateBookFormState {
  errors: {
    name?: string[];
    author?: string[];
    imageUrl?: string[];
    state?: string[];
    _form?: string[]; // For other errors might occur
  };
}

export async function createBook(
  formState: CreateBookFormState,
  formData: FormData
): Promise<CreateBookFormState> {
  const result = createBookSchema.safeParse({
    name: formData.get("name"),
    author: formData.get("author"),
    state: formData.get("state"),
    imageUrl: formData.get("imageUrl"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let book: Book;

  try {
    book = await db.book.create({
      data: {
        name: result.data.name,
        author: result.data.author,
        state: result.data.state,
        imageUrl: result.data.imageUrl,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: { _form: [error.message] },
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
